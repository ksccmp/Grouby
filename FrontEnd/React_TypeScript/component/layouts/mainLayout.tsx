import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import Router from 'next/router';
import { goMainHome, goMainFriends, goMainAdd } from '../../api/common';

interface ISignLayout {
    children: React.ReactNode;
}

const SignLayout: React.FC<ISignLayout> = ({ children }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            {Router.pathname.endsWith('mainHome') ||
            Router.pathname.endsWith('mainFriends') ||
            Router.pathname.endsWith('mainAdd') ? (
                <div>
                    <StyledNineFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('mainHome') ? true : false}
                                    onClick={goMainHome}
                                >
                                    <StyledH4>홈</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('mainFriends') ? true : false}
                                    onClick={goMainFriends}
                                >
                                    <StyledH4>친구</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('mainAdd') ? true : false}
                                    onClick={goMainAdd}
                                >
                                    <StyledH4>더보기</StyledH4>
                                </StyledNavLi1>
                            </StyledNavUl1>
                        </StyledDiv1>
                    </StyledNineFixedFooter1>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default SignLayout;