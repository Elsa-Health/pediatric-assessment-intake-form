import React from "react";
import { Row, CheckBox } from ".";
import { RadioButton } from "react-native-paper";
import { View, Text } from "react-native";
import _ from "lodash";
import { Col } from "./Col";

export function SimpleQuestion({
  label,
  options,
  horizontal = true,
  radio = true,
  checked,
  setChecked,
}: {
  label?: string;
  options?: string[];
  horizontal?: boolean;
  radio?: boolean;
  checked?: boolean;
  setChecked?: any;
}) {
  // const simpleQns = [{ label: 'Male' }, { label: 'Female' }];
  // const [checked, setChecked] = React.useState('first');

  if (radio) {
    return (
      <>
        {label&&<Text>{label}</Text>}
        {horizontal ? (
          <Row style={{ alignItems: "center" }}>
            {options &&
              options.map((qn, index) => (
                <>
                  <RadioButton
                    value={qn}
                    status={checked === qn ? "checked" : "unchecked"}
                    onPress={() => {
                      console.log("Checked : ", qn);
                      return setChecked(qn);
                    }}
                  />
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 0,
                      marginLeft: -3,
                    }}
                  >
                    <Text style={{}}>
                      {qn ? _.startCase(_.camelCase(qn)) : ""}
                    </Text>
                  </View>
                </>
              ))}
          </Row>
        ) : (
          <Col style={{borderWidth:0 }}>
            {options &&
              options.map((qn, index) => (
                <Row style={{alignItems:"center"}}>
                  <RadioButton
                    value={qn}
                    status={checked === qn ? "checked" : "unchecked"}
                    onPress={() => {
                      console.log("Checked : ", qn);
                      return setChecked(qn);
                    }}
                  />
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 0,
                      marginLeft: -3,
                    }}
                  >
                    <Text style={{}}>
                      {qn ? _.startCase(_.camelCase(qn)) : ""}
                    </Text>
                  </View>
                </Row>
              ))}
          </Col>
        )}
      </>
    );
  }

  return (
    <Row>{options && options.map((qn, index) => <CheckBox label={qn} />)}</Row>
  );
}
