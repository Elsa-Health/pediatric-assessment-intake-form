import create from "zustand";

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
	updateRespiratory: (by: { [key in keyof RespiratoryData]: string }) => void;
};

export const useRespiratory = create<Respiratory>((set) => ({
	...initialRespiratorySymptoms,

	//thos is to update all data state
	updateRespiratory: (data: { [key in keyof RespiratoryData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
