import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import _ from "lodash";

export function RadioButton({ options, setChecked }: { options: any; setChecked: any }) {
    const [value, setValue] = useState(null)


    return (
        <>
            {options.map((res: string | ((prevState: null) => null) | null, index: string) => {
                return (
                    <View key={res + "__" + index} style={styles.container}>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res)
                                setChecked(res)

                            }}>
                            {value === res && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                        <Text style={styles.radioText}>{res
                            ? _.startCase(
                                _.camelCase(res)
                            )
                            : ""}</Text>
                    </View>
                );
            })}
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        // backgroundColor:"red"
    },
    radioText: {
        flex: 1,
        marginTop: 5,
        fontSize: 14,
        color: '#000',
        fontWeight: '700',
        // backgroundColor:"blue",
        alignSelf: 'center'

    },
    radioCircle: {
        height: 25,
        width: 25,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
