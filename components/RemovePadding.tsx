import React, { Children } from "react";
import { View } from "react-native";

export function RemovePadding({ children }: { children?: any }) {
	return (
		<View
			style={{ padding: 0, paddingVertical: -16, paddingHorizontal: -8 }}
		>
			{children}
		</View>
	);
}
