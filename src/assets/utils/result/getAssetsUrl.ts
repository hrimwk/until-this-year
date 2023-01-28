const getAssetUrl = (fortune: string) => {
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

export default getAssetUrl;
