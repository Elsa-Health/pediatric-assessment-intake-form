import React from "react";
import { View } from "react-native";

export function FitTextToCell({ children }: { children?: any }) {
	return (
		<View
			style={{
				marginVertical: -16,
				marginHorizontal: -8,
			}}
		>
			{children}
		</View>
	);
}
