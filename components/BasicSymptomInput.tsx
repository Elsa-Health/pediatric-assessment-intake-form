import React,{useState} from 'react'
import {Col,SimpleQuestion,FitTextToCell,Input} from '.'

import {Text} from 'react-native'
import {styles} from '../style'
import {Spacer} from '.'


export const BasicSymptomInput = ({ label, onChange, times }) => {
  const [checked, setChecked] = useState('');

  //TODO : to manage input text outside the component

  const [days, setDays] = useState('');
  const [timesDay, setTimesDay] = useState('');
  React.useEffect(() => {
    if (days !== '' && checked !== '') onChange({ checked, days, timesDay });
  }, [checked, timesDay, days]);

  return (
    <>
      <Col style={styles.headerLightGray}>
        <Text>{label}</Text>
      </Col>

      <Col>
        <SimpleQuestion
          options={['yes', 'no']}
          checked={checked}
          setChecked={(text) => {
            setChecked(text);
          }}
        />
      </Col>
      <Col>
        <FitTextToCell>
          {times && (
            <>
              <Input
                label="# TImes / Day"
                placeholder="# TImes / Day"
                text={timesDay}
                setText={(text) => {
                  setTimesDay(text);
                }}
              />
              <Spacer size={8} />
            </>
          )}
          <Input
            label="Days"
            placeholder="Days"
            text={days}
            setText={(text) => {
              setDays(text);
            }}
          />
        </FitTextToCell>
      </Col>
    </>
  );
};