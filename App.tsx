import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import { TextField } from 'material-bread'
import { TextInput, Checkbox, RadioButton } from "react-native-paper";

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
import { useGeneralSymptoms, useRespiratory, useGI } from "./store";
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
  FinalDiagnosis
  // ChiefComplaints
} from "./components";



export default function App() {
  return (
    <Provider>
      <View style={{ padding: 72 }}>
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
      </View>
    </Provider>
  );
}
