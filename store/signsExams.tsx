import create from "zustand";

export const useVitalSigns = create((set) => ({
  temp: "",
  respRate: "",
  hr: "",
  o2Sat: "",
  bp: "",
  weight: "",
  height: "",
  //thos is to update all data state
  setVitalSigns: (data) => set((state) => ({ ...state, ...data })),
}));

export const useGeneralExamination = create((set) => ({
  mentalStatus: "",

  childAppearance: "", //this is mutliple input to be fixed in simplequesiton component
  hairColor: "",
  hairTexture: "",
  eyesConjuctive: "",
  ent: "",
  mouthOutside: "",
  mouthInside: "",
  handsFingerClubbing: "",
  handsPalmerPallor: "",
  handsPeripheralCyanosis: "",
  handsCapillaryRefillTime: "",

  tonsils: "",
  centralCyanosis: "",
  skinPinchTest: "",
  lowerLimbEdema: "",
  ifLowerLimbeEdemaYes: "",
  lymphNodes: "",

  //thos is to update all data state
  setGeneralExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const useRespiratoryExamination = create((set) => ({
  chestLook: "",
  airEntry: "",
  breathSounds: "",
  crackles: "",
  wheezing: "",

  //thos is to update all data state
  setRespiratoryExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const useAbdominalExamination = create((set) => ({
  masses: "",
  tenderness: "",
  reboundTenderness: "",
  rectalProlapse: "",

  analExamination: "", //missing input for this in the form

  //thos is to update all data state
  setAbdominalExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const useSkinExamination = create((set) => ({
  lession: "",
  lessionRegion: "",
  lessionShape: "",
  lessionFrequency: "", //name picked up randomly

  type: "",
  typeOther: "",

  margins: "",

  skinUnamedQuestion: "", //refer to form skin type box, then the right box has the checkboxes with no labels

  feature:'',
  featureColor:'',

  houseHoldWithSimilarProblem:'',

  notes:'',

  //thos is to update all data state
  setSkinExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const useNeurologicalExamination = create((set) => ({
  gcsScore: "",
  gcsScoreEyes: "",
  gcsScoreVerbal: "",
  gcsScoreMotor: "",

  blantyreScore: "",
  blantyreScoreEyes: "",
  blantyreScoreVerbal: "",
  blantyreScoreMotor: "",

  neckRigidigty: "",

  neonate: "",
  motorFlexion: "",

  gait: "",

  rightUpperLimbsSensation: "",
  rightUpperLimbsPower: "",
  rightUpperLimbsMuscleTone: "",
  rightUpperLimbsReflexes: "",

  leftUpperLimbsSensation: "",
  leftUpperLimbsPower: "",
  lefttUpperLimbsMuscleTone: "",
  lefttUpperLimbsReflexes: "",

  rightLowerLimbsSensation: "",
  rightLowerLimbsPower: "",
  rightLowerLimbsMuscleTone: "",
  rightLowerLimbsReflexes: "",

  leftLowerLimbsSensation: "",
  leftLowerLimbsPower: "",
  leftLowerLimbsMuscleTone: "",
  leftLowerLimbsReflexes: "",

  cranialNerves:'',
  cranialNervesNumber:'',

  cannotIllicit:'',
  
  //thos is to update all data state
  setNeurologicalExamination: (data) => set((state) => ({ ...state, ...data })),
}));
