'use client';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Close } from '@mui/icons-material';
import styles from './styles.module.scss';
import TailwindStyles from '@/utils/styling/tailwind-styles';
import { useSearchParams } from 'next/navigation';

export default function PaymentSuccessDialog() {
    const query = useSearchParams();
    const [open, setOpen] = useState(!!query.get('success'));

    function handleClose() {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            classes={{ paper: styles.paper }}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            fullWidth
            maxWidth="sm"
        >
            <div className={styles.dialogTitle} id="alert-dialog-title">
                <h2 className={'text-font24'}>Payment Successful</h2>
                <IconButton onClick={handleClose}>
                    <Close />
                </IconButton>
            </div>
            <DialogContent sx={{ pb: 4 }}>
                <h2>Thanks your your payment! We will email you with confirmation and notify you if you're the winning raffle number!</h2>
            </DialogContent>
            <div className={styles.actionContainer}>
                <button onClick={handleClose} className={`${TailwindStyles.secondaryBtn} px-8`}>
                    Close
                </button>
            </div>
        </Dialog>
    );
}
