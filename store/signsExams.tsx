import create from "zustand";

export const initialVitalSigns = {
	temp: "",
	respRate: "",
	hr: "",
	o2Sat: "",
	bp: "",
	weight: "",
	height: "",
};
export const useVitalSigns = create((set) => ({
	...initialVitalSigns,
	//thos is to update all data state
	setVitalSigns: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialGeneralExamination = {
	mentalStatus: "",

	childAppearance: [], //this is mutliple input to be fixed in simplequesiton component
	hairColor: "",
	hairTexture: "",
	eyesConjuctive: "",
	ent: "",

	// these can be set objects
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
};
export const useGeneralExamination = create((set) => ({
	...initialGeneralExamination,
	//thos is to update all data state
	setGeneralExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialRespiratoryExamination = {
	chestLook: [],
	airEntry: "",
	breathSounds: "",
	crackles: "",
	wheezing: "",
};
export const useRespiratoryExamination = create((set) => ({
	...initialRespiratoryExamination,
	//thos is to update all data state
	setRespiratoryExamination: (data) =>
		set((state) => ({ ...state, ...data })),
}));

export const initialAbdominalExamination = {
	masses: "",
	tenderness: "",
	reboundTenderness: "",
	rectalProlapse: "",

	analExamination: "", //missing input for this in the form

	abdomenSection: "",
};
export const useAbdominalExamination = create((set) => ({
	...initialAbdominalExamination,
	//thos is to update all data state
	setAbdominalExamination: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialSkinExamination = {
	lession: "",
	lessionRegion: "",
	lessionShape: "",
	lessionFrequency: "", //name picked up randomly

	type: "",
	typeOther: "",

	margins: "",

	skinUnamedQuestion: "", //refer to form skin type box, then the right box has the checkboxes with no labels

	feature: "",
	featureColor: "",

	houseHoldWithSimilarProblem: "",

	notes: "",
};
export const useSkinExamination = create((set) => ({
	...initialSkinExamination,
	//thos is to update all data state
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

	cranialNerves: "",
	cranialNervesNumber: "",

	cannotIllicit: "",
};
export const useNeurologicalExamination = create((set) => ({
	...initialneurologicalExamination,
	//thos is to update all data state
	setNeurologicalExamination: (data) =>
		set((state) => ({ ...state, ...data })),
}));
