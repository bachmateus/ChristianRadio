import { 
  CRock,
  CHardRock,
  CHits,
  CPpowerPraise,
  CClassicRock 
} from "../../../../databases/christianRockStation.data";
import Station from "../../model/Station";
import Track from "../../model/Track";
import IStationRepository from "../IStationRepository";

interface ApiResponse {
  Artist: string;
  Artists: string[];
  ArtistsCount: string;
  CCRDNComingUp: Track[];
  CCRDNPlayList: Track[];
  CCRDN_Artist: string;
  CCRDN_CD: string;
  CCRDN_CDCover: string;
  CCRDN_Title: string;
  CCRDN_Year: string;
  CD: string;
  CDCover: string;
  CHDNComingUp: Track[];
  CHDNPlayList: Track[];
  CHDN_Artist: string;
  CHDN_CD: string;
  CHDN_CDCover: string;
  CHDN_Title: string;
  CHDN_Year: string;
  CHRDNComingUp: Track[];
  CHRDNPlayList: Track[];
  CHRDN_Artist: string;
  CHRDN_CD: string;
  CHRDN_CDCover: string;
  CHRDN_Title: string;
  CHRDN_Year: string;
  CPPDNComingUp: Track[];
  CPPDNPlayList: Track[];
  CPPDN_Artist: string;
  CPPDN_CD: string;
  CPPDN_CDCover: string;
  CPPDN_Title: string;
  CPPDN_Year: string;
  CRDNComingUp: Track[];
  CRDNPlayList: Track[];
  CRDN_Artist: string;
  CRDN_CD: string;
  CRDN_CDCover: string;
  CRDN_Title: string;
  CRDN_Year: string;
  ComingUp: string[];
  ExtraInfo: string;
  HugeCDCover: string;
  HugeSongCDCover: string;
  Label: string;
  LargeCDCover: string;
  LargeSongCDCover: string;
  Lyrics: number;
  SecondsToEnd: number;
  SongCDCover: string;
  SongCode: number;
  SoundType: string;
  Title: string;
  Year: number;
  iTunes: string;
  isFavorite: boolean | null
}

export default class ChristianRockRepository implements IStationRepository{
  apiUrl:string = "https://www.christianhardrock.net";
  endpoint:string = "/iphoneCHRDN.asp?_=1620442597658";
  serverResponse:ApiResponse = null;

  listAll(): Promise<Station[]> {
    const stations:Station[] = [
      CRock,
      CHardRock,
      CHits,
      CPpowerPraise,
      CClassicRock
    ];

    return new Promise((resolve) => {
      resolve(stations)
    });
  }

  async getCurrentTrackPlaying(station:Station): Promise<Track> {
    const { stationCode } = station;
    const serverResp = await this.getServerApiResponser();
    const currentTrack = new Track();
    currentTrack.Artist = serverResp[stationCode + '_Artist'];
    currentTrack.CD = serverResp[stationCode + '_CD'];
    currentTrack.CDCover = this.apiUrl + serverResp[stationCode + '_CDCover'];
    currentTrack.Title = serverResp[stationCode + '_Title'];

    return currentTrack;
  }

  async getServerApiResponser():Promise<ApiResponse> {
    if (this.serverResponse)
      return this.serverResponse

    console.log('getServerApiResponser');
    try {
      const apiResponse = await fetch(this.apiUrl + this.endpoint, {
        method:'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
      }).then((r)=>r.json());

      this.serverResponse = apiResponse;

      return apiResponse;
    } catch (e) {
        throw new Error(e);
    }
  }
}