#include <wdmsec.h>
#include <evntcons.h>

// GUID do driver
DEFINE_GUID(DRIVER_GUID, 0x12345678, 0x9abc, 0xdef0, 0x1234, 0x56789abcde0f);

// Estrutura do dispositivo
typedef struct _DEVICE_EXTENSION {
  WDFDEVICE Device;
  WDFQUEUE Queue;
  PDEVICE_OBJECT Fdo;
} DEVICE_EXTENSION, *PDEVICE_EXTENSION;

// Função para manipular solicitações de I/O
NTSTATUS OnDeviceIoControl(WDFDEVICE Device, WDFREQUEST Request, ULONG IoControlCode, PVOID InputBuffer, ULONG InputBufferSize, PVOID OutputBuffer, ULONG OutputBufferSize, PSIZE_T BytesReturned) {
  UNREFERENCED_PARAMETER(Device);

  NTSTATUS Status = STATUS_SUCCESS;

  switch (IoControlCode) {
  case IOCTL_SIMULATE_KEYBOARD_INPUT: {
    // Simular entrada de teclado
    PKEYBOARD_INPUT_DATA InputData = (PKEYBOARD_INPUT_DATA)InputBuffer;

    // Injetar evento de entrada de teclado
    SendInput(1, &InputData, sizeof(KEYBOARD_INPUT_DATA));

    break;
  }
  case IOCTL_SIMULATE_MOUSE_INPUT: {
    // Simular entrada de mouse
    PMOUSE_INPUT_DATA InputData = (PMOUSE_INPUT_DATA)InputBuffer;

    // Injetar evento de entrada de mouse
    mouse_event(InputData->dwFlags, InputData->dx, InputData->dy, InputData->dwData, 0);

    break;
  }
  default: {
    Status = STATUS_INVALID_DEVICE_REQUEST;
    break;
  }
  }

  return Status;
}

// Função de entrada do driver
NTSTATUS DriverEntry(PDRIVER_OBJECT DriverObject, PUNICODE_STRING RegistryPath) {
  UNREFERENCED_PARAMETER(RegistryPath);

  WDF_DRIVER_CONFIG DriverConfig;
  WDFDEVICE Device;
  PDEVICE_EXTENSION DeviceExtension;

  // Inicializar a configuração do driver
  WDF_DRIVER_CONFIG_INIT(&DriverConfig, WDF_DRIVER_TYPE_UMDF);

  // Criar um dispositivo
  NTSTATUS Status = WdfDriverCreate(DriverObject, &DriverConfig, &Device);
  if (!NT_SUCCESS(Status)) {
    return Status;
  }

  // Obter a extensão do dispositivo
  DeviceExtension = GetDeviceExtension(Device);

  // Criar uma fila de I/O
  Status = WdfIoQueueCreate(Device, WDF_IO_QUEUE_TYPE_DEVICE_ONLY, &DeviceExtension->Queue);
  if (!NT_SUCCESS(Status)) {
    return Status;
  }

  // Configurar a manipulação de solicitações de I/O
  WdfDeviceSetIoControlHandler(Device, OnDeviceIoControl);

  // Registrar o dispositivo no gerenciador de dispositivos
  Status = WdfDeviceCreateDeviceInterface(Device, &GUID_DEVINTERFACE_MOUSE, NULL);
  if (!NT_SUCCESS(Status)) {
    return Status;
  }

  return Status;
}
