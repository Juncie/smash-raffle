'use client';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/config';
import { PersistGate } from 'redux-persist/integration/react';

export default function ReduxWrapper({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {() => children}
            </PersistGate>
        </Provider>
    );
}
