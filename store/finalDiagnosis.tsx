import create from "zustand";

//not sure how to handle data on the form here
export const useFinalDiagnosis = create((set) => ({
  finalDiagnosisText: "",
  //thos is to update all data state
  setFinalDiagnosis: (data) => set((state) => ({ ...state, ...data })),
}));


