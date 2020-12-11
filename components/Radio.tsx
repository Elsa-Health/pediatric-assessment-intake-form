import React, { Component, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import _ from "lodash";

export function RadioButton({
	options,
	setChecked,
	checked
}: {
	options: any;
	setChecked: any;
	checked?: any
}) {
	// const [value, setValue] = useState(null);

	return (
		<>
			{options.map(
				(
					res: string | ((prevState: null) => null) | null,
					index: string
				) => {
					return (
						<View key={res + "__" + index} style={styles.container}>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() => {
									// setValue(res);
									setChecked(res);
								}}
							>
								<View style={styles.radioCircle}>
									{checked === res && (
										<View style={styles.selectedRb} />
									)}
								</View>
								<Text style={styles.radioText}>
									{res ? _.startCase(_.camelCase(res)) : ""}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: "1rem",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 10,
		// backgroundColor:"red"
	},
	radioText: {
		flex: 1,
		// marginTop: 5,
		marginLeft: ".4rem",
		fontSize: 14,
		color: "#000",
		// fontWeight: '700',
		// backgroundColor:"blue",
		alignSelf: "center",
	},
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 90,
		borderWidth: 2,
		borderColor: "#333",
		alignItems: "center",
		justifyContent: "center",
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: "#3740ff",
	},
});
