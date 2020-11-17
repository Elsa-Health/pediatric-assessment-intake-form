import React from "react";
import { TextInput } from "react-native-paper";

export const Input = ({
  label,
  placeholder,
  multiline,
  numberOfLines,
  text,
  setText,
}: {
  label?: string;
  placeholder?: string | undefined;
  multiline?: boolean;
  numberOfLines?: number;
  text?: string;
  setText?: any;
}) => {
  // const [text, setText] = React.useState('');

  return (
    <TextInput

      // still not sure what accessibilitstates means
      
      accessibilityStates={"none"}
      value={text}
      onChangeText={(text) => setText(text)}
      placeholder={placeholder ? placeholder : undefined}
      style={
        {
          // height: 40,
          // backgroundColor:"white"
        }
      }
      // mode="flat"
      label={label ? label : undefined}
      multiline={multiline}
      numberOfLines={numberOfLines}
      // multiline={true}
    />
  );
};
