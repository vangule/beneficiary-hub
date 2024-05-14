import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import BeneficiaryForm from '@/common/BeneficiaryForm';
import { addBeneficiary, editBeneficiary } from '@/redux/userSlice';
import { Header, Container, FormContainer } from './styles';

const generateRandomNumber = () => {
    const randomNumber = Math.random() * 100000;
    return randomNumber.toFixed(0);
};

function ManageBeneficiary({ isEdit = false, prefillData = {} }) {
	const dispatch = useDispatch();
	const { push } = useRouter();

	const [isOpened, setIsOpened] = useState(false);

	const onSubmit = (data) => {
		const finalData = isEdit
			? { ...data, id: prefillData?.id }
			: { ...data, id: generateRandomNumber() };
	
		const action = isEdit ? editBeneficiary : addBeneficiary;
	
		dispatch(action(finalData));
		setIsOpened(true);
	
		setTimeout(() => {
			push('/beneficiary');
		}, 1000);
	};
	

	return (
		<Container component={Paper}>
			<FormContainer>
				<Header>{isEdit ? 'Edit' : 'Add New'} Beneficiary</Header>
				<BeneficiaryForm
					prefillData={prefillData}
					isEdit={isEdit}
					onSubmit={onSubmit}
				/>
			</FormContainer>
			<Snackbar
				open={isOpened}
				autoHideDuration={3000}
				onClose={() => setIsOpened(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={() => setIsOpened(false)}
					severity="success"
					variant="filled"
					sx={{ width: '100%' }}
				>
					Beneficiary {`${isEdit ? 'Edited' : 'Added'}`} Successfully
				</Alert>
			</Snackbar>
		</Container>
	);
}

export default ManageBeneficiary;
