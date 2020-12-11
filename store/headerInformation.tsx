import create from "zustand";

export const initialHeaderInfo = {
  patientID: "",
  visitDate: "",
}

export const useHeaderInformation = create((set) => ({
  ...initialHeaderInfo,
  //thos is to update all data state
  setHeaderInfo: (data) => set((state) => ({ ...state, ...data })),
}));
