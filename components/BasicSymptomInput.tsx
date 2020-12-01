import React, { useState } from "react";
import { Col, SimpleQuestion, FitTextToCell, Input } from ".";

import { Text } from "react-native";
import { styles } from "../style";
import { Spacer } from ".";

export const BasicSymptomInput = ({
  label,
  onChange,
  times,
  showNumberDays = true,
}: {
  label?: string;
  onChange?: (...args: any) => {};
  times?: number;
  showNumberDays?: boolean;
}) => {
  const [checked, setChecked] = useState();

  //TODO : to manage input text outside the component

  const [days, setDays] = useState("");
  const [timesDay, setTimesDay] = useState("");
  React.useEffect(() => {

    // to fix issues for days left empty
    
    if ( checked !== "" && onChange)
      onChange({ checked, days, timesDay });
  }, [checked, timesDay, days]);

  return (
    <>
      <Col style={styles.headerLightGray}>
        <Text>{label}</Text>
      </Col>

      <Col>
        <SimpleQuestion
          options={["yes", "no"]}
          checked={checked}
          setChecked={(text: React.SetStateAction<undefined>) => {
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
                setText={(text: React.SetStateAction<string>) => {
                  setTimesDay(text);
                }}
              />
              <Spacer size={8} />
            </>
          )}
          {showNumberDays && (
            <Input
              label="Days"
              placeholder="Days"
              text={days}
              setText={(text: React.SetStateAction<string>) => {
                setDays(text);
              }}
            />
          )}
        </FitTextToCell>
      </Col>
    </>
  );
};
