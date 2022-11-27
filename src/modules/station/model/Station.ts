import { ImageProps } from "react-native"

export default class Station {
  id?: number
  stationCode: string 
  name: string
  site: string
  url: string
  endpoint: string
  logo: Readonly<ImageProps>
  thumb: Readonly<ImageProps>
}