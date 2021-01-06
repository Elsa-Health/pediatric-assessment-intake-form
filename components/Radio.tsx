import React, { Component, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import _ from "lodash";

export function RadioButton({
	options,
	setChecked,
	checked,
	mutiple,
}: {
	options: any;
	setChecked: any;
	checked?: string | string[];
	mutiple?: boolean;
}) {
	// const [value, setValue] = useState(null);

	// console.log("Radio check option : ", checked, " mutiple ", mutiple);

	function removeMutipleItem(arr, value) {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}

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
								style={{ flexDirection: "row" }}
								onPress={() => {
									// setValue(res);
									if (mutiple) {
										//add mutplie to list
										console.log(
											"this is mutple inputs : ",
											res
										);
										if (checked.includes(res)) {
											//remove from an array
											const tempo = removeMutipleItem(
												checked,
												res
											);

											setChecked([...tempo]);
										} else {
											setChecked([...checked, res]);
										}
									} else {
										if (checked === res) {
											// uncheck here
											setChecked("");
										} else {
											setChecked(res);
										}
									}
								}}
							>
								<View style={styles.radioCircle}>
									{mutiple
										? checked.indexOf(res) > -1 && (
												<View
													style={styles.selectedRb}
												/>
										  )
										: checked === res && (
												<View
													style={styles.selectedRb}
												/>
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
