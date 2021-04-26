import React from "react";
import { View, Text } from "react-native";
import { TableHeader, Row, Col } from ".";

export function Table({
	children,
	headerTitle,
}: {
	children?: any;
	headerTitle?: any;
}) {
	return (
		<View style={{ borderWidth: 1, borderColor: "#333" }}>
			<TableHeader title={headerTitle} />
			{children}
		</View>
	);
}
