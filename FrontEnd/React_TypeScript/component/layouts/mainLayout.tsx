import { Router } from 'next/router';
import * as React from 'react';
import { StyledFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1, StyledFlex9 } from '../../api/styled';
import { StyledH7 } from '../../api/styledFont';
import { StyledHomeOutlined1, StyeldTeamOutlined1, StyledMenuOutlined1 } from '../../api/styledAnt';

interface ISignLayout {
    children: React.ReactNode;
    router: Router;
}

const SignLayout: React.FC<ISignLayout> = ({ children, router }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '40px' }}>{children}</div>
            {router.pathname.endsWith('mainHome') ||
            router.pathname.endsWith('mainFriends') ||
            router.pathname.endsWith('mainAdd') ? (
                <div>
                    <StyledFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1 onClick={() => router.push('/main/mainHome')}>
                                    <StyledFlex9>
                                        <StyledHomeOutlined1 choice={String(router.pathname.endsWith('mainHome'))} />
                                        <StyledH7>홈</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={() => router.push('/main/mainFriends')}>
                                    <StyledFlex9>
                                        <StyeldTeamOutlined1 choice={String(router.pathname.endsWith('mainFriends'))} />
                                        <StyledH7>친구</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={() => router.push('/main/mainAdd')}>
                                    <StyledFlex9>
                                        <StyledMenuOutlined1 choice={String(router.pathname.endsWith('mainAdd'))} />
                                        <StyledH7>더보기</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                            </StyledNavUl1>
                        </StyledDiv1>
                    </StyledFixedFooter1>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default SignLayout;
