import { useEffect } from "react";
import { Button, Modal, Text, View } from "react-native";
import SignIn from "../../components/SignIn";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";
import listAllStationUseCase from "../../modules/station/useCases/listAllStation";

export default function Home() {
  const onload = async () => {


    const getCurrentTrack = getCurrentTrackUseCaseInstance();

    try {
      console.log('stations');
      const stations = await listAllStationUseCase.execute();
      const currentTrack0 = await getCurrentTrack.execute(stations[0])
      const currentTrack1 = await getCurrentTrack.execute(stations[1])
      const currentTrack2 = await getCurrentTrack.execute(stations[2])
  
      console.log(currentTrack0);
      console.log(currentTrack1);
      console.log(currentTrack2);
    } catch (e) {
      console.log(e);
    }
  }

  return ( <View>
    <Text>asdasdasd</Text>
    <Button title="press" onPress={onload} />
    <Modal
      
    >
      <SignIn />
    </Modal>
    {/* <Button
      title="Google Sign-In"
      onPress={() => {
        promptAsync();
        }}
    /> */}
  </View>
  );
}