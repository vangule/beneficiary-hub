import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { List, ListItem, Snackbar, Alert, Button, Grid } from '@mui/material';
import { useForm } from '@/forms';
import { controls, controlMapping } from './controls';
import { setUserDetails, resetState } from '@/redux/userSlice';
import isEmpty from '@/utils/isEmpty';
import {
	Container,
	FormContainer,
	Heading,
	SubHeading,
	FlexHeader,
	BottomSection,
	Field
} from './styles';

function Landing() {
	const { push } = useRouter();

	const [isOpened, setIsOpened] = useState(false);

	const { user } = useSelector((state) => state?.user);
	const { fullName = '', address = '', country = '', mobileNumber = '', pincode = '' } = user || {};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const onSubmit = (values) => {
		dispatch(setUserDetails(values));
		setIsOpened(true);
	};

	const handleCloseSnackbar = () => {
		setIsOpened(false);
	};


	return (
		<Container>
			<FormContainer>
				<Heading>Beneficiary</Heading>
				<FlexHeader>
					<SubHeading>Account Information</SubHeading>
					{!isEmpty(user) && (
						<Button 
							style={{ background: '#F5761A', color: '#fff', fontWeight: '600' }}
							variant="contained"
							type="submit"
							onClick={() => push('/beneficiary')}
						>
							Manage Beneficiaries
						</Button>
					)}
				</FlexHeader>
				{isEmpty(user) ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							{controls.map((val) => {
								const FormItem = controlMapping[val.controllertype];
								return (
									<Grid key={val?.name} item xs={12} md={val.grid || 12}>
										<FormItem
											style={{ width: '100%' }}
											control={control}
											{...val}
											error={!!errors[val.name]}
											helperText={errors[val.name]?.message}
										/>
									</Grid>
								);
							})}
						</Grid>
						<BottomSection>
							<Button
								style={{ marginTop: '20px', background: '#F5761A', color: '#fff', fontWeight: '600' }}
								variant="contained"
								type="submit"
							>
								Submit
							</Button>
						</BottomSection>
					</form>
				) : (
					<List style={{ background : 'aliceblue', borderRadius: '4px', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)', margin : '24px 0' }}>
						<ListItem style={{ textTransform: 'capitalize'}}><Field>Full Name :</Field>{fullName}</ListItem>
						<ListItem><Field>Address :</Field>{address}</ListItem>
						<ListItem style={{ textTransform: 'capitalize' }}>
							<Field>Country :</Field> {country}
						</ListItem>
						<ListItem>
							<Field>Mobile Number :</Field>{mobileNumber?.country_code}{' '}
							{mobileNumber?.number}
						</ListItem>
						<ListItem><Field>Pincode :</Field>{pincode}</ListItem>
					</List>
				)}
				{!isEmpty(user) && (
					<Button
						style={{ marginTop: '20px', background: '#F14F32' }}
						variant="contained"
						onClick={() => dispatch(resetState())}
					>
						Clear Data
					</Button>
				)}
			</FormContainer>
			<Snackbar
				open={isOpened}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={handleCloseSnackbar}
					variant="filled"
					sx={{ width: '100%', background: '#F5761A' }}
				>
					User Created Successfully
				</Alert>
			</Snackbar>
		</Container>
	);
}

export default Landing;
