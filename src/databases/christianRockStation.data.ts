import Station from "../modules/station/model/Station"

export const CRock = new Station();
CRock.id= 1;
CRock.stationCode= 'CRDN';
CRock.name= "Christian Rock";
CRock.site= "https://www.christianrock.net/";
CRock.endpoint= "https://www.christianrock.net/iphoneCRDN.asp";
CRock.url= "https://shoutcast.christianrock.net/stream/1";
CRock.logo= require('../assets/CRDN-logo.png');

export const CHardRock = new Station();
CHardRock.id = 2;
CHardRock.stationCode = "CHRDN";
CHardRock.name = "Christian Hard Rock";
CHardRock.site = "https://www.christianhardrock.net/";
CHardRock.endpoint = "https://www.christianhardrock.net/iphoneCHRDN.asp";
CHardRock.url = "https://shoutcast.christianrock.net/stream/3";
CHardRock.logo = require("../assets/CHRDN-logo.png");

export const CHits = new Station();
CHits.id = 3;
CHits.stationCode = "CHDN";
CHits.name = "Christian Hits";
CHits.site = "https://www.christianhits.net/";
CHits.endpoint = "https://www.christianhits.net/iphoneCHDN.asp";
CHits.url = "https://shoutcast.christianrock.net/stream/5";
CHits.logo = require("../assets/CHDN-logo.png");

export const CPpowerPraise = new Station();
CPpowerPraise.id = 4;
CPpowerPraise.stationCode = "CPPDN";
CPpowerPraise.name = "Christian Power Praise";
CPpowerPraise.site = "https://www.christianpowerpraise.net/";
CPpowerPraise.endpoint = "https://www.christianpowerpraise.net/iphoneCPPDN.asp";
CPpowerPraise.url = "https://shoutcast.christianrock.net/stream/7";
CPpowerPraise.logo = require("../assets/CPPDN-logo.png");

export const CClassicRock = new Station();
CClassicRock.id = 5;
CClassicRock.stationCode = "CCRDN";
CClassicRock.name = "Christian Classic Rock";
CClassicRock.site = "https://www.christianclassicrock.net/";
CClassicRock.endpoint = "https://www.christianclassicrock.net/iphoneCCRDN.asp";
CClassicRock.url = "https://shoutcast.christianrock.net/stream/9";
CClassicRock.logo = require("../assets/CCRDN-logo.png");