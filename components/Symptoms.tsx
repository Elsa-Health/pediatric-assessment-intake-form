import React from 'react'
import {useGeneralSymptoms,useRespiratory,useGI} from '../store'
import {Table,Col,Row,SimpleQuestion,FitTextToCell,Input,Spacer,BasicSymptomInput} from '.'
import {styles} from '../style'
import {Text,View} from 'react-native'

export function Symptoms() {
    // const [fever, setFever] = React.useState('');
  
    // still not sure why object can be updated
    // const [general, setGeneral] = useState({
    //   fever: '',
    //   feverDays: 0,
    //   chills: '',
    //   chillsDays: 0,
    //   awerenessOfHearbeat: '',
    //   awerenessOfHearbeatDays: 0,
    //   skinLession: '',
    // });
  
    // below state management way to be updated
    // generalSymptoms
  
    const general = useGeneralSymptoms((state) => state);
    const changeFever = useGeneralSymptoms((state) => state.changeFever);
    const setFeverDays = useGeneralSymptoms((state) => state.setFeverDays);
  
    const setChills = useGeneralSymptoms((state) => state.setChills);
    const setChillsDays = useGeneralSymptoms((state) => state.setChillsDays);
  
    const setGeneralState = useGeneralSymptoms((state) => state.setGeneralState);
  
    //respiratory sypmtoms
    const respiratory = useRespiratory((state) => state);
    const setRespiratory = useRespiratory((state) => state.setRespiratory);
  
    //GI sypmtoms
    const gi = useGI((state) => state);
    const setGI = useGI((state) => state.setGI);
  
    // console.log('Fever is here : ', respiratory);
  
    React.useEffect(
      (text) => {
        console.log("General data : ", gi);
      },
      [gi]
    );
  
    return (
      <Table headerTitle="Symptoms">
        <Col style={styles.headerDarkGray}>
          <Text>General</Text>
        </Col>
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Fever</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={general.fever}
              setChecked={(text) => {
                console.log("Hello There ", text);
                // setGeneral({ fever: text, ...general });
                changeFever(text);
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={general.feverDays}
                setText={(text) => {
                  setFeverDays(text);
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Chills</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={general.chills}
              setChecked={(text) => {
                console.log("Hello There ", text);
                // setGeneral({ fever: text, ...general });
                setChills(text);
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={general.chillsDays}
                setText={(text) => {
                  setChillsDays(text);
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Awereness of Heartbeat</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={general.awerenessOfHearbeat}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGeneralState({
                  awerenessOfHearbeat: text,
                });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={general.awerenessOfHearbeatDays}
                setText={(text) =>
                  setGeneralState({
                    awerenessOfHearbeatDays: text,
                  })
                }
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Skin Lesion</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={general.skinLession}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGeneralState({
                  skinLession: text,
                });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={general.skinLessionDays}
                setText={(text) => {
                  setGeneralState({
                    skinLessionDays: text,
                  });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Col style={styles.headerDarkGray}>
          <Text>Respiratory</Text>
        </Col>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Cough</Text>
          </Col>
  
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.caugh}
              setChecked={(text) => {
                setRespiratory({ caugh: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.caughDays}
                setText={(text) => {
                  setRespiratory({ caughDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
  
          <Col cols={3.3}>
            <Row>
              <SimpleQuestion
                options={["Wet", "Dry"]}
                checked={respiratory.caughNature}
                setChecked={(text) => {
                  setRespiratory({ caughNature: text });
                }}
              />
            </Row>
            <Spacer size={4} />
            <Text>If productive, what is sputum color:</Text>
            <Row>
              <SimpleQuestion
                options={["Red", "green", "white", "clear"]}
                checked={respiratory.caughSpatum}
                setChecked={(text) => {
                  setRespiratory({ caughSpatum: text });
                }}
              />
            </Row>
            <Spacer size={4} />
            <Text>Time </Text>
            <Row>
              <SimpleQuestion
                options={["morning", "night", "whole day", "clear"]}
                checked={respiratory.caughTime}
                setChecked={(text) => {
                  setRespiratory({ caughTime: text });
                }}
              />
            </Row>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Rhinorrhea</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.rhinorrhea}
              setChecked={(text) => {
                setRespiratory({ rhinorrhea: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.rhinorrheaDays}
                setText={(text) => {
                  setRespiratory({ rhinorrheaDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Sneezing</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.sneezing}
              setChecked={(text) => {
                setRespiratory({ sneezing: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.sneezingDays}
                setText={(text) => {
                  setRespiratory({ sneezingDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Loss of Smell</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.lossOfSmell}
              setChecked={(text) => {
                setRespiratory({ lossOfSmell: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.l}
                setText={(text) => {
                  setRespiratory({ lossOfSmellDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Loss of Voice</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.lossOfVoice}
              setChecked={(text) => {
                setRespiratory({ lossOfVoice: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.lossOfVoiceDays}
                setText={(text) => {
                  setRespiratory({ lossOfVoiceDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Change in Voice</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.changeInVoice}
              setChecked={(text) => {
                setRespiratory({ changeInVoice: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.changeInVoiceDays}
                setText={(text) => {
                  setRespiratory({ changeInVoiceDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Facial Pain</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.facialPain}
              setChecked={(text) => {
                setRespiratory({ facialPain: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.facialPainDays}
                setText={(text) => {
                  setRespiratory({ facialPainDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Dental pain</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.dentalPain}
              setChecked={(text) => {
                setRespiratory({ dentalPain: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.dentalPainDays}
                setText={(text) => {
                  setRespiratory({ dentalPainDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Nasal Congestion</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.nasalCongestion}
              setChecked={(text) => {
                setRespiratory({ nasalCongestion: text });
              }}
            />
          </Col>
          <Col style={styles.headerLightGray}>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.nasalCongestionDays}
                setText={(text) => {
                  setRespiratory({ nasalCongestionDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Bad breath</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.badBreath}
              setChecked={(text) => {
                setRespiratory({ badBreath: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.badBreathDays}
                setText={(text) => {
                  setRespiratory({ badBreathDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col style={styles.headerLightGray}>
            <Text>Chest tightness</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.chestTightness}
              setChecked={(text) => {
                setRespiratory({ chestTightness: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.chestTightnessDays}
                setText={(text) => {
                  setRespiratory({ chestTightnessDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Chest pain</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={respiratory.chestPain}
              setChecked={(text) => {
                setRespiratory({ chestPain: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={respiratory.chestPainDays}
                setText={(text) => {
                  setRespiratory({ chestPainDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
  
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Col style={styles.headerDarkGray}>
          <Text>GI</Text>
        </Col>
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Vomiting</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.vomiting}
              setChecked={(text) => {
                console.log("Hello There ", text);
                // setGeneral({ fever: text, ...general });
                setGI({ vomiting: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={gi.vomitingDays}
                setText={(text) => {
                  setGI({ vomitingDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col cols={3.3}>
            <Text>Type : </Text>
            <SimpleQuestion
              options={["Food", "Bile", "Blood"]}
              checked={gi.vomitingType}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ vomitingType: text });
              }}
            />
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Diarrhoea</Text>
          </Col>
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.diarrhoea}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ diarrhoea: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="#Times / Days"
                placeholder="#Times / Days"
                text={gi.diarrhoeaTimesDay}
                setText={(text) => {
                  setGI({ diarrhoeaTimesDay: text });
                }}
              />
              <Spacer size={10} />
              <Input
                label="Days"
                placeholder="Days"
                text={gi.diarrhoeaDays}
                setText={(text) => {
                  setGI({ diarrhoeaDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col cols={3.3}>
            <Text>Type : </Text>
            <SimpleQuestion
              options={["Watery", "Rice Walter", "Normal", "Hard"]}
              checked={gi.diarrhoeaType}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ diarrhoeaType: text });
              }}
            />
  
            <Text>Is bloody ? : </Text>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.isDiarrhoesBloody}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ isDiarrhoesBloody: text });
              }}
            />
  
            <Text>Any Tenesmus ? : </Text>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.anyTenesmus}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ anyTenesmus: text });
              }}
            />
          </Col>
        </Row>
  
        <Row>
          <Col style={styles.headerLightGray}>
            <Text>Abdominal Pain</Text>
          </Col>
  
          <Col>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.abnominalPain}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ abnominalPain: text });
              }}
            />
          </Col>
          <Col>
            <FitTextToCell>
              <Input
                label="Days"
                placeholder="Days"
                text={gi.abnominalPainDays}
                setText={(text) => {
                  setGI({ abnominalPainDays: text });
                }}
              />
            </FitTextToCell>
          </Col>
          <Col cols={3.3}>
            <Text>Location : </Text>
            <SimpleQuestion
              options={["Epigastric", "Umbilical", "Hypogastric"]}
              checked={gi.abnominalPainLocation}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ abnominalPainLocation: text });
              }}
            />
  
            <Text>If Epigastric, is it before or after meals? : </Text>
            <SimpleQuestion
              options={["before", "after"]}
              checked={gi.abnominalPainEpigastric}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ abnominalPainEpigastric: text });
              }}
            />
  
            <Text>Does it radiate to the back? ? : </Text>
            <SimpleQuestion
              options={["yes", "no"]}
              checked={gi.abnominalPainIsRadiating}
              setChecked={(text) => {
                // console.log('Hello There ', text);
                // setGeneral({ fever: text, ...general });
                setGI({ abnominalPainIsRadiating: text });
              }}
            />
          </Col>
        </Row>
  
        <Row>
          <BasicSymptomInput
            label="Abdominal Cramps"
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                abdominalCramps: res.checked,
                abdominalCrampsDays: res.days,
              });
            }}
          />
          <BasicSymptomInput
            label="Lack of appetite"
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                lackOfAppetite: res.checked,
                lackOfAppetiteDays: res.days,
              });
            }}
          />
        </Row>
  
        <Row>
          <BasicSymptomInput
            label="Weight Loss"
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                weightLoss: res.checked,
                weightLossDays: res.days,
              });
            }}
          />
          <BasicSymptomInput
            label="Difficulty swallowing"
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                difficultySwallowing: res.checked,
                difficultySwallowingDays: res.days,
              });
            }}
          />
        </Row>
  
        <Row>
          <BasicSymptomInput
            label="Pain on urination"
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                painInUrination: res.checked,
                painInUrinationDays: res.days,
              });
            }}
          />
  
          <BasicSymptomInput
            label="Frequency of urination"
            times={true}
            onChange={(res) => {
              console.log("What does : ", res);
              setGI({
                frequencyOfUrination: res.checked,
                frequencyOfUrinationDays: res.days,
                frequencyOfUrinationTimesDay: res.timesDay,
              });
            }}
          />
        </Row>
  
        <Col style={styles.headerDarkGray}>
          <Text>CNS</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Headache</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Coma</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Hypothermia</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Seizures</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Neck Pain</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>High pitched crying</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Musculoskeletal</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Myalgia</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>History of Trauma</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Fatigue</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Eyes and Ears</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Red Eyes</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Painful Eyes</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Ear Pain</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Eye Discharge</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Ear Discharge</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Sunken Eyes</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Mouth</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Dryness</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Cotton Feeling</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Ulcerations Inside of Mouth</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
          <Col>
            <Text>Ulcerations around Mouth/ Corners</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text>Days</Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Neonatal Symptoms</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Inability to breastfeed</Text>
          </Col>
          <Col>
            <Text>Radios Here</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Other (please add any not above)</Text>
        </Col>
  
        <Row>
          <Col>
            <Text>S</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>S</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
      </Table>
    );
  }
  
  function AdditionalPatientInformation() {
    return (
      <Table headerTitle="Additional Patient Information:">
        <Col>
          <Text>Birth History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Gestation</Text>
          </Col>
          <Col cols={3}>
            <Text></Text>
          </Col>
          <Col>
            <Text>Mother’s age at delivery:</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Complications after delivery</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text>(If Yes) Apgar Score:</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Additional birth history notes:</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Nutritional History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Was the child breast fed?</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text>(If yes) Was it exclusive?</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>(If yes) When did the breastfeeding start?</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Was the child on vitamin A supplements?</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Vaccination History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Is the child up to date on all vaccines?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>If no, please note below which ones they are missing:</Text>
          </Col>
        </Row>
        <Col>
          <Text>Empy Space</Text>
        </Col>
        <Col>
          <Text>Previous Medical History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Any previous admission ? </Text>
            <Text>Radios here</Text>
          </Col>
          <Col>If yes, why?</Col>
          <Col>
            <Text>History of antibiotic use?</Text>
            <Text>Radios here</Text>
          </Col>
        </Row>
      </Table>
    );
  }
  
  function SignsExam() {
    return (
      <Table headerTitle="Signs/ Exam">
        <Col>
          <Text>Vital Signs</Text>
        </Col>
        <Row>
          <Col>
            <Text>Temp</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
          <Col>
            <Text>Resp Rate</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
          <Col>
            <Text>HR</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>O2 Sat</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>BP</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Weight</Text>
          </Col>
          <Col></Col>
          <Col>
            <Text>Height/Length</Text>
          </Col>
          <Col></Col>
        </Row>
        <Col>
          <Text>General Examination</Text>
        </Col>
        <Row>
          <Col>
            <Text>Mental Status:</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Child’s appearance (can select multiple):</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Hair </Text>
          </Col>
          <Col cols={2}>
            <Text>Color</Text>
          </Col>
          <Col cols={3}>
            <Text> </Text>
          </Col>
          <Col cols={2}>
            <Text>Texture</Text>
          </Col>
          <Col cols={3}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Eyes </Text>
          </Col>
          <Col cols={2}>
            <Text>Conjunctiva</Text>
          </Col>
  
          <Col cols={8}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>ENT </Text>
          </Col>
  
          <Col cols={10}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Mouth </Text>
          </Col>
          <Col cols={2}>
            <Text>Outside</Text>
          </Col>
  
          <Col cols={8}>
            <Text>Inside</Text>
          </Col>
        </Row>
        <Col>
          <Text>Hands </Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Finger clubbing </Text>
          </Col>
          <Col>
            <Text>Outside</Text>
          </Col>
  
          <Col>
            <Text>Palmar pallor</Text>
          </Col>
          <Col>
            <Text>Inside</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Peripheral cyanosis </Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Capillary refill time</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Other </Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Tonsils </Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Central Cyanosis</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={3}>
            <Text>Skin Pinch Test </Text>
          </Col>
          <Col cols={9}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={3}>
            <Text>Lower limb edema </Text>
          </Col>
          <Col cols={9}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={1}>
            <Text>Lymph Nodes </Text>
          </Col>
          <Col cols={11}>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Respiratory Examination </Text>
        </Col>
        <Row>
          <Col>
            <Text>When looking at the chest, is it:</Text>
          </Col>
          <Col>
            <Row>
              <Col>
                <Text>Auscultation</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Air Entry</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Breath sounds</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Crackles</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Wheezing</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col>
          <Text>Abdominal Examination </Text>
        </Col>
        <Row>
          <Col>
            <Text>Questions Here</Text>
          </Col>
          <Col>
            <Text>Drawing/Illustration here</Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Skin </Text>
        </Col>
        <Row>
          <Col>
            <Text>Is there a skin lesion?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Other information:</Text>
        </Col>
        <Col>
          <Text>Neurological Examination</Text>
        </Col>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
  
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
  
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col cols={3}>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <Text>If neonate:</Text>
            </Col>
  
            <Col>
              <Text></Text>
            </Col>
  
            <Row>
              <Col>
                <Text>Motor flexion : </Text>
              </Col>
  
              <Col>
                <Text></Text>
              </Col>
            </Row>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Gait </Text>
          </Col>
  
          <Col cols={7}>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Do not fill below if neonate:</Text>
        </Col>
  
        <Row>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Right</Text>
          </Col>
  
          <Col>
            <Text>Left</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>Upper Limbs</Text>
              </Col>
              <Col>
                <Col>
                  <Text>Sensation</Text>
                </Col>
                <Col>
                  <Text>Power</Text>
                </Col>
                <Col>
                  <Text>Muscle tone</Text>
                </Col>
                <Col>
                  <Text>Reflexes</Text>
                </Col>
              </Col>
            </Row>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>Lower Limbs</Text>
              </Col>
              <Col>
                <Col>
                  <Text>Sensation</Text>
                </Col>
                <Col>
                  <Text>Power</Text>
                </Col>
                <Col>
                  <Text>Muscle tone</Text>
                </Col>
                <Col>
                  <Text>Reflexes</Text>
                </Col>
              </Col>
            </Row>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
        </Row>
        <Col>
          <Text>Cranial Nerves</Text>
        </Col>
      </Table>
    );
  }