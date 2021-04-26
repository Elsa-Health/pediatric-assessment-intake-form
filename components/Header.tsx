import React, { useState } from "react";
import { styles } from "../style";
import { Row, Input, Spacer } from ".";
import { View, Text, Image } from "react-native";
import { useHeaderInformation } from "../store/headerInformation";

export function MainHeader() {
	return (
		<Text
			style={{
				marginVertical: 20,
				textAlign: "center",
				fontWeight: "bold",
			}}
		>
			Pediatric Admission Form
		</Text>
	);
}

export const Header = () => {
	const {
		patientID,
		visitDate,
		updateHeaderInformation,
	} = useHeaderInformation((state) => state);

	return (
		<View style={styles.headerContainer}>
			<View style={{ flex: 1 }}>
				<Row>
					<View style={{ width: 80, justifyContent: "center" }}>
						<Text>Patient ID </Text>
					</View>

					<View style={{}}>
						<Input
							text={patientID}
							setText={(text: string) =>
								updateHeaderInformation({ patientID: text })
							}
						/>
					</View>
				</Row>

				<Spacer size={2} />
				<Row>
					<View style={{ width: 80, justifyContent: "center" }}>
						<Text>Visit Date </Text>
					</View>

					<View style={{}}>
						<Input
							text={visitDate}
							placeholder="24/06/2020"
							setText={(text: string) =>
								updateHeaderInformation({ visitDate: text })
							}
						/>
					</View>
				</Row>
			</View>

			<View style={{ justifyContent: "center" }}>
				<Image
					style={{
						// ration 2.8 from image size
						width: 280,
						height: 100,
					}}
					source={require("../assets/elsa-logo.png")}
				/>
			</View>
		</View>
	);
};
