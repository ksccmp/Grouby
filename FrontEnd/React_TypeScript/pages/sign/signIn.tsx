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

const SignIn = (): JSX.Element => {
    return (
        <>
            <button onClick={() => Router.push('/main/mainHome')}>mainHome</button>
            <button onClick={() => Router.push('/group/groupHome')}>groupHome</button>
            <StyledFlex1>
                <StyledNineDiv1>
                    <StyledMaxDiv1>GROUBY</StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="아이디"></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledPassword1 placeholder="비밀번호"></StyledPassword1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </StyledMaxDiv1>
                    <StyledMaxDiv1>
                        <StyledDiv1>
                            <StyledFlex1>
                                <StyledButton1>SignIn</StyledButton1>
                                <StyledButton1 onClick={() => Router.push('/sign/signUp')}>SignUp</StyledButton1>
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
