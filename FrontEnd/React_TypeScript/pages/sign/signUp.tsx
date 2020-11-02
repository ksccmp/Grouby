import * as React from 'react';
import {
    StyledFlex2,
    StyledDiv1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledNineDiv1,
    StyledNineDiv2,
    StyledPassword1,
    StyledButton2,
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
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>회원가입</StyledH3>
                        </div>
                        <div onClick={onRegUser}>
                            <StyledH3>생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>아이디</StyledH5>
                </StyledDiv1>

                <StyledBorderDiv2>
                    <StyledBackgroundDiv2>
                        <StyledText1 placeholder="아이디" onChange={setUserIdAction}></StyledText1>
                        <StyledExternalDiv1>
                            <StyledButton2>
                                <StyledH6>중복</StyledH6>
                            </StyledButton2>
                        </StyledExternalDiv1>
                    </StyledBackgroundDiv2>
                </StyledBorderDiv2>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>비밀번호</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv2>
                    <StyledBackgroundDiv2>
                        <StyledPassword1 placeholder="비밀번호" onChange={setUserPasswordAction}></StyledPassword1>
                        <StyledExternalDiv1>
                            <StyledButton2>
                                <StyledH6>O</StyledH6>
                            </StyledButton2>
                        </StyledExternalDiv1>
                    </StyledBackgroundDiv2>
                </StyledBorderDiv2>

                <StyledBorderDiv2>
                    <StyledBackgroundDiv2>
                        <StyledPassword1
                            placeholder="비밀번호 확인"
                            onChange={setUserCheckPasswordAction}
                        ></StyledPassword1>
                        <StyledExternalDiv1>
                            <StyledButton2>
                                <StyledH6
                                    style={{
                                        color:
                                            localReducer.userPassword === localReducer.userCheckPassword ? '' : 'red',
                                    }}
                                >
                                    O
                                </StyledH6>
                            </StyledButton2>
                        </StyledExternalDiv1>
                    </StyledBackgroundDiv2>
                </StyledBorderDiv2>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>이름</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="이름" onChange={setUserNameAction}></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>전화번호</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="전화번호" onChange={setUserPhoneAction}></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default SignUp;
