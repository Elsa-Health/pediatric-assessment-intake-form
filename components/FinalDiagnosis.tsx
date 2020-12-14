import React from "react";
import { Table } from ".";
import { View } from "react-native";
import { Input } from "./Input";
import { useFinalDiagnosis } from "../store";

export function FinalDiagnosis() {
  const finalDiagnosis = useFinalDiagnosis((state) => state);
  const setFinalDiagnosis = useFinalDiagnosis(
    (state) => state.setFinalDiagnosis
  );

  // console.log("Debugging the final diagnosis : ")
  // console.table(finalDiagnosis)

  
  return (
    <Table headerTitle="Final Diagnosis:">
      <Input
        multiline={true}
        numberOfLines={4}
        text={finalDiagnosis.finalDiagnosisText}
        setText={(text) => {
          setFinalDiagnosis({
            finalDiagnosisText: text,
          });
        }}
      />
    </Table>
  );
}
