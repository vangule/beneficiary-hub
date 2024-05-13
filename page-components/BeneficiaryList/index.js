import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { Edit, Delete, ArrowBack } from '@mui/icons-material';
import { removeBeneficiary } from '@/redux/userSlice';
import ConfirmationModal from './ConfirmationModal';
import { FlexHeader, Header, StyledTableCell, Note } from './styles';

function BeneficiaryList() {
	const { push } = useRouter();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [selectedId, setSelectedId] = useState();

	const { beneficiaries } = useSelector((state) => state?.user);

	const handleEdit = (id) => {
		push(`/beneficiary/edit/${id}`);
	};

	const handleDeleteModal = (id) => {
		setSelectedId(id);
		setOpen(true);
	};

	const handleDelete = () => {
		dispatch(removeBeneficiary(selectedId));
		setSelectedId();
		setOpen(false);
	};

	return (
		<>
			<FlexHeader>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<ArrowBack
						onClick={() => push('/')}
						style={{ marginRight: 24, cursor: 'pointer' }}
					/>
					<Header>Beneficiary Users</Header>
				</div>
				<Button
					style={{ background : '#000'}}
					onClick={() => push('/beneficiary/add')}
					variant="contained"
				>
					Add New Beneficiary
				</Button>
			</FlexHeader>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Name</StyledTableCell>
							<StyledTableCell align="right">Account Number</StyledTableCell>
							<StyledTableCell align="right">Bank Name</StyledTableCell>
							<StyledTableCell align="right">Type of Account</StyledTableCell>
							<StyledTableCell align="right">Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(beneficiaries || []).map((row) => {
							const { name, accountNumber, bankName, accountType, id  } = row || {};

							const typeOfAcc = row.accountType.replace(/_/g, " ");

							return(
								<TableRow
								key={id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row" style={{ textTransform : 'capitalize' }}>
									{name}
								</TableCell>
								<TableCell align="right">{accountNumber}</TableCell>
								<TableCell align="right">{bankName}</TableCell>
								<TableCell align="right" style={{ textTransform : 'capitalize'}}>{typeOfAcc}</TableCell>
								<TableCell align="right">
									<Edit
										onClick={() => handleEdit(id)}
										style={{ marginRight: 8, cursor: 'pointer' }}
									/>
									<Delete
										onClick={() => handleDeleteModal(id)}
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
		</>
	);
}

export default BeneficiaryList;
