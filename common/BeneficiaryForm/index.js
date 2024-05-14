/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { controlMapping, controls } from './controls';
import { useForm } from '@/forms';

function BeneficiaryForm({ onSubmit = () => {}, isEdit = false, prefillData = {} }) {
	const { push } = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		if (isEdit) {
			reset(prefillData);
		}
	}, [prefillData]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				{controls.map((val) => {
					const FormItem = controlMapping[val.controllertype];
					return (
						<Grid key={val?.name} item xs={12} md={val.grid || '12'}>
							<FormItem
								style={{ width: '100%', marginBottom: '10px' }}
								control={control}
								{...val}
								error={!!errors[val.name]}
								helperText={errors[val.name]?.message}
							/>
						</Grid>
					);
				})}
			</Grid>
			<div style={{ marginTop: '25px', display:'flex', justifyContent:'flex-end' }}>
				<Button
					style={{ marginRight: '20px', background: '#F5761A', color: '#fff' }}
					variant="contained"
					type="submit"
				>
					Submit
				</Button>
				<Button
					onClick={() => push('/beneficiary')}
					variant="outlined"
					style={{ border : '1px solid #D3D3D3', background: '#D3D3D3', color: '#000'}}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}

export default BeneficiaryForm;
