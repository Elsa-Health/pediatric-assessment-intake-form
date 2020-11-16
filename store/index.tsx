import create, { useStore } from "zustand";

// ZUSTAND STORE HERE
export const useGeneralSymptoms = create((set) => ({
  fever: "",
  feverDays: 0,
  chills: "",
  chillsDays: 0,
  awerenessOfHearbeat: "",
  awerenessOfHearbeatDays: 0,
  skinLession: "",
  skinLessionDays: 0,

  changeFever: (fever) => set((state) => ({ fever: fever })),
  setFeverDays: (days) => set((state) => ({ feverDays: days })),

  setChills: (chills) => set((state) => ({ chills: chills })),
  setChillsDays: (days) => set((state) => ({ chillsDays: days })),

  //thos is to update all data state
  setGeneralState: (data) => set((state) => ({ ...state, ...data })),
}));

export const useRespiratory = create((set) => ({
  caugh: "",
  caughDays: 0,
  caughNature: "",
  caughSpatum: "",
  caughTime: "",
  rhinorrhea: "",
  rhinorrheaDays: 0,
  lossOfSmell: "",
  lossOfSmellDays: "",
  lossOfVoice: "",
  lossOfVoiceDays: 0,

  facialPain: "",
  facialPainDays: 0,
  nasalCongestion: "",
  nasalCongestionDays: 0,

  dentalPain: "",
  dentalPainDays: 0,

  changeInVoice: "",
  changeInVoiceDays: 0,
  sneezing: "",
  sneezingDays: "",
  badBreath: "",
  badBreathDays: 0,
  chestTightness: "",
  chestTightnessDays: 0,
  chestPain: "",
  chestPainDays: 0,

  //thos is to update all data state
  setRespiratory: (data) => set((state) => ({ ...state, ...data })),
}));

export const useGI = create((set) => ({
  vomiting: "",
  vomitingDays: 0,
  vomitingType: "",

  diarrhoea: "",
  diarrhoeaDays: 0,
  diarrhoeaTimesDay: 0,
  diarrhoeaType: "",
  isDiarrhoesBloody: "",
  anyTenesmus: "",

  abnominalPain: "",
  abnominalPainDays: 0,
  abnominalPainLocation: "",

  //this varibale to be renamed

  abnominalPainEpigastric: "",
  abnominalPainIsRadiating: "",

  abdominalCramps: "",
  abdominalCrampsDays: 0,

  lackOfAppetite: "",
  lackOfAppetiteDays: 0,

  weightLoss: "",
  weightLossDays: "",

  difficultySwallowing: "",
  difficultySwallowingDays: 0,

  painInUrination: "",
  painInUrinationDays: 0,

  frequencyOfUrination: "",
  frequencyOfUrinationTimesDay: 0,
  frequencyOfUrinationDays: 0,

  //thos is to update all data state
  setGI: (data) => set((state) => ({ ...state, ...data })),
}));


