

import React from 'react';

const CustomSpinner = () => (
    <div className="custom-spinner">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FF0000" // Change color here
        >
            <circle cx="12" cy="12" r="10" stroke="#9A16F2" strokeWidth="2" fill="none" />
            <path d="M4 12h16" stroke="#9A16F2" strokeWidth="2" />
        </svg>
    </div>
);

export default CustomSpinner;