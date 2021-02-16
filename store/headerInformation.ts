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
	setHeaderInfo: (
		by: { [key in keyof HeaderInformationData]: string }
	) => void;
};

export const useHeaderInformation = create<HeaderInformation>((set) => ({
	...initialHeaderInformation,
	setHeaderInfo: (data: HeaderInformationData) =>
		set((state) => ({ ...state, ...data })),
}));
