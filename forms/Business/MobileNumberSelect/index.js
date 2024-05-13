import React from 'react';

import SelectCountryCode from '../CountryCodeSelect';

import { CountryCode, MobileNumber, RowConatainer, TextFieldWrapper } from './styles';

function SelectMobileNumber({
	value = {},
	onChange,
	codeKey = 'country_code',
	numberKey = 'number',
	disable_country_code = false,
	...rest
}) {
	const { [codeKey]: country_code = '', [numberKey]: number = '' } =
		value || {};

	const handleCodeChange = (v) => {
		onChange({ ...(value || {}), [codeKey]: v.target.value });
	};

	const handleNumberChange = (e) => {
		onChange({ ...(value || {}), [numberKey]: e.target.value });
	};

	return (
		<RowConatainer>
			<CountryCode>
				<SelectCountryCode
					{...rest}
					value={country_code || (value || {})[codeKey]}
					onChange={handleCodeChange}
					name=""
					disabled={disable_country_code}
				/>
			</CountryCode>

			<MobileNumber>
				<TextFieldWrapper
					{...rest}
					variant="outlined"
					label="Mobile Number"
					id="outlined-basic"
					name="mobile_number"
					type="number"
					value={number || (value || {})[numberKey]}
					onChange={handleNumberChange}
				/>
			</MobileNumber>
		</RowConatainer>
	);
}

export default SelectMobileNumber;
