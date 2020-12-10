import create from "zustand";

export const useBirthHistory = create((set) => ({
  gestation: "",
  mothersAgeAtDelivery: "",
  complicationsAfterDelivery: "",
  apgarScore: "",
  additionalBirthHistoryNotes: "",

  //thos is to update all data state
  setBirthHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const useNutritionalHistory = create((set) => ({
  breastfed: "",
  wasItExclusive: "",
  breadfeedingStartTime: "",
  breastfeedingStartTimeMonths: "",
  vitaminASupplements: "",

  //thos is to update all data state
  setNutritionalHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const useVaccinationHistory = create((set) => ({
  updateOnAllVaccines: "",
  missingNotes: "",

  //thos is to update all data state
  setVaccinationHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const useMedicalHistory = create((set) => ({
  previousSubmission: "",
  whyPreviousSubmission: "",
  antibioticUse: "",
  //thos is to update all data state
  setMedicalHistory: (data) => set((state) => ({ ...state, ...data })),
}));
