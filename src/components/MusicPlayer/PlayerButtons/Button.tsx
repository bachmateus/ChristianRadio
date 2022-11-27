import { Image, TouchableOpacity, ImageSourcePropType, ImageStyle, StyleProp } from "react-native"

interface Props {
  onPress: () => void,
  icon: ImageSourcePropType,
  style: StyleProp<ImageStyle>
}

export default function Button({ onPress, icon, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} style={style}/>
    </TouchableOpacity>
  )
}