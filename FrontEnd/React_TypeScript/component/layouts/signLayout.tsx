import * as React from 'react';

interface ISignLayout {
    children: React.ReactNode;
}

const SignLayout: React.FC<ISignLayout> = ({ children }): JSX.Element => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};

export default SignLayout;
