import { View } from "react-native";
import styles from "../styles";
import PlayPauseButton from "./PlayPauseButton";
import SkipButton from "./SkipButton";

export default function PlayerButtons() {
  return (
    <View style={styles.containerButtons}>
      <SkipButton buttonType='previous'/>
      <PlayPauseButton/>
      <SkipButton buttonType='next'/>
    </View>
  );
}