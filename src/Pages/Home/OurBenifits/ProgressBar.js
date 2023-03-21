import React from 'react';
import {CircularProgressbarWithChildren } from 'react-circular-progressbar';

const ProgressBar = ({value,}) => {
    return (
        <div className="">
            <div style={{ width: 100, height: 100 }}>
                <CircularProgressbarWithChildren value={value}>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong className='text-black text-[24px]'>{value}%</strong>
                    </div>
                </CircularProgressbarWithChildren>;
            </div>
        </div>
    );
};

export default ProgressBar;