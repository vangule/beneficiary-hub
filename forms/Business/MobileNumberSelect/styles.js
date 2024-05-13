import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const RowConatainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	gap: 12px;
`;

export const CountryCode = styled.div`
	width: 30%;
`;

export const MobileNumber = styled.div`
	width: 70%;
`;

export const TextFieldWrapper = styled(TextField)`
	input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
`;