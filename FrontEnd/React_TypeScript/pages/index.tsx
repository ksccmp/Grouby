import * as React from 'react';
import Router from 'next/router';

const Index = (): JSX.Element => {
    React.useEffect(() => {
        Router.push('/sign/signIn');
    }, []);

    return (
        <>
            <div style={{ display: 'none' }}>Index</div>
        </>
    );
};

export default Index;
