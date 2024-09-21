import React from 'react';
import { RecoilRoot } from 'recoil';

const RecoilWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
};

export default RecoilWrapper;
