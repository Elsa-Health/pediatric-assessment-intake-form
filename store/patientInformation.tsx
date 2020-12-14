import create from "zustand";

export const usePatientInformation = create((set) => ({
    dob:"",
    years:"",
    months:"",
    days:"",
    sex:"",
    location:"",
    otherMedicalConditaion:"",
    //thos is to update all data state
    setPatientInformation: (data) => set((state) => ({ ...state, ...data })),
  }));
  