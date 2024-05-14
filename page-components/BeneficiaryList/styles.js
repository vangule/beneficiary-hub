import styled from 'styled-components';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const Container = styled.div`
	margin: 20px 40px;
`;

export const FlexHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const Header = styled.div`
	font-size: 28px;
	font-weight: 600;
	padding: 16px;
	background: #F5761A;
	color: #fff;
`;

export const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#FAD5A5',
		color: '#000',
		fontWeight: '600'
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const Back = styled.div`
	font-size: 24px;
	margin-left: -15px;
`;

export const Note = styled.div`
	font-size: 24px;
	text-align: center;
	margin-top: 30px
`;
