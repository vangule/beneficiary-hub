import {
	InputController,
	MobileNumberController,
	SelectController,
	TextFieldController,
} from '@/forms';

export const controls = [
	{
		controllertype: 'input',
		type: 'text',
		name: 'fullName',
		id: 'outlined-error-helper-text',
		label: 'Full Name',
		grid: 6,
		variant: 'filled',
		rules: {
			required: {
				value: true,
				message: 'Full name is required',
			},
			pattern: {
				value: /^[a-zA-Z\s]+$/,
			},
		},
	},
	{
		controllertype: 'select',
		type: 'select',
		name: 'country',
		label: 'Country',
		id: 'demo-simple-select-filled',
		variant: 'filled',
		grid: 6,
		rules: {
			required: {
				value: true,
				message: 'Country is required',
			},
		},
		options: [
			{
				label: 'India',
				value: 'india',
			},
			{
				label: 'Afrika',
				value: 'afrika',
			},
			{
				label : 'Australia',
				value: 'australia'
			},
			{
				label: 'Rusia',
				value: 'rusia',
			},
			{
				label: 'US',
				value: 'us',
			},
		],
	},
	{
		controllertype: 'textArea',
		type: 'text',
		name: 'address',
		id: 'outlined-basic',
		label: 'Address',
		variant: 'filled',
		rules: {
			required: {
				value: true,
				message: 'Address is required',
			},
		},
		multiline: true,
		rows: 2,
	},
	{
		controllertype: 'countryMobile',
		name: 'mobileNumber',
		id: 'demo-simple-select-filled',
		variant: 'filled',
		grid: 6,
		value: { country_code: '+91' },
		rules: {
			required: {
				value: true,
				message: 'Mobile number is required',
			},
			validate: (value) => {
				const { country_code, number } = value;

				if (!country_code) {
					return 'Mobile number country code is required';
				}

				if (!number) {
					return 'Mobile number is required';
				}
				return undefined;
			},
		},
	},
	{
		controllertype: 'input',
		type: 'number',
		min: '1',
		grid: 6,
		id: 'demo-simple-select-filled',
		label: 'Pin Code',
		variant: 'filled',
		name: 'pincode',
		rules: {
			required: {
				value: true,
				message: 'Pin code is required',
			},
		},
	},
];

export const controlMapping = {
	input: InputController,
	select: SelectController,
	countryMobile: MobileNumberController,
	textArea: TextFieldController,
};
