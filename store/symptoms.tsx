import create from "zustand";

// general symptoms store
export const initialGeneralSymptoms = {
	fever: "",
	feverDays: "",
	chills: "",
	chillsDays: "",
	awarenessOfHeartbeat: "",
	awarenessOfHeartbeatDays: "",
	skinLesion: "",
	skinLesionDays: "",
};

type GeneralSymptomsData = {
	fever?: string;
	feverDays?: string;
	chills?: string;
	chillsDays?: string;
	awarenessOfHeartbeat?: string;
	awarenessOfHeartbeatDays?: string;
	skinLesion?: string;
	skinLesionDays?: string;
};

type GeneralSymptoms = GeneralSymptomsData & {
	setGeneralState: (
		by: { [key in keyof GeneralSymptomsData]: string }
	) => void;
};

export const useGeneralSymptoms = create<GeneralSymptoms>((set) => ({
	...initialGeneralSymptoms,
	setGeneralState: (data: { [key in keyof GeneralSymptomsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// respiratory symptoms store
export const initialRespiratorySymptoms = {
	cough: "",
	coughDays: "",
	coughNature: "",
	coughSpatum: "",
	coughTime: "",
	rhinorrhea: "",
	rhinorrheaDays: "",
	sneezing: "",
	sneezingDays: "",
	lossOfSmell: "",
	lossOfSmellDays: "",
	lossOfVoice: "",
	lossOfVoiceDays: "",
	changeInVoice: "",
	changeInVoiceDays: "",
	facialPain: "",
	facialPainDays: "",
	dentalPain: "",
	dentalPainDays: "",
	nasalCongestion: "",
	nasalCongestionDays: "",
	badBreath: "",
	badBreathDays: "",
	chestTightness: "",
	chestTightnessDays: "",
	chestPain: "",
	chestPainDays: "",
};

type RespiratoryData = {
	cough?: string;
	coughDays?: string;
	coughNature?: string;
	coughSpatum?: string;
	coughTime?: string;
	rhinorrhea?: string;
	rhinorrheaDays?: string;
	lossOfSmell?: string;
	lossOfSmellDays?: string;
	lossOfVoice?: string;
	lossOfVoiceDays?: string;

	facialPain?: string;
	facialPainDays?: string;
	nasalCongestion?: string;
	nasalCongestionDays?: string;

	dentalPain?: string;
	dentalPainDays?: string;

	changeInVoice?: string;
	changeInVoiceDays?: string;
	sneezing?: string;
	sneezingDays?: string;
	badBreath?: string;
	badBreathDays?: string;
	chestTightness?: string;
	chestTightnessDays?: string;
	chestPain?: string;
	chestPainDays?: string;
};

type Respiratory = RespiratoryData & {
	setRespiratory: (by: { [key in keyof RespiratoryData]: string }) => void;
};

export const useRespiratory = create<Respiratory>((set) => ({
	...initialRespiratorySymptoms,

	//thos is to update all data state
	setRespiratory: (data: { [key in keyof RespiratoryData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

//GI symptoms store
export const initialGISymtoms = {
	vomiting: "",
	vomitingDays: "",
	vomitingType: [],

	diarrhoea: "",
	diarrhoeaDays: "",
	diarrhoeaTimesDay: "",
	diarrhoeaType: [],
	isDiarrhoeaBloody: "",
	anyTenesmus: "",

	abdominalPain: "",
	abdominalPainDays: "",
	abdominalPainLocation: "",

	abdominalPainEpigastric: [],
	abdominalPainRadiatingBack: "",

	abdominalCramps: "",
	abdominalCrampsDays: "",

	lackOfAppetite: "",
	lackOfAppetiteDays: "",

	weightLoss: "",
	weightLossDays: "",

	difficultySwallowing: "",
	difficultySwallowingDays: "",

	painOnUrination: "",
	painOnUrinationDays: "",

	frequencyOfUrination: "",
	frequencyOfUrinationTimesPerDay: "",
	frequencyOfUrinationDays: "",
};

type GISymtomsData = {
	vomiting?: string;
	vomitingDays?: string;
	vomitingType?: string[];

	diarrhoea?: string;
	diarrhoeaDays?: string;
	diarrhoeaTimesDay?: string;
	diarrhoeaType: string[];
	isDiarrhoeaBloody?: string;
	anyTenesmus?: string;

	abdominalPain?: string;
	abdominalPainDays?: string;
	abdominalPainLocation?: string;

	abdominalPainEpigastric?: string[];
	abdominalPainRadiatingBack?: string;

	abdominalCramps?: string;
	abdominalCrampsDays?: string;

	lackOfAppetite?: string;
	lackOfAppetiteDays?: string;

	weightLoss?: string;
	weightLossDays?: string;

	difficultySwallowing?: string;
	difficultySwallowingDays?: string;

	painOnUrination?: string;
	painOnUrinationDays?: string;

	frequencyOfUrination?: string;
	frequencyOfUrinationTimesPerDay?: string;
	frequencyOfUrinationDays?: string;
};

type GISymtoms = GISymtomsData & {
	setGI: (by: { [key in keyof GISymtomsData]: string }) => void;
};

export const useGI = create<GISymtoms>((set) => ({
	...initialGISymtoms,
	//thos is to update all data state
	setGI: (data: { [key in keyof GISymtomsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// CNS Symptoms store
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

	highPitchedCrying: "",
	highPitchedCryingDays: "",
};

type CNSData = {
	headache?: string;
	headacheDays?: string;
	coma?: string;
	comaDays?: string;
	hypothermia?: string;
	hypothermiaDays?: string;

	seizures?: string;
	seizuresDays?: string;

	neckPain?: string;
	neckPainDays?: string;

	highPitchedCrying?: string;
	highPitchedCryingDays?: string;
};

type CNS = CNSData & {
	setCNS: (by: { [key in keyof CNSData]: string }) => void;
};

export const useCNS = create<CNS>((set) => ({
	...initilCNSSymtoms,
	setCNS: (data: { [key in keyof CNSData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// musculoskeletal symptoms store
export const initialMusculoskeletal = {
	myalgia: "",
	myalgiaDays: "",

	historyOfTrauma: "",
	historyOfTraumaDays: "",

	fatique: "",
	fatiqueDays: "",
};

type MusculoskeletalData = {
	myalgia?: string;
	myalgiaDays?: string;

	historyOfTrauma?: string;
	historyOfTraumaDays?: string;

	fatique?: string;
	fatiqueDays?: string;
};

type Musculoskeletal = MusculoskeletalData & {
	setMusculoskeletal: (
		by: { [key in keyof MusculoskeletalData]: string }
	) => void;
};

export const useMusculoskeletal = create<Musculoskeletal>((set) => ({
	...initialMusculoskeletal,
	setMusculoskeletal: (
		data: { [key in keyof MusculoskeletalData]: string }
	) => set((state) => ({ ...state, ...data })),
}));

// ears and eyes

// initial mouth stire
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

type EarsAndEyesData = {
	redEyes?: string;
	redEyesDays?: string;

	painfulEyes?: string;
	painfulEyesDays?: string;

	earPain?: string;
	earPainDays?: string;

	eyeDischarge?: string;
	eyeDischargeDays?: string;

	earDischarge?: string;
	earDischargeDays?: string;

	sunkenEyes?: string;
	sunkenEyesDays?: string;
};

type EarsAndEyes = EarsAndEyesData & {
	setEarsAndEyes: (by: { [key in keyof EarsAndEyesData]: string }) => void;
};

export const useEarsAndEyes = create<EarsAndEyes>((set) => ({
	...initialEarsAndEyes,
	setEarsAndEyes: (data) => set((state) => ({ ...state, ...data })),
}));

// initial mouth stire
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

type MouthData = {
	dryness?: string;
	drynessDays?: string;

	cottonFeeling?: string;
	cottonFeelingDays?: string;

	ulcerationsInside?: string;
	ulcerationsInsideDays?: string;

	ulcerationsAround?: string;
	ulcerationsAroundDays?: string;
};

type Mouth = MouthData & {
	setMouth: (by: { [key in keyof MouthData]: string }) => void;
};

export const useMouth = create<Mouth>((set) => ({
	...initialMouth,
	setMouth: (data: { [key in keyof MouthData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// neonatal symptoms store
type Neonatal = {
	inabilityToBreastFeed?: string;
	setNeonatal: (by: { inabilityToBreastFeed: string }) => void;
};
export const useNeonatal = create<Neonatal>((set) => ({
	inabilityToBreastFeed: "",

	setNeonatal: (data: { inabilityToBreastFeed: string }) =>
		set((state) => ({ ...state, ...data })),
}));

//other stymtoms store

type Others = {
	others?: string;
	setOthers: (by: { others: string }) => void;
};
export const useOthers = create<Others>((set) => ({
	others: "",
	setOthers: (data: { others: string }) =>
		set((state) => ({ ...state, ...data })),
}));
