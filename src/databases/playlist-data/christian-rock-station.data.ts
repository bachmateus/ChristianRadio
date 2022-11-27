import Station from "../../modules/station/model/Station"

export const christianRockDotNetStations: Station[] = [
  {
    id: 1,
    stationCode: 'CRDN',
    name: "Christian Rock",
    site: "https://www.christianrock.net/",
    endpoint: "https://www.christianrock.net/iphoneCRDN.asp",
    url: "https://shoutcast.christianrock.net/stream/1",
    logo: require('../../assets/CRDN-logo.png'),
    thumb: require('../../assets/CRDN-logo.png'),
  },
  {
    id: 2,
    stationCode: "CHRDN",
    name: "Christian Hard Rock",
    site: "https://www.christianhardrock.net/",
    endpoint: "https://www.christianhardrock.net/iphoneCHRDN.asp",
    url: "https://shoutcast.christianrock.net/stream/3",
    logo: require("../../assets/CHRDN-logo.png"),
    thumb: require("../../assets/CHRDN-logo.png"),
  },
  {
    id: 3,
    stationCode: "CHDN",
    name: "Christian Hits",
    site: "https://www.christianhits.net/",
    endpoint: "https://www.christianhits.net/iphoneCHDN.asp",
    url: "https://shoutcast.christianrock.net/stream/5",
    logo: require("../../assets/CHDN-logo.png"),
    thumb: require("../../assets/CHDN-logo.png"),
  },
  {
    id: 4,
    stationCode: "CPPDN",
    name: "Christian Power Praise",
    site: "https://www.christianpowerpraise.net/",
    endpoint: "https://www.christianpowerpraise.net/iphoneCPPDN.asp",
    url: "https://shoutcast.christianrock.net/stream/7",
    logo: require("../../assets/CPPDN-logo.png"),
    thumb: require("../../assets/CPPDN-logo.png"),
  },
  {
    id: 5,
    stationCode: "CCRDN",
    name: "Christian Classic Rock",
    site: "https://www.christianclassicrock.net/",
    endpoint: "https://www.christianclassicrock.net/iphoneCCRDN.asp",
    url: "https://shoutcast.christianrock.net/stream/9",
    logo: require("../../assets/CCRDN-logo.png"),
    thumb: require("../../assets/CCRDN-logo.png"),
  }
];