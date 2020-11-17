import { Router } from 'next/router';
import * as React from 'react';
import { StyledFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1, StyledFlex9 } from '../../api/styled';
import { StyledH7 } from '../../api/styledFont';
import { goSpotItems, goSpotRanks, goSpotAdd, goMainHome, goGroupHome } from '../../api/common';
import {
    StyledHomeOutlined1,
    StyledAppstoreOutlined1,
    StyledMenuOutlined1,
    StyledFormOutlined1,
    StyledFileDoneOutlined1,
} from '../../api/styledAnt';

interface ISpotLayout {
    children: React.ReactNode;
    router: Router;
}

const SpotLayout: React.FC<ISpotLayout> = ({ children, router }): JSX.Element => {
    return (
        <>
            <div style={{ paddingBottom: '30px' }}>{children}</div>
            {router.pathname.endsWith('spotItems') ||
            router.pathname.endsWith('spotRanks') ||
            router.pathname.endsWith('spotAdd') ? (
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
                                        <StyledAppstoreOutlined1 choice={'false'} />
                                        <StyledH7>그룹</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goSpotItems}>
                                    <StyledFlex9>
                                        <StyledFormOutlined1 choice={String(router.pathname.endsWith('spotItems'))} />
                                        <StyledH7>아이템</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goSpotRanks}>
                                    <StyledFlex9>
                                        <StyledFileDoneOutlined1
                                            choice={String(router.pathname.endsWith('spotRanks'))}
                                        />
                                        <StyledH7>평가</StyledH7>
                                    </StyledFlex9>
                                </StyledNavLi1>
                                <StyledNavLi1 onClick={goSpotAdd}>
                                    <StyledFlex9>
                                        <StyledMenuOutlined1 choice={String(router.pathname.endsWith('spotAdd'))} />
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

export default SpotLayout;
