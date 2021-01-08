import React from "react";
import { TextInput, DefaultTheme } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";
import _ from "lodash";

interface InputProps extends Omit<TextInputProps, 'theme'>  {
	label?: string;
	placeholder?: string | undefined;
	multiline?: boolean;
	numberOfLines?: number;
	text?: string;
	setText?: any;
	disabled?: boolean;
	// theme: typeof DefaultTheme;
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
		return (
			<TextInput
				accessibilityStates={"none"}
				value={text}
				onChangeText={(text) => setText(text)}
				placeholder={placeholder ? placeholder : undefined}
				label={label ? label : undefined}
				multiline={multiline}
				numberOfLines={numberOfLines}
				{...rest}
			/>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.text === nextProps.text;
	}
);
