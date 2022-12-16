import { View } from "react-native";
import { Image, TouchableOpacity, ImageSourcePropType, ImageStyle, StyleProp } from "react-native"

interface Props {
  onPress: () => void,
  icon: ImageSourcePropType,
  style: StyleProp<ImageStyle>,
  disabled?: boolean
}

export default function Button({ onPress, icon, style, disabled = false }: Props) {
  if (disabled){
    return (
      <View>
        <Image source={icon} style={[style, { opacity: 0.3 }]}/>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} style={style}/>
    </TouchableOpacity>
  )
}