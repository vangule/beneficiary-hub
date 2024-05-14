import React from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material';

const ConfirmationModal = ({ open = false, setOpen = () => {}, setSelectedId = () => {}, handleDelete = () => {} }) => {
    const handleClose = () => {
		setOpen(false);
		setSelectedId(false);
	};

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Are you sure you want to delete this beneficiary?
        </DialogTitle>
        <DialogActions>
            <Button variant="contained" style={{  background: '#F5761A', color: '#fff' }} onClick={handleDelete}>Yes</Button>
            <Button variant='outlined' onClick={handleClose} autoFocus style={{ border : '1px solid #D3D3D3', background: '#D3D3D3', color: '#000' }}>
                No
            </Button>
        </DialogActions>
	</Dialog>
  )
}

export default ConfirmationModal