export const frontCardUrl = [
  { alt: 'love', url: '../src/assets/images/result/love_front.jpeg' },
  { alt: 'money', url: '../src/assets/images/result/money_front.jpeg' },
  { alt: 'relationship', url: '../src/assets/images/result/relationship_front.jpeg' },
  { alt: 'ego', url: '../src/assets/images/result/ego_front.jpeg' },
  { alt: 'health', url: '../src/assets/images/result/health_front.jpeg' },
];

export const backCardUrl = [
  '../src/assets/images/result/love_back.jpeg',
  '../src/assets/images/result/money_back.jpeg',
  '../src/assets/images/result/relationship_back.jpeg',
  '../src/assets/images/result/ego_back.jpeg',
  '../src/assets/images/result/health_back.jpeg',
];

export const getAssetUrl = (fortune: string) => {
  switch (fortune) {
    case 'love':
      return 0;
    case 'money':
      return 1;
    case 'relationship':
      return 2;
    case 'ego':
      return 3;
    case 'health':
      return 4;
    default:
      return 0;
  }
};
