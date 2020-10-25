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
import { goBack } from '../../api/common';

const SignUp = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>회원가입</StyledH3>
                        </div>
                        <div>
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
                        <StyledText1 placeholder="아이디"></StyledText1>
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
                        <StyledPassword1 placeholder="비밀번호"></StyledPassword1>
                        <StyledExternalDiv1>
                            <StyledButton2>
                                <StyledH6>O</StyledH6>
                            </StyledButton2>
                        </StyledExternalDiv1>
                    </StyledBackgroundDiv2>
                </StyledBorderDiv2>

                <StyledBorderDiv2>
                    <StyledBackgroundDiv2>
                        <StyledPassword1 placeholder="비밀번호 확인"></StyledPassword1>
                        <StyledExternalDiv1>
                            <StyledButton2>
                                <StyledH6 style={{ color: 'red' }}>O</StyledH6>
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
                        <StyledText1 placeholder="이름"></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>전화번호</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="전화번호"></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default SignUp;
