import create from "zustand";

export const initialHeaderInformation = {
	patientID: "",
	visitDate: "",
};

type HeaderInformationData = {
	patientID?: string;
	visitDate?: string;
};

type HeaderInformation = HeaderInformationData & {
	updateHeaderInformation: (
		by: { [key in keyof HeaderInformationData]: string }
	) => void;
};

export const useHeaderInformation = create<HeaderInformation>((set) => ({
	...initialHeaderInformation,
	updateHeaderInformation: (data: HeaderInformationData) =>
		set((state) => ({ ...state, ...data })),
}));
