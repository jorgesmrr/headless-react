import React from 'react';

export interface SpinnerProps {
    inline?: boolean;
    small?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({inline, small, children}) => {
    const getClass = () => {
        if (children || inline) {
            return 'spinner inline'
        } else if (small) {
            return 'spinner small'
        } else {
            return 'spinner'
        }
    }

    return (<div className={getClass()}>
        <div className="spin"/>
        {children}
    </div>)
}

export default Spinner;