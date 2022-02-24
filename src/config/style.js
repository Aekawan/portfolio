export const COLOR = {
  blue: "#c2c7fb",
  green: "#9be3de",
  lightGreen: "#dcffcc",
  black: "#212121",
  white: "#ffff",
  pink: "#e6b2c6",
}

export const COLOR_COLLECTION = {
  primary: COLOR.pink,
  secondary: COLOR.green,
}

export const getColorByProps = props => {
  if (props.primary) return COLOR_COLLECTION.primary
  if (props.secondary) return COLOR_COLLECTION.secondary
  return COLOR_COLLECTION.primary
}
