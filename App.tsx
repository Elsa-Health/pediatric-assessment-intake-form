// THIS APP WORKS BEST IN GOOGLE CHROME SOME THINGS BREAKS IN FIREFOX

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import { TextField } from 'material-bread'

import { atom, Provider, useAtom } from "jotai";
import create, { useStore } from "zustand";

import { styles } from "./style";
// import { Input as NachosInput } from 'nachos-ui';

import _ from "lodash";

// TODO: CReate Radio/Checkbox Question Component
// TODO: Create TextInput Component
// TODO: Create a better grid system
// TODO: Reduce repeating codes

// all the state here before the components

// importing all the components and states here
import {
  useGeneralSymptoms,
  useRespiratory,
  useGI,
  usePatientInformation,
} from "./store";
import {
  Row,
  Col,
  Input,
  CheckBox,
  SimpleQuestion,
  Spacer,
  FitTextToCell,
  BasicSymptomInput,
  Header,
  MainHeader,
  TableHeader,
  Table,
  PatientInformation,
  ChiefComplaints,
  Symptoms,
  AdditionalPatientInformation,
  SignsExam,
  Diefferentials,
  OrdersResults,
  FinalDiagnosis,
  // ChiefComplaints
} from "./components";
import { Button } from "react-native-paper";
import { getEnvironment } from "./variables";
import { useHeaderInformation } from "./store/headerInformation";

const SubmitButton = ({ loading = false }: { loading?: boolean }) => {
  const headerInfo = useHeaderInformation((state) => state);
  const patientInfo = usePatientInformation((state) => state);

  console.log("Header info : ", patientInfo);

  const data = {
    // all data here
    headerInfo: headerInfo,
    patientInfo: patientInfo,
  };

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };

  const handleSubmit = () => {
    console.log(getEnvironment());
    fetch(getEnvironment()?.url, params)
      .then((res) => res.json())
      .then((data) => {
        console.log("Returned data");
        console.log(data);
      })
      .catch((err) => {
        console.log("Something went wrong : ", err);
      });
  };

  return (
    <View>
      <Button
        // icon="camera"
        mode="contained"
        onPress={handleSubmit}
        style={{
          height: 48,
          justifyContent: "center",
          // backgroundColor: "#0B0E26",
        }}
        labelStyle={{
          color: "white",
        }}
        loading={loading}
        uppercase={false}
        disabled={loading}
      >
        {loading ? "Submitting the data..." : "Submit "}
      </Button>
    </View>
  );
};

export default function App() {
  return (
    <Provider>
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
          <SubmitButton />
        </View>
      </View>
    </Provider>
  );
}
