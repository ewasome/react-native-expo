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
