import React from 'react'
import {Row} from '.'
import {RadioButton} from 'react-native-paper'
import {View,Text} from 'react-native'
import _ from 'lodash';

export function SimpleQuestion({
label,
options,
horizontal = true,
radio = true,
checked,
setChecked,
}) {
const simpleQns = [{ label: 'Male' }, { label: 'Female' }];
// const [checked, setChecked] = React.useState('first');

if (radio) {
  return (
    <Row style={{}}>
      {options.map((qn, index) => (
        <>
          <RadioButton
            value={qn}
            status={checked === qn ? 'checked' : 'unchecked'}
            onPress={() => {
              console.log('Checked : ', qn);
              return setChecked(qn);
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 0,
              marginLeft: -3,
            }}>
            <Text style={{}}>{qn ? _.startCase(_.camelCase(qn)) : ''}</Text>
          </View>
        </>
      ))}
    </Row>
  );
}
return (
  <Row>
    {options.map((qn, index) => (
      <CheckBox label={qn} />
    ))}
  </Row>
);
}
