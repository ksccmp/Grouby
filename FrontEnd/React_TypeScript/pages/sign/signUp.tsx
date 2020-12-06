import * as React from 'react';
import {
    StyledFlex2,
    StyledDiv1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledDiv8,
    StyledText4,
    StyledFlex16_1,
    StyledBorderDiv21,
    StyledBackgroundDiv21,
    StyledPassword2,
} from '../../api/styled';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import {
    StyledLeftOutlined2,
    StyledCheckOutlined1,
    StyledLockOutlined1,
    StyledUnlockOutlined1,
} from '../../api/styledAnt';
import { IUser } from '../../api/interface';
import { getTime, goSignIn, color3 } from '../../api/common';
import axios from '../../api/axios';

interface ISignUp extends IUser {
    userCheckPassword: string;
}

const SignUp = (): JSX.Element => {
    const signUpInitState: ISignUp = {
        userId: '',
        userName: '',
        userPassword: '',
        userCheckPassword: '',
        userPhone: '',
    };

    type IAction =
        | { type: typeof setUserId; payload: string }
        | { type: typeof setUserName; payload: string }
        | { type: typeof setUserPassword; payload: string }
        | { type: typeof setUserCheckPassword; payload: string }
        | { type: typeof setUserPhone; payload: string };

    const setUserId = 'setUserId';
    const setUserName = 'setUserName';
    const setUserPassword = 'setUserPassword';
    const setUserCheckPassword = 'setUserCheckPassword';
    const setUserPhone = 'setUserPhone';

    const setUserIdAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signUpDispatch({
            type: setUserId,
            payload: e.target.value,
        });
    };

    const setUserNameAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signUpDispatch({
            type: setUserName,
            payload: e.target.value,
        });
    };

    const setUserPasswordAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signUpDispatch({
            type: setUserPassword,
            payload: e.target.value,
        });
    };

    const setUserCheckPasswordAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signUpDispatch({
            type: setUserCheckPassword,
            payload: e.target.value,
        });
    };

    const setUserPhoneAction = (e: React.ChangeEvent<HTMLInputElement>) => {
        signUpDispatch({
            type: setUserPhone,
            payload: e.target.value,
        });
    };

    const signUpReducer = (state: ISignUp, action: IAction) => {
        switch (action.type) {
            case setUserId: {
                return {
                    ...state,
                    userId: action.payload,
                };
            }

            case setUserName: {
                return {
                    ...state,
                    userName: action.payload,
                };
            }

            case setUserPassword: {
                return {
                    ...state,
                    userPassword: action.payload,
                };
            }

            case setUserCheckPassword: {
                return {
                    ...state,
                    userCheckPassword: action.payload,
                };
            }

            case setUserPhone: {
                return {
                    ...state,
                    userPhone: action.payload,
                };
            }

            default: {
                return {
                    ...state,
                };
            }
        }
    };

    const [localReducer, signUpDispatch] = React.useReducer(signUpReducer, signUpInitState);

    const onRegUser = async () => {
        const curTime: string = getTime();
        const user: IUser = {
            userId: localReducer.userId,
            userName: localReducer.userName,
            userPassword: localReducer.userPassword,
            userPhone: localReducer.userPhone,
            regDate: curTime,
            modDate: curTime,
        };

        if (
            user.userId === '' ||
            user.userName === '' ||
            user.userPassword === '' ||
            user.userPhone === '' ||
            user.userPassword !== localReducer.userCheckPassword
        ) {
            alert('정보를 확인해주세요.');
        } else {
            const res = await axios.post('/user/insert', user);
            if (res.data.data === 0 && res.data.success === false) {
                alert('중복된 아이디가 존재합니다.');
            } else {
                alert('아이디가 생성되었습니다.');
                goSignIn();
            }
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goSignIn} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>회원가입</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13 onClick={onRegUser}>
                                <StyledCheckOutlined1 />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>아이디</StyledH7>
                        </div>
                        <div>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledText4 placeholder="아이디" onChange={setUserIdAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </div>
                    </StyledDiv6>

                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>비밀번호</StyledH7>
                        </div>
                        <div>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledPassword2 placeholder="비밀번호" onChange={setUserPasswordAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </div>
                    </StyledDiv6>

                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>비밀번호 확인</StyledH7>
                        </div>
                        <div>
                            <StyledFlex16_1>
                                <div style={{ width: '100%', marginRight: '10px' }}>
                                    <StyledBorderDiv21>
                                        <StyledBackgroundDiv21>
                                            <StyledPassword2
                                                placeholder="비밀번호 확인"
                                                onChange={setUserCheckPasswordAction}
                                            />
                                        </StyledBackgroundDiv21>
                                    </StyledBorderDiv21>
                                </div>
                                <div>
                                    {localReducer.userPassword === localReducer.userCheckPassword ? (
                                        <StyledLockOutlined1 />
                                    ) : (
                                        <StyledUnlockOutlined1 />
                                    )}
                                </div>
                            </StyledFlex16_1>
                        </div>
                    </StyledDiv6>

                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>이름</StyledH7>
                        </div>
                        <div>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledText4 placeholder="이름" onChange={setUserNameAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </div>
                    </StyledDiv6>

                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>전화번호</StyledH7>
                        </div>
                        <div>
                            <StyledFlex16_1>
                                <StyledBorderDiv21>
                                    <StyledBackgroundDiv21>
                                        <StyledText4 placeholder="전화번호" onChange={setUserPhoneAction} />
                                    </StyledBackgroundDiv21>
                                </StyledBorderDiv21>
                            </StyledFlex16_1>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default SignUp;
