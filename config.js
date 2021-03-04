const config = {
  api: {
    colorPalletes: 'https://color-palette-api.kadikraman.now.sh/palettes',
    colorFormates: 'http://thecolorapi.com/id',
  },
};

export function getColorPalletesApiUrl() {
  return config.api.colorPalletes;
}

export function getColorFormatesApiUrl() {
  return config.api.colorFormates;
}
