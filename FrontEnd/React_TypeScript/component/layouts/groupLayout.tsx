import { Router } from 'next/router';
import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1, StyledFlex9 } from '../../api/styled';
import { StyledH7 } from '../../api/styledFont';
import { goGroupHome } from '../../api/common';
import { StyledHomeOutlined1 } from '../../api/styledAnt';

interface IGroupLayout {
    children: React.ReactNode;
    router: Router;
}

const GroupLayout: React.FC<IGroupLayout> = ({ children, router }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            {router.pathname.endsWith('groupHome') ||
            router.pathname.endsWith('groupTalk') ||
            router.pathname.endsWith('groupAdd') ? (
                <div>
                    <StyledNineFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1 onClick={goGroupHome}>
                                    <StyledFlex9>
                                        <StyledHomeOutlined1 choice={String(router.pathname.endsWith('groupHome'))} />
                                        <StyledH7>홈</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={() => router.push('/group/groupTalk')}>
                                    <StyledFlex9>
                                        <StyledHomeOutlined1 choice={String(router.pathname.endsWith('groupTalk'))} />
                                        <StyledH7>채팅</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={() => router.push('/group/groupAdd')}>
                                    <StyledFlex9>
                                        <StyledHomeOutlined1 choice={String(router.pathname.endsWith('groupAdd'))} />
                                        <StyledH7>더보기</StyledH7>
                                    </StyledFlex9>
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

export default GroupLayout;
