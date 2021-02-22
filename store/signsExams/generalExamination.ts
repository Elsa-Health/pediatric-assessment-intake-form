import create from "zustand";

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
	updateGeneralExamination: (
		by:
			| { [key in keyof GeneralExaminationData]: string }
			| { [key in keyof GeneralExaminationData]: string[] }
	) => void;
};

export const useGeneralExamination = create<GeneralExamination>((set) => ({
	...initialGeneralExamination,
	updateGeneralExamination: (
		data:
			| { [key in keyof GeneralExaminationData]: string }
			| { [key in keyof GeneralExaminationData]: string[] }
	) => set((state) => ({ ...state, ...data })),
}));
