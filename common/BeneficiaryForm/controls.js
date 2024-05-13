import { InputController, SelectController } from '@/forms';

export const controls = [
	{
		controllerType: 'input',
		type: 'text',
		name: 'name',
		id: 'outlined-error-helper-text',
		label: 'Name',
		grid: 6,
		variant: 'outlined',
		rules: {
			required: {
				value: true,
				message: 'Name is required',
			},
			pattern: {
				value: /^[a-zA-Z\s]+$/,
			},
		},
	},
	{
		controllerType: 'input',
		type: 'number',
		name: 'accountNumber',
		id: 'outlined-error-helper-text',
		label: 'Account Number',
		grid: 6,
		variant: 'outlined',
		rules: {
			required: {
				value: true,
				message: 'Account number is required',
			},
		},
	},
	{
		controllerType: 'select',
		type: 'select',
		name: 'bankName',
		label: 'Bank Name',
		id: 'outlined-error-helper-text',
		grid: 6,
		rules: {
			required: {
				value: true,
				message: 'Bank name is required',
			},
		},
		options: [
			{
				label : 'Federal Bank',
				value : 'Federal Bank'
			},
			{
				label: 'HDFC Bank',
				value: 'HDFC Bank',
			},
			{
				label: 'Indusland Bank',
				value: 'Indusland Bank',
			},
			{
				label: 'SBI Bank',
				value: 'SBI Bank',
			},
			{
				label: 'Yes Bank',
				value: 'Yes Bank',
			},
		],
	},
	{
		controllerType: 'select',
		type: 'select',
		name: 'accountType',
		label: 'Account Type',
		id: 'outlined-error-helper-text',
		grid: 6,
		rules: {
			required: {
				value: true,
				message: 'Account type is required',
			},
		},
		options: [
			{
				label: 'Current Account',
				value: 'current_account',
			},
			{
				label: 'Savings Account',
				value: 'savings_account',
			},
		],
	},
];

export const controlMapping = {
	input: InputController,
	select: SelectController,
};
