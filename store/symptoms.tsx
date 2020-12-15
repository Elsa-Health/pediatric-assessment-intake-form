import create from "zustand";

export const initialGeneralSymptoms = {
	fever: "",
	feverDays: "",
	chills: "",
	chillsDays: "",
	awerenessOfHearbeat: "",
	awerenessOfHearbeatDays: "",
	skinLession: "",
	skinLessionDays: "",
};
export const useGeneralSymptoms = create((set) => ({
	...initialGeneralSymptoms,

	changeFever: (fever) => set((state) => ({ fever: fever })),
	setFeverDays: (days) => set((state) => ({ feverDays: days })),

	setChills: (chills) => set((state) => ({ chills: chills })),
	setChillsDays: (days) => set((state) => ({ chillsDays: days })),

	//thos is to update all data state
	setGeneralState: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialRespiratorySymptoms = {
	cough: "",
	coughDays: "",
	coughNature: "",
	coughSpatum: "",
	coughTime: "",
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
};
export const useRespiratory = create((set) => ({
	...initialRespiratorySymptoms,

	//thos is to update all data state
	setRespiratory: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialGISymtoms = {
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
};
export const useGI = create((set) => ({
	...initialGISymtoms,
	//thos is to update all data state
	setGI: (data) => set((state) => ({ ...state, ...data })),
}));

export const initilCNSSymtoms = {
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
};
export const useCNS = create((set) => ({
	...initilCNSSymtoms,
	setCNS: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialMusculoskeletal = {
	myalgia: "",
	myalgiaDays: "",

	historyOfTrauma: "",
	historyOfTraumaDays: "",

	fatique: "",
	fatiqueDays: "",
};
export const useMusculoskeletal = create((set) => ({
	...initialMusculoskeletal,
	setMusculoskeletal: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialEarsAndEyes = {
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
};
export const useEarsAndEyes = create((set) => ({
	...initialEarsAndEyes,
	setEarsAndEyes: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialMouth = {
	dryness: "",
	drynessDays: "",

	cottonFeeling: "",
	cottonFeelingDays: "",

	ulcerationsInside: "",
	ulcerationsInsideDays: "",

	ulcerationsAround: "",
	ulcerationsAroundDays: "",
};
export const useMouth = create((set) => ({
	...initialMouth,
	setMouth: (data) => set((state) => ({ ...state, ...data })),
}));

export const useNeonatal = create((set) => ({
	inabilityToBreastFeed: "",

	setNeonatal: (data) => set((state) => ({ ...state, ...data })),
}));

export const useOthers = create((set) => ({
	others: "",
	setOthers: (data) => set((state) => ({ ...state, ...data })),
}));
