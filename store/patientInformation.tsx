import create from "zustand";

export const initialPatientInfo = {
  dob: "",
  years: "",
  months: "",
  days: "",
  sex: "",
  location: "",
  otherMedicalConditaion: "",
}
export const usePatientInformation = create((set) => ({
  ...initialPatientInfo,
  //thos is to update all data state
  setPatientInformation: (data) => set((state) => ({ ...state, ...data })),
}));
