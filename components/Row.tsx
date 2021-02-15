import React from "react";
import { View } from "react-native";

// still need to figure out children and style types

export function Row({ children, style }: { children?: any; style?: any }) {
	return (
		<View
			style={{
				flexDirection: "row",
				flex: 1,
				flexWrap: "wrap",
				...style,
			}}
		>
			{children}
		</View>
	);
}
