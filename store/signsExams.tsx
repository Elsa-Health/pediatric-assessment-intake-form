import create from "zustand";

//vital signs store
export const initialVitalSigns = {
	temp: "",
	respRate: "",
	hr: "",
	o2Sat: "",
	bp: "",
	weight: "",
	height: "",
};

type VitalSignsData = {
	temp?: string;
	respRate?: string;
	hr?: string;
	o2Sat?: string;
	bp?: string;
	weight?: string;
	height?: string;
};

type VitalSigns = VitalSignsData & {
	setVitalSigns: (by: { [key in keyof VitalSignsData]: string }) => void;
};

export const useVitalSigns = create<VitalSigns>((set) => ({
	...initialVitalSigns,
	setVitalSigns: (data: { [key in keyof VitalSignsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// general examination store
export const initialGeneralExamination = {
	mentalStatus: "",

	childAppearance: [],
	hairColor: "",
	hairTexture: "",
	eyesConjuctiva: "",
	ent: "",

	mouthOutside: [],
	mouthInside: [],
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
	palpableRightLeftGroupOf: "",
};

type GeneralExaminationData = {
	mentalStatus?: string;

	childAppearance?: string[];
	hairColor?: string;
	hairTexture?: string;
	eyesConjuctiva?: string;
	ent?: string;

	mouthOutside?: string[];
	mouthInside?: string[];
	handsFingerClubbing?: string;
	handsPalmerPallor?: string;
	handsPeripheralCyanosis?: string;
	handsCapillaryRefillTime?: string;

	tonsils?: string;
	centralCyanosis?: string;
	skinPinchTest?: string;
	lowerLimbEdema?: string;
	ifLowerLimbeEdemaYes?: string;
	lymphNodes?: string;
	palpableRightLeftGroupOf?: string;
};

type GeneralExamination = GeneralExaminationData & {
	setGeneralExamination: (
		by:
			| { [key in keyof GeneralExaminationData]: string }
			| { [key in keyof GeneralExaminationData]: string[] }
	) => void;
};

export const useGeneralExamination = create<GeneralExamination>((set) => ({
	...initialGeneralExamination,
	setGeneralExamination: (
		data:
			| { [key in keyof GeneralExaminationData]: string }
			| { [key in keyof GeneralExaminationData]: string[] }
	) => set((state) => ({ ...state, ...data })),
}));

// respiratory examination store
export const initialRespiratoryExamination = {
	chestLook: [],
	airEntry: "",
	breathSounds: "",
	crackles: "",
	wheezing: "",
};

type RespiratoryExaminationData = {
	chestLook?: string[];
	airEntry?: string;
	breathSounds?: string;
	crackles?: string;
	wheezing?: string;
};

type RespiratoryExamination = RespiratoryExaminationData & {
	setRespiratoryExamination: (
		by:
			| { [key in keyof RespiratoryExaminationData]: string }
			| { [key in keyof RespiratoryExaminationData]: string[] }
	) => void;
};

export const useRespiratoryExamination = create<RespiratoryExamination>(
	(set) => ({
		...initialRespiratoryExamination,
		setRespiratoryExamination: (data) =>
			set((state) => ({ ...state, ...data })),
	})
);

// abdnominal examination store
export const initialAbdominalExamination = {
	masses: "",
	tenderness: "",
	reboundTenderness: "",
	rectalProlapse: "",

	analExamination: "",

	abdomenSection: "",
};

type AbdominalExaminationData = {
	masses?: string;
	tenderness?: string;
	reboundTenderness?: string;
	rectalProlapse?: string;
	analExamination?: string;
	abdomenSection?: string;
};

type AbdominalExamination = AbdominalExaminationData & {
	setAbdominalExamination: (
		by: { [key in keyof AbdominalExaminationData]: string }
	) => void;
};

export const useAbdominalExamination = create<AbdominalExamination>((set) => ({
	...initialAbdominalExamination,
	//thos is to update all data state
	setAbdominalExamination: (
		data: { [key in keyof AbdominalExaminationData]: string }
	) => set((state) => ({ ...state, ...data })),
}));

// skin examination
export const initialSkinExamination = {
	lesion: "",
	lesionRegion: "",
	lesionShape: "",
	lesionFrequency: "",

	type: [],
	typeOther: "",

	margins: "",

	skinUnamedQuestion: "",

	feature: [],
	featureColor: "",

	houseHoldWithSimilarProblem: "",

	notes: "",
};

type SkinExaminationData = {
	lesion?: string;
	lesionRegion?: string;
	lesionShape?: string;
	lesionFrequency?: string;

	type?: string[];
	typeOther?: string;

	margins?: string;

	skinUnamedQuestion?: string;

	feature?: string[];
	featureColor?: string;

	houseHoldWithSimilarProblem?: string;

	notes?: string;
};

type SkinExamination = SkinExaminationData & {
	setSkinExamination: (
		by:
			| { [key in keyof SkinExaminationData]: string }
			| { [key in keyof SkinExaminationData]: string[] }
	) => void;
};

export const useSkinExamination = create<SkinExamination>((set) => ({
	...initialSkinExamination,
	setSkinExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialneurologicalExamination = {
	gcsScore: "",
	gcsScoreEyes: "",
	gcsScoreVerbal: "",
	gcsScoreMotor: "",

	blantyreScore: "",
	blantyreScoreEyes: "",
	blantyreScoreVerbal: "",
	blantyreScoreMotor: "",

	neckRigidity: "",

	neonate: [],
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

	cranialNerves: "",
	cranialNervesNumber: "",

	cannotIllicit: "",
};

type NeurologicalExaminationData = {
	gcsScore?: string;
	gcsScoreEyes?: string;
	gcsScoreVerbal?: string;
	gcsScoreMotor?: string;

	blantyreScore?: string;
	blantyreScoreEyes?: string;
	blantyreScoreVerbal?: string;
	blantyreScoreMotor?: string;

	neckRigidity?: string;

	neonate?: string[];
	motorFlexion?: string;

	gait?: string;

	rightUpperLimbsSensation?: string;
	rightUpperLimbsPower?: string;
	rightUpperLimbsMuscleTone?: string;
	rightUpperLimbsReflexes?: string;

	leftUpperLimbsSensation?: string;
	leftUpperLimbsPower?: string;
	lefttUpperLimbsMuscleTone?: string;
	lefttUpperLimbsReflexes?: string;

	rightLowerLimbsSensation?: string;
	rightLowerLimbsPower?: string;
	rightLowerLimbsMuscleTone?: string;
	rightLowerLimbsReflexes?: string;

	leftLowerLimbsSensation?: string;
	leftLowerLimbsPower?: string;
	leftLowerLimbsMuscleTone?: string;
	leftLowerLimbsReflexes?: string;

	cranialNerves?: string;
	cranialNervesNumber?: string;

	cannotIllicit?: string;
};

type NeurologicalExamination = NeurologicalExaminationData & {
	setNeurologicalExamination: (
		by:
			| { [key in keyof NeurologicalExaminationData]: string }
			| { [key in keyof NeurologicalExaminationData]: string[] }
	) => void;
};

export const useNeurologicalExamination = create<NeurologicalExamination>(
	(set) => ({
		...initialneurologicalExamination,
		//thos is to update all data state
		setNeurologicalExamination: (
			data:
				| { [key in keyof NeurologicalExaminationData]: string }
				| { [key in keyof NeurologicalExaminationData]: string[] }
		) => set((state) => ({ ...state, ...data })),
	})
);
