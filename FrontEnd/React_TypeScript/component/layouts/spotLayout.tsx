import { Router } from 'next/router';
import * as React from 'react';
import { StyledNineFixedFooter1, StyledDiv1, StyledNavUl1, StyledNavLi1 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import { goSpotItems, goSpotRanks, goSpotAdd } from '../../api/common';

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
                    <StyledNineFixedFooter1>
                        <StyledDiv1>
                            <StyledNavUl1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('spotItems') ? true : false}
                                    onClick={goSpotItems}
                                >
                                    <StyledH4>아이템</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('spotRanks') ? true : false}
                                    onClick={goSpotRanks}
                                >
                                    <StyledH4>평가</StyledH4>
                                </StyledNavLi1>
                                <StyledNavLi1
                                    checked={router.pathname.endsWith('spotAdd') ? true : false}
                                    onClick={goSpotAdd}
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

export default SpotLayout;
