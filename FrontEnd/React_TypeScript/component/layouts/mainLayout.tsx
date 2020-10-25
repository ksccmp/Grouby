import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import Router from 'next/router';

interface ISignLayout {
    children: React.ReactNode;
}

const SignLayout: React.FC<ISignLayout> = ({ children }): JSX.Element => {
    const goHome = () => {
        Router.push('/main/mainHome');
    };

    const goFriends = () => {
        Router.push('/main/mainFriends');
    };

    const goAdd = () => {
        Router.push('/main/mainAdd');
    };

    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            <div>
                <StyledNineFixedFooter1>
                    <StyledDiv1>
                        <StyledNavUl1>
                            <StyledNavLi1 checked={Router.pathname.endsWith('Home') ? true : false} onClick={goHome}>
                                <StyledH4>홈</StyledH4>
                            </StyledNavLi1>
                            <StyledNavLi1
                                checked={Router.pathname.endsWith('Friends') ? true : false}
                                onClick={goFriends}
                            >
                                <StyledH4>친구</StyledH4>
                            </StyledNavLi1>
                            <StyledNavLi1 checked={Router.pathname.endsWith('Add') ? true : false} onClick={goAdd}>
                                <StyledH4>더보기</StyledH4>
                            </StyledNavLi1>
                        </StyledNavUl1>
                    </StyledDiv1>
                </StyledNineFixedFooter1>
            </div>
        </>
    );
};

export default SignLayout;
