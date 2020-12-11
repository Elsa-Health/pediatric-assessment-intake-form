import React from "react";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";
import _ from 'lodash'
interface InputProps extends TextInputProps {
	label?: string;
	placeholder?: string | undefined;
	multiline?: boolean;
	numberOfLines?: number;
	text?: string;
	setText?: any;
	disabled?: boolean;
}

export const Input: React.FC<InputProps> = React.memo(
	({
		label,
		placeholder,
		multiline,
		numberOfLines,
		text,
		setText,
		disabled = false,
		...rest
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
				// disabled
				{...rest}
			/>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.text === nextProps.text;
	}
);
