import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ManageBeneficiary from '@/page-components/ManageBeneficiary';
import isEmpty from '@/utils/isEmpty';

function AddBeneficiary() {
	const { push } = useRouter();
	const { user } = useSelector((state) => state?.user);

	if (isEmpty(user)) {
		push('/');
	}

	return <ManageBeneficiary />;
}

export default AddBeneficiary;
