import create from "zustand";

//not sure how to handle data on the form here
export const useMalariaTests = create((set) => ({
  bloodSlide: "",
  bloodSlideValue: "",

  rapidTest: "",
  rapidTestValue: "",

  // thos is to update all data state
  setMalariaTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useMicrobiologyTests = create((set) => ({
  lumberPuncture: "",
  lumberPunctureValue: "",

  bloodCulture: "",
  bloodCultureValue: "",

  // thos is to update all data state
  setMicrobiologyTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useTBTests = create((set) => ({
  microAAFBs: "",
  microAAFBsValue: "",

  mantoux: "",
  mantouxValue: "",

  xpertMTBRIF: "",
  xpertMTBRIFValue: "",

  mycoTBCulture: "",
  mycoTBCultureValue: "",

  // thos is to update all data state
  setTBTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useChemistryTests = create((set) => ({
  nak: "",
  nakValue: "",

  uc: "",
  ucValue: "",

  caphos: "",
  caphosValue: "",

  alb: "",
  albValue: "",

  lft: "",
  lftValue: "",

  // thos is to update all data state
  setChemistryTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useStoolTests = create((set) => ({
  microscopy: "",
  microscopyValue: "",

  microCulture: "",
  microCultureValue: "",

  // thos is to update all data state
  setStoolTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useHematologyTests = create((set) => ({
  hb: "",
  hbValue: "",

  fullBloodPicture: "",
  fullBloodPictureValue: "",

  // thos is to update all data state
  setHematologyTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useXRayTests = create((set) => ({
  cxr: "",
  cxrValue: "",

  other: "",
  otherValue: "",

  // thos is to update all data state
  setXRayTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useGlucoseTests = create((set) => ({
  stickTest: "",
  stickTestValue: "",

  laboratory: "",
  laboratoryValue: "",

  // thos is to update all data state
  setGlucoseTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useHIVTests = create((set) => ({
  rapidTest: "",
  rapidTestValue: "",

  pcr: "",
  pcrValue: "",

  // thos is to update all data state
  setHIVTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const useUrineTests = create((set) => ({
  urinalysis: "",
  urinalysisValue: "",

  microCulture: "",
  microCultureValue: "",

  // thos is to update all data state
  setUrineTests: (data) => set((state) => ({ ...state, ...data })),
}));
