import React, { useEffect, useState } from 'react';
import { View, FlatList, Modal } from "react-native";
import { connect } from 'react-redux';
import Station from '../../modules/station/model/Station';
import listAllStationUseCase from '../../modules/station/useCases/listAllStation';
import { AppReducerTypes } from '../../reducers/types';
import RenderStation from './RenderStation';
import styles from './styles';
import { setStationData } from '../../reducers/stationReducer/actions';
import { useCurrentTrack } from '../../hooks';
import { stationsList } from '../../databases/playlist-data';


interface Props {
  station: Station
  setStationData: Function
}

function StationsConnect({station, setStationData}: Props) {
  const [ stations, setStations ] = useState<Station[]>();
  const stationIndex = useCurrentTrack().index;
  
  const onload = async () => {
    const stations = await listAllStationUseCase.execute();
    setStations(stations);    
  }

  useEffect(()=>{
    onload();
  },[])

  const handleStationSelected = (station:Station) => {
    setStationData(station);
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={stationsList as Station[]}
        renderItem={ ({item, index}) => 
          <RenderStation 
            station={item} 
            isBeginPlayed={index === stationIndex}
            handleStationSelected={() => handleStationSelected(item)}
          />
        }
      />
    </View>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    station: state.stationReducer
  }
}

const Stations = connect(mapStateToProps, { setStationData })(StationsConnect);
export default Stations;