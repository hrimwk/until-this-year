import { DefaultTheme } from 'styled-components';

const colors = {
  p_dark: '#1B395F',
  p_mid: '#79A8D6',
  p_light: '#C5D7E5',

  luck_gr: '#A3D4B6',
  luck_r: '#F9A997',
  luck_bl: '#9FDFEA',
  luck_p: '#F1C5E1',
  luck_g: '#F4D8A2',

  border: '#EEEEEE',
  text_title_bk: '#000000',
  text_title_wh: '#FFFFFF',
  text_body_900: '#212121',
  text_body_700: '#616161',
  text_system: '#9E9E9E',
};
const fonts = {
  title: 'SANJUGotgam',
  system: 'NanumSquareNeo-Variable',
  talk: 'LeeSeoyun',
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
