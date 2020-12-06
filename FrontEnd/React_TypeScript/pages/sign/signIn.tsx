import * as React from 'react';
import {
    StyledButton1,
    StyledDiv1,
    StyledFlex1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex16_1,
    StyledBorderDiv21,
    StyledBackgroundDiv21,
    StyledText4,
    StyledPassword2,
    StyledFlex24,
} from '../../api/styled';
import { StyledH6, StyledH7 } from '../../api/styledFont';
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
                <StyledDiv1>
                    <div style={{ textAlign: 'center' }}>
                        <img src="/img/GROUBY.png" />
                    </div>
                    <StyledDiv5>
                        <StyledDiv6>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledText4 placeholder="아이디" onChange={setUserIdAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </StyledDiv6>

                        <StyledDiv6>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledPassword2 placeholder="비밀번호" onChange={setUserPasswordAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </StyledDiv6>

                        <StyledDiv6 style={{ marginBottom: '0.2rem' }}>
                            <StyledFlex16_1>
                                <StyledButton1 onClick={onSignIn}>
                                    <StyledH6>로그인</StyledH6>
                                </StyledButton1>
                            </StyledFlex16_1>
                        </StyledDiv6>

                        <StyledDiv6>
                            <StyledFlex24>
                                <div onClick={goSignUp}>
                                    <StyledH7>회원가입</StyledH7>
                                </div>

                                <div>
                                    <StyledH7>계정찾기</StyledH7>
                                </div>
                            </StyledFlex24>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>
            </StyledFlex1>

            <style global jsx>
                {`
                    html,
                    body {
                        height: 100%;
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
