import create from "zustand";

export const useHeaderInformation = create((set) => ({
  patientID: "",
  visitDate: "",
  //thos is to update all data state
  setHeaderInfo: (data) => set((state) => ({ ...state, ...data })),
}));
