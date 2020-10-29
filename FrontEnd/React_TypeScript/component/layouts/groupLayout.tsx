import { Router } from 'next/router';
import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import { goGroupHome } from '../../api/common';

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
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('groupHome') ? true : false}
                                    onClick={goGroupHome}
                                >
                                    <StyledH4>홈</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('groupTalk') ? true : false}
                                    onClick={() => router.push('/group/groupTalk')}
                                >
                                    <StyledH4>채팅</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('groupAdd') ? true : false}
                                    onClick={() => router.push('/group/groupAdd')}
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

export default GroupLayout;
