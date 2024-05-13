import Input from '@mui/material/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';


function InputController(props) {
	const { name, control, value, rules, ...rest } = props;

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<InputWrapper
					{...rest}
					id={name}
					key={rest.id}
					value={newValue || ''}
					onChange={(event) => {
						onChange(event);
						rest.onChange?.(event);
					}}
					onBlur={(event) => {
						onBlur(event);
						rest.onBlur?.(event);
					}}
				/>
			)}
		/>
	);
}
export default InputController;


const InputWrapper = styled(Input)`
	input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
`;