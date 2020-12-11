import create from "zustand";

export const initialMalariaTests = {
  bloodSlide: "",
  bloodSlideValue: "",

  rapidTest: "",
  rapidTestValue: "",
}
//not sure how to handle data on the form here
export const useMalariaTests = create((set) => ({
  ...initialMalariaTests,
  // thos is to update all data state
  setMalariaTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialMicrobiologyTests = {
  lumberPuncture: "",
  lumberPunctureValue: "",

  bloodCulture: "",
  bloodCultureValue: "",
}

export const useMicrobiologyTests = create((set) => ({

  ...initialMicrobiologyTests,
  // thos is to update all data state
  setMicrobiologyTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialTbTests = {
  microAAFBs: "",
  microAAFBsValue: "",

  mantoux: "",
  mantouxValue: "",

  xpertMTBRIF: "",
  xpertMTBRIFValue: "",

  mycoTBCulture: "",
  mycoTBCultureValue: "",
}

export const useTBTests = create((set) => ({

  ...initialTbTests,
  // thos is to update all data state
  setTBTests: (data) => set((state) => ({ ...state, ...data })),
}));


export const initialChemistryTests = {
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
}
export const useChemistryTests = create((set) => ({
  ...initialChemistryTests,

  // thos is to update all data state
  setChemistryTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialStoolTests = {
  microscopy: "",
  microscopyValue: "",

  microCulture: "",
  microCultureValue: "",
}
export const useStoolTests = create((set) => ({
  ...initialStoolTests,

  // thos is to update all data state
  setStoolTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialHematologyTests = {
  hb: "",
  hbValue: "",

  fullBloodPicture: "",
  fullBloodPictureValue: "",

}
export const useHematologyTests = create((set) => ({
  ...initialHematologyTests,
  // thos is to update all data state
  setHematologyTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialXRayTests = {
  cxr: "",
  cxrValue: "",

  other: "",
  otherValue: "",

}
export const useXRayTests = create((set) => ({
  ...initialXRayTests,
  // thos is to update all data state
  setXRayTests: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialGlucoseTests = {
  stickTest: "",
  stickTestValue: "",

  laboratory: "",
  laboratoryValue: "",
}
export const useGlucoseTests = create((set) => ({

  ...initialGlucoseTests,
  // thos is to update all data state
  setGlucoseTests: (data) => set((state) => ({ ...state, ...data })),
}));


export const initialHivTests = {
  rapidTest: "",
  rapidTestValue: "",

  pcr: "",
  pcrValue: "",
}
export const useHIVTests = create((set) => ({
  ...initialHivTests,
  // thos is to update all data state
  setHIVTests: (data) => set((state) => ({ ...state, ...data })),
}));


export const initialUrineTests = {
  urinalysis: "",
  urinalysisValue: "",

  microCulture: "",
  microCultureValue: "",
}
export const useUrineTests = create((set) => ({
  ...initialUrineTests,

  // thos is to update all data state
  setUrineTests: (data) => set((state) => ({ ...state, ...data })),
}));
