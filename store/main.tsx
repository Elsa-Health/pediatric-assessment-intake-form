import create from "zustand";

import { useHeaderInformation } from "./headerInformation";

//readonly json to be inserted into the database

// Listening to all changes, fires on every change
const headerinfo = useHeaderInformation.subscribe(console.log)

export const useMainStore = create((set) => ({
  //using patientId as ID, not sure i will relook this decision

  // pulling all the stores here

  patientId: useHeaderInformation.subscribe(console.log),
  visitdate: "",
  patientInfo: {},
  chiefComplains: {},

  //thos is to update all data state
}));
