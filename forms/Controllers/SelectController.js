import Select from '@mui/material/Select';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import styled from 'styled-components';

function SelectController(props) {
	const { name, control, value, rules, options = [], controllertype = '', ...rest } = props;

	const [isSelectFocused, setIsSelectFocused] = useState(false);

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => {
				return(<FormControl fullWidth error={rest?.error}>
					<FieldName isSelectFocused={newValue || isSelectFocused} id="demo-simple-select-label">{rest.label}</FieldName>
					<Select
						{...rest}
						id={name}
						key={rest.id}
						label={rest.label}
						value={newValue || ''}
						onChange={(event) => {
							onChange(event);
							rest.onChange?.(event);
						}}
						onBlur={(event) => {
							onBlur(event);
							rest.onBlur?.(event);
							setIsSelectFocused(false);
						}}
						onFocus={() => setIsSelectFocused(true)}
					>
						{options.map((val) => (
							<MenuItem key={val.value} value={val.value}>
								{val.label}
							</MenuItem>
						))}
					</Select>
					{rest?.error && <FormHelperText>{rest?.helperText}</FormHelperText>}
				</FormControl>)
			}}
		/>
	);
}
export default SelectController;

const FieldName = styled(InputLabel)`
	margin-top: ${({ isSelectFocused }) => isSelectFocused ? '16px' : '0px'};
`;