import { DefaultTheme } from 'styled-components';

export const getFortuneColor = (fortune: string | null) => {
  switch (fortune) {
    case 'love':
      return 'luck_p';
    case 'money':
      return 'luck_g';
    case 'relationship':
      return 'luck_bl';
    case 'ego':
      return 'luck_r';
    case 'health':
      return 'luck_gr';
    default:
      return 'luck_bl';
  }
};

export type KkachiColorProps = {
  theme: DefaultTheme;
  $fortuneColor: string;
};
