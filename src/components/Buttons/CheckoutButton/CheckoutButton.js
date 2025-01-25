'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { getCheckout } from '@/utils/api/get-checkout';
import { toast } from 'sonner';
import checkError from '@/utils/functions/check-error';
import { InfinitySpin } from 'react-loader-spinner';

export default function CheckoutButton({ title, className, children }) {
    const [loading, setLoading] = useState(false);

    async function handleCheckout() {
        setLoading(true);
        try {
            const link = await getCheckout();
            window.open(link, '_blank');
        } catch (error) {
            toast.error(checkError(error));
        }
        setLoading(false);
    }

    return (
        <button onClick={handleCheckout} className={clsx(styles.root, { [className]: !!className })}>
            <span className={clsx({ [styles.loading]: loading })}>{title || children}</span>
            {loading && (
                <div className={styles.loader}>
                    <InfinitySpin visible={true} width="100" color="#fff" />
                </div>
            )}
        </button>
    );
}
