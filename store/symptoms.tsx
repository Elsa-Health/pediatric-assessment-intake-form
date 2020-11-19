import create from "zustand";

export const useGeneralSymptoms = create((set) => ({
  fever: "",
  feverDays: "",
  chills: "",
  chillsDays: "",
  awerenessOfHearbeat: "",
  awerenessOfHearbeatDays: "",
  skinLession: "",
  skinLessionDays: "",

  changeFever: (fever) => set((state) => ({ fever: fever })),
  setFeverDays: (days) => set((state) => ({ feverDays: days })),

  setChills: (chills) => set((state) => ({ chills: chills })),
  setChillsDays: (days) => set((state) => ({ chillsDays: days })),

  //thos is to update all data state
  setGeneralState: (data) => set((state) => ({ ...state, ...data })),
}));

export const useRespiratory = create((set) => ({
  caugh: "",
  caughDays: "",
  caughNature: "",
  caughSpatum: "",
  caughTime: "",
  rhinorrhea: "",
  rhinorrheaDays: "",
  lossOfSmell: "",
  lossOfSmellDays: "",
  lossOfVoice: "",
  lossOfVoiceDays: "",

  facialPain: "",
  facialPainDays: "",
  nasalCongestion: "",
  nasalCongestionDays: "",

  dentalPain: "",
  dentalPainDays: "",

  changeInVoice: "",
  changeInVoiceDays: "",
  sneezing: "",
  sneezingDays: "",
  badBreath: "",
  badBreathDays: "",
  chestTightness: "",
  chestTightnessDays: "",
  chestPain: "",
  chestPainDays: "",

  //thos is to update all data state
  setRespiratory: (data) => set((state) => ({ ...state, ...data })),
}));

export const useGI = create((set) => ({
  vomiting: "",
  vomitingDays: "",
  vomitingType: "",

  diarrhoea: "",
  diarrhoeaDays: "",
  diarrhoeaTimesDay: "",
  diarrhoeaType: "",
  isDiarrhoesBloody: "",
  anyTenesmus: "",

  abnominalPain: "",
  abnominalPainDays: "",
  abnominalPainLocation: "",

  //this varibale to be renamed

  abnominalPainEpigastric: "",
  abnominalPainIsRadiating: "",

  abdominalCramps: "",
  abdominalCrampsDays: "",

  lackOfAppetite: "",
  lackOfAppetiteDays: "",

  weightLoss: "",
  weightLossDays: "",

  difficultySwallowing: "",
  difficultySwallowingDays: "",

  painInUrination: "",
  painInUrinationDays: "",

  frequencyOfUrination: "",
  frequencyOfUrinationTimesDay: "",
  frequencyOfUrinationDays: "",

  //thos is to update all data state
  setGI: (data) => set((state) => ({ ...state, ...data })),
}));

export const useCNS = create((set) => ({
  headache: "",
  headacheDays: "",

  coma: "",
  comaDays: "",

  hypothermia: "",
  hypothermiaDays: "",

  seizures: "",
  seizuresDays: "",

  neckPain: "",
  neckPainDays: "",

  highlyPitchedCrying: "",
  highlyPitchedCryingDays: "",

  setCNS: (data) => set((state) => ({ ...state, ...data })),
}));

export const useMusculoskeletal = create((set) => ({
  myalgia: "",
  myalgiaDays: "",

  historyOfTrauma: "",
  historyOfTraumaDays: "",

  fatique: "",
  fatiqueDays: "",

  setMusculoskeletal: (data) => set((state) => ({ ...state, ...data })),
}));

export const useEarsAndEyes = create((set) => ({
  redEyes: "",
  redEyesDays: "",

  painfulEyes: "",
  painfulEyesDays: "",

  earPain: "",
  earPainDays: "",

  eyeDischarge: "",
  eyeDischargeDays: "",

  earDischarge: "",
  earDischargeDays: "",

  sunkenEyes: "",
  sunkenEyesDays: "",

  setEarsAndEyes: (data) => set((state) => ({ ...state, ...data })),
}));

export const useMouth = create((set) => ({
  dryness: "",
  drynessDays: "",

  cottonFeeling: "",
  cottonFeelingDays: "",

  ulcerationsInside: "",
  ulcerationsInsideDays: "",

  ulcerationsAround: "",
  ulcerationsAroundDays: "",

  setMouth: (data) => set((state) => ({ ...state, ...data })),
}));

export const useNeonatal = create((set) => ({
  inabilityToBreastFeed: "",

  setNeonatal: (data) => set((state) => ({ ...state, ...data })),
}));
