import React, { useState } from "react";
import { Table } from ".";
import { Input } from ".";
import { useChiefComplains } from "../store";

export function ChiefComplaints() {
	const { complains, updateChiefComplains } = useChiefComplains(
		(state) => state
	);

	return (
		<Table headerTitle="Chief Complaints">
			<Input
				multiline
				numberOfLines={4}
				text={complains}
				setText={(text: string) => {
					updateChiefComplains({ complains: text });
				}}
			/>
		</Table>
	);
}
