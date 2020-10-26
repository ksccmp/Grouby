import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import Router from 'next/router';
import { goGroupHome, goGroupTalk, goGroupAdd } from '../../api/common';

interface IGroupLayout {
    children: React.ReactNode;
}

const GroupLayout: React.FC<IGroupLayout> = ({ children }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            {Router.pathname.endsWith('groupHome') ||
            Router.pathname.endsWith('groupTalk') ||
            Router.pathname.endsWith('groupAdd') ? (
                <div>
                    <StyledNineFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('groupHome') ? true : false}
                                    onClick={goGroupHome}
                                >
                                    <StyledH4>홈</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('groupTalk') ? true : false}
                                    onClick={goGroupTalk}
                                >
                                    <StyledH4>채팅</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={Router.pathname.endsWith('groupAdd') ? true : false}
                                    onClick={goGroupAdd}
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
