import { AppProps } from 'next/app';
import SignLayout from '../component/layouts/signLayout';
import MainLayout from '../component/layouts/mainLayout';
import store from '../modules/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
    const getLayout = () => {
        if (router.pathname.startsWith('/sign/')) {
            return (
                <SignLayout>
                    <Component {...pageProps} />
                </SignLayout>
            );
        } else if (router.pathname.startsWith('/main/')) {
            return (
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            );
        } else {
            return <Component {...pageProps} />;
        }
    };
    return (
        <>
            <Provider store={store}>
                <div>{getLayout()}</div>

                <style global jsx>
                    {`
                        body {
                            margin: 0px;
                        }
                    `}
                </style>
            </Provider>
        </>
    );
};

export default App;
