import * as React from 'react';
import {
    StyledFlex2,
    StyledDiv1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledBorderDiv14,
    StyledBackgroundDiv14,
    StyledText1,
    StyledNineDiv1,
    StyledPassword1,
    StyledButton5,
    StyledBackgroundDiv2,
    StyledExternalDiv1,
    StyledBorderDiv2,
} from '../../api/styled';
import { StyledH3, StyledH5, StyledH6 } from '../../api/styledFont';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { IUser } from '../../api/interface';
import { goBack, getTime } from '../../api/common';

interface ISignUp extends IUser {
    userCheckPassword: string;
    userCheckId: boolean;
}

const SignUp = (): JSX.Element => {
    const signUpInitState: ISignUp = {
        userId: '',
        userCheckId: false,
        userName: '',
        userPassword: '',
        userCheckPassword: '',
        userPhone: '',
    };

    type IAction =
        | { type: typeof setUserId; payload: string }
        | { type: typeof setUserCheckId }
        | { type: typeof setUserName; payload: string }
        | { type: typeof setUserPassword; payload: string }
        | { type: typeof setUserCheckPassword; payload: string }
        | { type: typeof setUserPhone; payload: string };

    const setUserId = 'setUserId';
    const setUserCheckId = 'setUserCheckId';
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

    const setUserCheckIdAction = () => {
        signUpDispatch({
            type: setUserCheckId,
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

            case setUserCheckId: {
                return {
                    ...state,
                    userCheckId: true,
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

    const onRegUser = () => {
        const curTime: string = getTime();
        const user: IUser = {
            userId: localReducer.userId,
            userName: localReducer.userName,
            userPassword: localReducer.userPassword,
            userPhone: localReducer.userPhone,
            regDate: curTime,
            modDate: curTime,
        };

        console.log(user);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goBack} />
                                <StyledH3>회원가입</StyledH3>
                            </div>
                            <div onClick={onRegUser}>
                                <StyledH3>생성</StyledH3>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>아이디</StyledH5>
                            <StyledBorderDiv2>
                                <StyledBackgroundDiv2>
                                    <StyledText1 placeholder="아이디" onChange={setUserIdAction}></StyledText1>
                                    <StyledExternalDiv1 onClick={setUserCheckIdAction}>
                                        <StyledButton5 check={localReducer.userCheckId}>
                                            <StyledH6>중복</StyledH6>
                                        </StyledButton5>
                                    </StyledExternalDiv1>
                                </StyledBackgroundDiv2>
                            </StyledBorderDiv2>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>비밀번호</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledPassword1
                                        placeholder="비밀번호"
                                        onChange={setUserPasswordAction}
                                    ></StyledPassword1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>

                            <StyledBorderDiv14 same={localReducer.userPassword === localReducer.userCheckPassword}>
                                <StyledBackgroundDiv14>
                                    <StyledPassword1
                                        placeholder="비밀번호 확인"
                                        onChange={setUserCheckPasswordAction}
                                    ></StyledPassword1>
                                </StyledBackgroundDiv14>
                            </StyledBorderDiv14>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>이름</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledText1 placeholder="이름" onChange={setUserNameAction}></StyledText1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>

                        <div>
                            <StyledH5>전화번호</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledText1 placeholder="전화번호" onChange={setUserPhoneAction}></StyledText1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default SignUp;
