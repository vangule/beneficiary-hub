import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import ManageBeneficiary from '@/page-components/ManageBeneficiary';

function EditBeneficiary() {
	const { query } = useRouter();

	const { beneficiaries = [] } = useSelector((state) => state?.user);

	const beneficiary = beneficiaries.find((val) => Number(val.id) === Number(query?.id))
	
	if (!beneficiary) return <div>Beneficiary not found</div>;

	return <ManageBeneficiary isEdit prefillData={beneficiary} />;
}

export default EditBeneficiary;
