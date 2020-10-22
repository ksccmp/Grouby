import { AppProps } from 'next/app';
import SignLayout from '../component/layouts/signLayout';
import store from '../modules/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Provider store={store}>
                <div>
                    <SignLayout>
                        <Component {...pageProps} />
                    </SignLayout>
                </div>

                <style global jsx>
                    {`
                        body {
                            margin: 20px;
                        }
                    `}
                </style>
            </Provider>
        </>
    );
};

export default App;
