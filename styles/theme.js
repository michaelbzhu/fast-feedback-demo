import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};

const fontWeights = {
  normal: 400,
  medium: 600,
  large: 700
};

const customTheme = extendTheme({ fonts, fontWeights });

export default customTheme;
