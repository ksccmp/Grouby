import { Router } from 'next/router';
import * as React from 'react';
import { StyledFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1, StyledFlex9 } from '../../api/styled';
import { StyledH7 } from '../../api/styledFont';
import {
    StyledHomeOutlined1,
    StyledAppstoreOutlined1,
    StyledCommentOutlined1,
    StyledMenuOutlined1,
} from '../../api/styledAnt';
import { goMainHome, goGroupHome, goGroupTalk, goGroupAdd } from '../../api/common';

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
                    <StyledFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1 onClick={goMainHome}>
                                    <StyledFlex9>
                                        <StyledHomeOutlined1 choice={'false'} />
                                        <StyledH7>홈</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goGroupHome}>
                                    <StyledFlex9>
                                        <StyledAppstoreOutlined1
                                            choice={String(router.pathname.endsWith('groupHome'))}
                                        />
                                        <StyledH7>그룹</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goGroupTalk}>
                                    <StyledFlex9>
                                        <StyledCommentOutlined1
                                            choice={String(router.pathname.endsWith('groupTalk'))}
                                        />
                                        <StyledH7>채팅</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goGroupAdd}>
                                    <StyledFlex9>
                                        <StyledMenuOutlined1 choice={String(router.pathname.endsWith('groupAdd'))} />
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

export default GroupLayout;
