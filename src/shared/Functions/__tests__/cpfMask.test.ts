import { insertMaskInCpf, validateCpf } from '../cpfMask';

const CPF_VALID = '10674261089';
const CPF_INVALID = '12345678900';
const CPF_WITH_MASK = '123.456.789-00';
const CPF_INVALID_ZERO = '00000000000';
const CPF_INVALID_LENGTH = '123675';

describe('CPF', () => {

  it('should insert mask in cpf', () => {
    expect(CPF_WITH_MASK).toEqual(insertMaskInCpf(CPF_INVALID));
  });

  it('should valid cpf', () => {
    expect(true).toEqual(validateCpf(CPF_VALID));
  });

  it('should invalid cpf', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID));
  });

  it('should invalid cpf in all zero', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID_ZERO));
  });

  it('should invalid cpf in length != 11', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID_LENGTH));
  });
});
