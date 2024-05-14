import { InputController, SelectController } from '@/forms';

export const controls = [
	{
		controllertype: 'input',
		type: 'text',
		name: 'name',
		id: 'outlined-error-helper-text',
		label: 'Name',
		grid: 12,
		variant: 'filled',
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
		controllertype: 'input',
		type: 'number',
		name: 'accountNumber',
		id: 'outlined-error-helper-text',
		label: 'Account Number',
		grid: 12,
		variant: 'filled',
		rules: {
			required: {
				value: true,
				message: 'Account number is required',
			},
		},
	},
	{
		controllertype: 'select',
		type: 'select',
		name: 'bankName',
		label: 'Bank Name',
		id: 'outlined-error-helper-text',
		grid: 12,
		variant: 'filled',
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
		controllertype: 'select',
		type: 'select',
		name: 'accountType',
		label: 'Account Type',
		id: 'outlined-error-helper-text',
		variant: 'filled',
		grid: 12,
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
