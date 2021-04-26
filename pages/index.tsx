import React, { useState } from "react";
import { View } from "react-native";
import _ from "lodash";

import {
	Spacer,
	Header,
	MainHeader,
	PatientInformation,
	ChiefComplaints,
	Symptoms,
	AdditionalPatientInformation,
	SignsExam,
	Diefferentials,
	OrdersResults,
	FinalDiagnosis,
	SubmitButton,

	// ChiefComplaints
} from "../components";

interface User {
	email: string | null;
	uid: string | null;
}

export default function App() {
	const [check, setCheck] = useState("");

	const [user, setUser] = useState<User>({
		email: null,
		uid: null,
	});

	React.useEffect(() => {
		if (window.location !== window.parent.location) {
			// The page is in an iframe
			window.addEventListener(
				"message",
				(event) => {
					const { message, value } = event.data;
					if (message === "userData") {
						setUser({
							email: value?.email || null,
							uid: value?.uid || null,
						});
					}
				},
				false
			);
		} else {
		}
	}),
		[];

	return (
		<View style={{ backgroundColor: "#DEDFE4", paddingVertical: 36 }}>
			<View
				style={{
					padding: 72,
					width: 1024,
					alignSelf: "center",
					backgroundColor: "white",
				}}
			>
				<Header />
				<MainHeader />
				<PatientInformation />
				<Spacer size={12} />
				<ChiefComplaints />
				<Spacer size={12} />
				<Symptoms />
				<Spacer size={12} />
				<AdditionalPatientInformation />
				<Spacer size={12} />
				<SignsExam />
				<Spacer size={12} />
				<Diefferentials />
				<Spacer size={12} />
				<OrdersResults />
				<Spacer size={23} />
				<FinalDiagnosis />
				<Spacer size={23} />
				<SubmitButton user={user} />
			</View>
		</View>
	);
}
