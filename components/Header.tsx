import React, { useState } from "react";
import { styles } from "../style";
import { Row, Input, Spacer } from ".";
import { View, Text } from "react-native";
import { useHeaderInformation } from "../store/headerInformation";

export function MainHeader() {
  return (
    <Text
      style={{ marginVertical: 20, textAlign: "center", fontWeight: "bold" }}
    >
      Pediatric Admission Form
    </Text>
  );
}


// TODO :  Fix Types and Means of submitting data

export const Header = () => {
  // states to be updated

  const { patientID, visitDate } = useHeaderInformation((state) => state);
  const setHeaderInfo = useHeaderInformation((state) => state.setHeaderInfo);

  // console.log("patient ID : ", patientID, "Visit Date : ", visitDate);

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
              setText={(text: React.SetStateAction<string>) =>
                setHeaderInfo({ patientID: text })
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
              setText={(text: React.SetStateAction<string>) =>
                setHeaderInfo({ visitDate: text })
              }
            />
          </View>
        </Row>
      </View>

      <View style={{ justifyContent: "center" }}>
        <Text>Elsa Healh Logo</Text>
      </View>
    </View>
  );
};
