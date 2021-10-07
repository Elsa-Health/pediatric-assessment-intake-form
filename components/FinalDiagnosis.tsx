import React from "react";
import { Table } from ".";
import { View } from "react-native";
import { Input } from "./Input";
import { useFinalDiagnosis } from "../store";

export function FinalDiagnosis() {
	const { updateFinalDiagnosis, ...finalDiagnosis } = useFinalDiagnosis(
		(state) => state
	);

	return (
		<Table headerTitle="Final Diagnosis:">
			<Input
				multiline={true}
				numberOfLines={4}
				text={finalDiagnosis.finalDiagnosisText}
				setText={(text: string) => {
					updateFinalDiagnosis({
						finalDiagnosisText: text,
					});
				}}
			/>
		</Table>
	);
}
