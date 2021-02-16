import create from "zustand";

// ears and eyes store
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
