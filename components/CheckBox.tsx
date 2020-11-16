import React from 'react'
import {View,Text} from 'react-native'
import {Checkbox} from 'react-native-paper'
import {Row} from '.'

export const CheckBox = ({ label }:{label?:string}) => {
    const [checked, setChecked] = React.useState(false);
  
    return (
      <Row>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
            marginLeft: -5,
          }}
        >
          <Text style={{}}>{label ? label : ""}</Text>
        </View>
      </Row>
    );
  };