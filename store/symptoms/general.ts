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
