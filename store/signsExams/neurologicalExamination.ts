import create from "zustand";

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
	updateNeurologicalExamination: (
		by:
			| { [key in keyof NeurologicalExaminationData]: string }
			| { [key in keyof NeurologicalExaminationData]: string[] }
	) => void;
};

export const useNeurologicalExamination = create<NeurologicalExamination>(
	(set) => ({
		...initialneurologicalExamination,
		//thos is to update all data state
		updateNeurologicalExamination: (
			data:
				| { [key in keyof NeurologicalExaminationData]: string }
				| { [key in keyof NeurologicalExaminationData]: string[] }
		) => set((state) => ({ ...state, ...data })),
	})
);
