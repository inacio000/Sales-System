import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './Text.style';
import { textType } from './TextType';
import { useMemo } from 'react';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textType.TITLE_BOLD:
      case textType.TITLE_REGULAR:
      case textType.TITLE_LIGHT:
        return '24px';

      case textType.SUB_TITLE_BOLD:
      case textType.SUB_TITLE_REGULAR:
      case textType.SUB_TITLE_LIGHT:
        return '20px';

      case textType.BUTTON_BOLD:
      case textType.BUTTON_REGULAR:
      case textType.BUTTON_LIGHT:
        return '18px';

      case textType.PARAGRAPH_SMALL_BOLD:
      case textType.PARAGRAPH_SMALL_REGULAR:
      case textType.PARAGRAPH_SMALL_LIGHT:
        return '10px';

      case textType.PARAGRAPH_BOLD:
      case textType.PARAGRAPH_LIGHT:
      case textType.PARAGRAPH_REGULAR:
      default:
        return '14px';

    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textType.TITLE_BOLD:
      case textType.SUB_TITLE_BOLD:
      case textType.PARAGRAPH_SMALL_BOLD:
      case textType.PARAGRAPH_BOLD:
      case textType.BUTTON_BOLD:
        return 'Poppins-Bold';

      case textType.TITLE_LIGHT:
      case textType.SUB_TITLE_LIGHT:
      case textType.PARAGRAPH_SMALL_LIGHT:
      case textType.PARAGRAPH_LIGHT:
      case textType.BUTTON_LIGHT:
        return 'Poppins-Light';

      case textType.TITLE_REGULAR:
      case textType.SUB_TITLE_REGULAR:
      case textType.PARAGRAPH_SMALL_REGULAR:
      case textType.PARAGRAPH_REGULAR:
      case textType.BUTTON_REGULAR:
        return 'Poppins-Regular'


      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return <ContainerText fontFamily={fontFamily} fontSize={fontSize} color={color} {...props} />;
};

export default Text;
