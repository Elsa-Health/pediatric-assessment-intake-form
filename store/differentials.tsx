import create from "zustand";

export const initialDifferentials = {
  differentialOne: "",
  differentialTwo: "",
  differentialThree: "",
}
export const useDifferentials = create((set) => ({
  ...initialDifferentials,
  //thos is to update all data state
  setDifferentials: (data) => set((state) => ({ ...state, ...data })),
}));
