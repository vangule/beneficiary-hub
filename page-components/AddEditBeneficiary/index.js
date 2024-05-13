import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import BeneficiaryForm from '@/common/BeneficiaryForm';
import { addBeneficiary, editBeneficiary } from '@/redux/userSlice';
import { Header, Container, FormContainer } from './styles';

const getRandomNumberUpToFiveDigits = () => {
	return Math.floor(Math.random() * 100000);
};

function AddEditBeneficiary({ isEdit, prefillData }) {
	const dispatch = useDispatch();
	const { push } = useRouter();

	const [openSnackBar, setOpenSnackBar] = useState(false);

	const onSubmit = (data) => {
		if (isEdit) {
			const editFinalData = { ...data, id: prefillData?.id };
			dispatch(editBeneficiary(editFinalData));
		} else {
			const finalData = { ...data, id: getRandomNumberUpToFiveDigits() };
			dispatch(addBeneficiary(finalData));
		}

		setOpenSnackBar(true);

		setTimeout(() => {
			push('/beneficiary');
		}, 1000);
	};

	return (
		<Container component={Paper}>
			<FormContainer>
				<Header>{isEdit ? 'Edit' : 'Add'} Beneficiary</Header>
				<BeneficiaryForm
					prefillData={prefillData}
					isEdit={isEdit}
					onSubmit={onSubmit}
				/>
			</FormContainer>
			<Snackbar
				open={openSnackBar}
				autoHideDuration={3000}
				onClose={() => setOpenSnackBar(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={() => setOpenSnackBar(false)}
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

export default AddEditBeneficiary;
