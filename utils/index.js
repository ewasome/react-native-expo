export function mapColorDetails(data) {
  const codes = ['rgb', 'hsl', 'hsv', 'cmyk'];

  return codes.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: data[cur].value,
    }),
    {},
  );
}

export function mapPalettes(data) {
  return data.map((pallette) => ({
    ...pallette,
    colors: pallette.colors.map((c) => ({
      name: c.colorName,
      hexValue: c.hexCode,
    })),
  }));
}
