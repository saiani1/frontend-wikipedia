import { atom } from "recoil";
import { DUMMY_DATA } from "./../assets/datas/dummyData";

export const totalDataState = atom({
  key: "totalDataState",
  default: DUMMY_DATA,
});
