export const frontCardUrl = [
  { alt: 'love', url: '../src/assets/images/result/love_front.jpg' },
  { alt: 'money', url: '../src/assets/images/result/money_front.jpg' },
  { alt: 'relationship', url: '../src/assets/images/result/relationship_front.jpg' },
  { alt: 'ego', url: '../src/assets/images/result/ego_front.jpg' },
  { alt: 'health', url: '../src/assets/images/result/health_front.jpg' },
];

export const backCardUrl = [
  '../src/assets/images/result/love_back.jpg',
  '../src/assets/images/result/money_back.jpg',
  '../src/assets/images/result/relationship_back.jpg',
  '../src/assets/images/result/ego_back.jpg',
  '../src/assets/images/result/health_back.jpg',
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
