import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { Edit, Delete, ArrowBack } from '@mui/icons-material';
import { removeBeneficiary } from '@/redux/userSlice';
import ConfirmationModal from './ConfirmationModal';
import { Container, FlexHeader, Header, StyledTableCell, Note, Back } from './styles';
import { startCase } from '@/utils/startCase';

function BeneficiaryList() {
	const { push } = useRouter();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [selectedId, setSelectedId] = useState();

	const { beneficiaries } = useSelector((state) => state?.user);

	const handleEdit = (id) => {
		push(`/beneficiary/edit/${id}`);
	};

	const handleRemoveBeneficiary = (id) => {
		setSelectedId(id);
		setOpen(true);
	};

	const handleDelete = () => {
		dispatch(removeBeneficiary(selectedId));
		setSelectedId();
		setOpen(false);
	};

	return (
		<Container>
			<FlexHeader>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<ArrowBack
						onClick={() => push('/')}
						style={{ marginRight: 24, cursor: 'pointer', width: '40px', height: '40px' }}
					/>
					<Back>Back</Back>
				</div>
				<Button
					style={{ background : '#F5761A', fontWeight: '600'}}
					onClick={() => push('/beneficiary/add')}
					variant="contained"
				>
					Add New Beneficiary
				</Button>
			</FlexHeader>
			<TableContainer component={Paper}>
				<Header>Registered Beneficiary List</Header>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Beneficiary Name</StyledTableCell>
							<StyledTableCell align="right">Beneficiary Bank</StyledTableCell>
							<StyledTableCell align="right">Account No.</StyledTableCell>
							<StyledTableCell align="right">Account Type</StyledTableCell>
							<StyledTableCell align="right">Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(beneficiaries || []).map((row) => {
							const { name, accountNumber, bankName, accountType, id  } = row || {};
							return(
								<TableRow
								key={id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row" style={{ textTransform : 'capitalize' }}>
									{name}
								</TableCell>
								<TableCell align="right">{startCase(bankName).toUpperCase()}</TableCell>
								<TableCell align="right">{accountNumber}</TableCell>
								<TableCell align="right" style={{ textTransform : 'capitalize'}}>{startCase(accountType)}</TableCell>
								<TableCell align="right">
									<Edit
										onClick={() => handleEdit(id)}
										style={{ marginRight: 8, cursor: 'pointer' }}
									/>
									<Delete
										onClick={() => handleRemoveBeneficiary(id)}
										style={{ cursor: 'pointer' }}
									/>
								</TableCell>
							</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{beneficiaries?.length <= 0 &&  <Note>No beneficiary added yet</Note>}

			<ConfirmationModal
				open={open}
				setOpen={setOpen}
				setSelectedId={setSelectedId}
				handleDelete={handleDelete} />
		</Container>
	);
}

export default BeneficiaryList;
