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
	setChecked?: (text: string | string[]) => void;
	checked: string | string[] | undefined;
	mutiple?: boolean;
}) {
	function removeMutipleItem(arr: string[], value: string) {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}

	return (
		<>
			{options.map((res: string, index: string) => {
				return (
					<View key={res + "__" + index} style={styles.container}>
						<TouchableOpacity
							style={{ flexDirection: "row" }}
							onPress={() => {
								// setValue(res);
								if (mutiple && setChecked) {
									//add mutplie to list
									if (checked?.includes(res)) {
										//remove from an array
										const tempo = removeMutipleItem(
											checked as string[],
											res
										);

										setChecked([...tempo]);
									} else {
										setChecked([
											...(checked as string[]),
											res,
										]);
									}
								} else {
									if (checked === res && setChecked) {
										setChecked("");
									} else {
										if (setChecked) setChecked(res);
									}
								}
							}}
						>
							<View style={styles.radioCircle}>
								{mutiple
									? checked &&
									  checked.indexOf(res) > -1 && (
											<View style={styles.selectedRb} />
									  )
									: checked === res && (
											<View style={styles.selectedRb} />
									  )}
							</View>
							<Text style={styles.radioText}>
								{res ? _.startCase(_.camelCase(res)) : ""}
							</Text>
						</TouchableOpacity>
					</View>
				);
			})}
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
	},
	radioText: {
		flex: 1,

		marginLeft: ".4rem",
		fontSize: 14,
		color: "#000",

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
