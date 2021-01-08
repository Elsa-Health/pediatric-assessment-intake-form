import create from "zustand";

// malaria tests store
export const initialMalariaTests = {
	bloodSlide: "",
	bloodSlideValue: "",
	rapidTest: "",
	rapidTestValue: "",
};

type MalariaTestsData = {
	bloodSlide?: string;
	bloodSlideValue?: string;
	rapidTest?: string;
	rapidTestValue?: string;
};

type MalariaTests = MalariaTestsData & {
	setMalariaTests: (by: { [key in keyof MalariaTestsData]: string }) => void;
};

export const useMalariaTests = create<MalariaTests>((set) => ({
	...initialMalariaTests,
	setMalariaTests: (data: { [key in keyof MalariaTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// microbiology tests store
export const initialMicrobiologyTests = {
	lumberPuncture: "",
	lumberPunctureValue: "",
	bloodCulture: "",
	bloodCultureValue: "",
};

type MicrobiologyTestsData = {
	lumberPuncture?: string;
	lumberPunctureValue?: string;
	bloodCulture?: string;
	bloodCultureValue?: string;
};

type MicrobiologyTests = MicrobiologyTestsData & {
	setMicrobiologyTests: (
		by: { [key in keyof MicrobiologyTestsData]: string }
	) => void;
};

export const useMicrobiologyTests = create<MicrobiologyTests>((set) => ({
	...initialMicrobiologyTests,
	setMicrobiologyTests: (
		data: { [key in keyof MicrobiologyTestsData]: string }
	) => set((state) => ({ ...state, ...data })),
}));

// tb tests stores
export const initialTbTests = {
	microAAFBs: "",
	microAAFBsValue: "",
	mantoux: "",
	mantouxValue: "",
	xpertMTBRIF: "",
	xpertMTBRIFValue: "",
	mycoTBCulture: "",
	mycoTBCultureValue: "",
};

type TBTestsData = {
	microAAFBs?: string;
	microAAFBsValue?: string;
	mantoux?: string;
	mantouxValue?: string;
	xpertMTBRIF?: string;
	xpertMTBRIFValue?: string;
	mycoTBCulture?: string;
	mycoTBCultureValue?: string;
};

type TBTests = TBTestsData & {
	setTBTests: (by: { [key in keyof TBTestsData]: string }) => void;
};

export const useTBTests = create<TBTests>((set) => ({
	...initialTbTests,
	setTBTests: (data: { [key in keyof TBTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// chemistry tests store
export const initialChemistryTests = {
	nak: "",
	nakValue: "",
	uc: "",
	ucValue: "",
	caphos: "",
	caphosValue: "",
	alb: "",
	albValue: "",
	lft: "",
	lftValue: "",
};

type ChemistryTestsData = {
	nak?: string;
	nakValue?: string;
	uc?: string;
	ucValue?: string;
	caphos?: string;
	caphosValue?: string;
	alb?: string;
	albValue?: string;
	lft?: string;
	lftValue?: string;
};

type ChemistryTests = ChemistryTestsData & {
	setChemistryTests: (
		by: { [key in keyof ChemistryTestsData]: string }
	) => void;
};

export const useChemistryTests = create<ChemistryTests>((set) => ({
	...initialChemistryTests,
	setChemistryTests: (data: { [key in keyof ChemistryTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// stool tests store
export const initialStoolTests = {
	microscopy: "",
	microscopyValue: "",
	microCulture: "",
	microCultureValue: "",
};

type StoolTestsData = {
	microscopy?: string;
	microscopyValue?: string;
	microCulture?: string;
	microCultureValue?: string;
};

type StoolTests = StoolTestsData & {
	setStoolTests: (by: { [key in keyof StoolTestsData]: string }) => void;
};
export const useStoolTests = create<StoolTests>((set) => ({
	...initialStoolTests,
	setStoolTests: (data: { [key in keyof StoolTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// hematology tests store

export const initialHematologyTests = {
	hb: "",
	hbValue: "",
	fullBloodPicture: "",
	fullBloodPictureValue: "",
};

type HematologyTestsData = {
	hb?: string;
	hbValue?: string;
	fullBloodPicture?: string;
	fullBloodPictureValue?: string;
};

type HematologyTests = HematologyTestsData & {
	setHematologyTests: (
		by: { [key in keyof HematologyTestsData]: string }
	) => void;
};

export const useHematologyTests = create<HematologyTests>((set) => ({
	...initialHematologyTests,
	setHematologyTests: (data) => set((state) => ({ ...state, ...data })),
}));

//  x-ray tests store

export const initialXRayTests = {
	cxr: "",
	cxrValue: "",
	other: "",
	otherValue: "",
};

type XRayTestsData = {
	cxr?: string;
	cxrValue?: string;
	other?: string;
	otherValue?: string;
};

type XRayTests = XRayTestsData & {
	setXRayTests: (by: { [key in keyof XRayTestsData]: string }) => void;
};

export const useXRayTests = create<XRayTests>((set) => ({
	...initialXRayTests,
	setXRayTests: (data: { [key in keyof XRayTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// glucose tests store
export const initialGlucoseTests = {
	stickTest: "",
	stickTestValue: "",
	laboratory: "",
	laboratoryValue: "",
};

type GlucoseTestsData = {
	stickTest?: string;
	stickTestValue?: string;
	laboratory?: string;
	laboratoryValue?: string;
};

type GlucoseTests = GlucoseTestsData & {
	setGlucoseTests: (by: { [key in keyof GlucoseTestsData]: string }) => void;
};

export const useGlucoseTests = create<GlucoseTests>((set) => ({
	...initialGlucoseTests,
	setGlucoseTests: (data: { [key in keyof GlucoseTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// hiv tests store
export const initialHivTests = {
	rapidTest: "",
	rapidTestValue: "",
	pcr: "",
	pcrValue: "",
};

type HIVTestsData = {
	rapidTest?: string;
	rapidTestValue?: string;
	pcr?: string;
	pcrValue?: string;
};

type HIVTests = HIVTestsData & {
	setHIVTests: (by: { [key in keyof HIVTestsData]: string }) => void;
};

export const useHIVTests = create<HIVTests>((set) => ({
	...initialHivTests,
	setHIVTests: (data: { [key in keyof HIVTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

// urine tests store
export const initialUrineTests = {
	urinalysis: "",
	urinalysisValue: "",
	microCulture: "",
	microCultureValue: "",
};

type UrineTestsData = {
	urinalysis?: string;
	urinalysisValue?: string;
	microCulture?: string;
	microCultureValue?: string;
};

type UrineTests = UrineTestsData & {
	setUrineTests: (by: { [key in keyof UrineTestsData]: string }) => void;
};

export const useUrineTests = create<UrineTests>((set) => ({
	...initialUrineTests,
	setUrineTests: (data: { [key in keyof UrineTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
