import create from "zustand";

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
