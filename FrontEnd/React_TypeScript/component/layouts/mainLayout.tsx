import { Router } from 'next/router';
import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';

interface ISignLayout {
    children: React.ReactNode;
    router: Router;
}

const SignLayout: React.FC<ISignLayout> = ({ children, router }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            {router.pathname.endsWith('mainHome') ||
            router.pathname.endsWith('mainFriends') ||
            router.pathname.endsWith('mainAdd') ? (
                <div>
                    <StyledNineFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('mainHome') ? true : false}
                                    onClick={() => router.push('/main/mainHome')}
                                >
                                    <StyledH4>홈</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('mainFriends') ? true : false}
                                    onClick={() => router.push('/main/mainFriends')}
                                >
                                    <StyledH4>친구</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('mainAdd') ? true : false}
                                    onClick={() => router.push('/main/mainAdd')}
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
