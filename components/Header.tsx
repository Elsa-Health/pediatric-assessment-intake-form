import React,{useState} from 'react'
import {styles} from '../style'
import {Row,Input,Spacer} from '.';
import {View,Text} from 'react-native'

export function MainHeader() {
    return (
      <Text
        style={{ marginVertical: 20, textAlign: "center", fontWeight: "bold" }}
      >
        Pediatric Admission Form
      </Text>
    );
}


export const Header = () => {
    // states to be updated
  
    const [patientId, setPatientId] = useState('');
    const [visitDate, setVisitDate] = useState('');
  
    return (
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Row>
            <View style={{ width: 80, justifyContent: 'center' }}>
              <Text>Patient ID </Text>
            </View>
  
            <View style={{}}>
              <Input text={patientId} setText={(text) => setPatientId(text)} />
            </View>
          </Row>
  
          <Spacer size={2} />
          <Row>
            <View style={{ width: 80, justifyContent: 'center' }}>
              <Text>Visit Date </Text>
            </View>
  
            <View style={{}}>
              <Input text={visitDate} setText={(text) => setVisitDate(text)} />
            </View>
          </Row>
        </View>
  
        <View style={{ justifyContent: 'center' }}>
          <Text>Elsa Healh Logo</Text>
        </View>
      </View>
    );
  };
  