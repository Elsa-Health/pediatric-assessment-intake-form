import React,{useState} from 'react'
import {Text} from 'react-native'
import {Table,Row,Col,FitTextToCell,Input,SimpleQuestion} from '.'
import {styles } from '../style'

export function PatientInformation() {
    // const [info, setInfo] = useAtom(patientInfo);
  
    //will migrate local state to gloabl state
    const [dob, setDob] = useState("");
    const [years, setYears] = useState(0);
    const [mos, setMos] = useState(0);
    const [days, setDays] = useState(0);
    const [residence, setResidence] = useState("");
  
    //state for gender
    const [gender, setGender] = React.useState("");
  
    //state for medical conditions
    const [medicalCondition, setMedicalCondition] = React.useState("");
  
    //this is strange why updating does not work
    //  setText={(text) => {
    //               console.log('info here:', text);
    //               setInfo({dob:text,...info})
    //             }}
    const [info, setInfo] = useState({
      dob: "",
      years: 0,
      mos: 0,
      days: 0,
    });
  
    return (
      <Table headerTitle="Patient Information">
        <Row>
          <Col cols={3} style={styles.headerLightGray}>
            <Text style={{}}>DOB (dd/mm/yy)</Text>
          </Col>
          <Col cols={3}>
            <FitTextToCell>
              <Input
                text={dob}
                setText={(text) => {
                  console.log("info here:", text);
                  setDob(text);
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>Age</Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Years"
                placeholder="Years"
                text={years}
                setText={(text) => {
                  console.log("info here:", text);
                  setYears(text);
                }}
              />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Mos"
                placeholder="Mos"
                text={mos}
                setText={(text) => {
                  console.log("info here:", text);
                  setMos(text);
                }}
              />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={days}
                setText={(text) => {
                  console.log("info here:", text);
                  setDays(text);
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col cols={1} style={styles.headerLightGray}>
            <Text>Sex</Text>
          </Col>
          <Col cols={3}>
            <SimpleQuestion
              options={["male", "female"]}
              checked={gender}
              setChecked={setGender}
            />
          </Col>
          <Col cols={3} style={styles.headerLightGray}>
            Residency Location
          </Col>
          <Col cols={4}>
            <FitTextToCell>
              <Input
                text={residence}
                setText={(text) => {
                  console.log("Residence:", text);
                  setResidence(text);
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col cols={4} style={styles.headerLightGray}>
            <Text style={{}}>Any known medical condition?</Text>
            <Text style={{}}>(Sc/Diabetes/HIV/Cardiac/Asthma /Other_)</Text>
          </Col>
          <Col cols={8}>
            <FitTextToCell>
              <Input
                text={medicalCondition}
                setText={(text) => {
                  console.log("Medical Condition :", text);
                  setMedicalCondition(text);
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
      </Table>
    );
  }
  