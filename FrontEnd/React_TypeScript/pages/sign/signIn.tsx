import * as React from 'react';
import {
    StyledButton1,
    StyledPassword1,
    StyledText1,
    StyledMaxDiv1,
    StyledDiv1,
    StyledFlex1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledNineDiv1,
} from '../../api/styled';
import Router from 'next/router';
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
                    <StyledMaxDiv1>GROUBY</StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="아이디" onChange={setUserIdAction}></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledPassword1
                                    placeholder="비밀번호"
                                    onChange={setUserPasswordAction}
                                ></StyledPassword1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledDiv1>
                            <StyledFlex1>
                                <StyledButton1 onClick={onSignIn}>SignIn</StyledButton1>
                                <StyledButton1 onClick={goSignUp}>SignUp</StyledButton1>
                                <StyledButton1>Search</StyledButton1>
                            </StyledFlex1>
                        </StyledDiv1>
                    </StyledMaxDiv1>
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
