import * as React from 'react';
import {
    StyledButton1,
    StyledPassword1,
    StyledText1,
    StyledDiv1,
    StyledFlex1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledNineDiv1,
} from '../../api/styled';
import { StyledH6 } from '../../api/styledFont';
import { goMainHome, goGroupHome, goSpotItems, goSignUp } from '../../api/common';
import { IUser } from '../../api/interface';

type ISignIn = IUser;

const SignIn = (): JSX.Element => {
    const signInInitState: ISignIn = {
        userId: '',
        userPassword: '',
    };

    const setUserId = 'setUserId';
    const setUserPassword = 'setUserPassword';

    type IAction = { type: typeof setUserId; payload: string } | { type: typeof setUserPassword; payload: string };

    const setUserIdAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signInDispatch({
            type: setUserId,
            payload: e.target.value,
        });
    };

    const setUserPasswordAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signInDispatch({
            type: setUserPassword,
            payload: e.target.value,
        });
    };

    const signInReducer = (state: ISignIn, action: IAction) => {
        switch (action.type) {
            case setUserId: {
                return {
                    ...state,
                    userId: action.payload,
                };
            }

            case setUserPassword: {
                return {
                    ...state,
                    userPassword: action.payload,
                };
            }

            default: {
                return {
                    ...state,
                };
            }
        }
    };

    const [localReducer, signInDispatch] = React.useReducer(signInReducer, signInInitState);

    const onSignIn = () => {
        const user: IUser = {
            userId: localReducer.userId,
            userPassword: localReducer.userPassword,
        };

        console.log(user);
    };

    return (
        <>
            <button onClick={goMainHome}>mainHome</button>
            <button onClick={goGroupHome}>groupHome</button>
            <button onClick={goSpotItems}>spotItems</button>
            <StyledFlex1>
                <StyledNineDiv1>
                    <StyledDiv1>
                        <div style={{ textAlign: 'center' }}>
                            <img src="/img/GROUBY.png" />
                        </div>

                        <div>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledText1 placeholder="아이디" onChange={setUserIdAction}></StyledText1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>

                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledPassword1
                                        placeholder="비밀번호"
                                        onChange={setUserPasswordAction}
                                    ></StyledPassword1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>

                        <div>
                            <StyledFlex1>
                                <StyledButton1 onClick={onSignIn}>
                                    <StyledH6>SignIn</StyledH6>
                                </StyledButton1>
                                <StyledButton1 onClick={goSignUp}>
                                    <StyledH6>SignUp</StyledH6>
                                </StyledButton1>
                                <StyledButton1>
                                    <StyledH6>Search</StyledH6>
                                </StyledButton1>
                            </StyledFlex1>
                        </div>
                    </StyledDiv1>
                </StyledNineDiv1>
            </StyledFlex1>

            <style global jsx>
                {`
                    html,
                    body {
                        height: 98%;
                    }
                    div#__next,
                    div#__next > div,
                    div#__next > div > div {
                        height: 100%;
                    }
                `}
            </style>
        </>
    );
};

export default SignIn;
