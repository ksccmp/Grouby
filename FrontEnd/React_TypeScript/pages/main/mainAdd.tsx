import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledFlex5,
    StyledBorderDiv16,
    StyledBackgroundDiv16,
    StyledExternalDiv4,
    StyledFlex9,
} from '../../api/styled';
import { StyledH4, StyledH5, StyledH6 } from '../../api/styledFont';
import { StyledRightOutlined1 } from '../../api/styledAnt';

const MainAdd = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledH4>ksccmp</StyledH4>
                                <StyledH6>(김성찬)</StyledH6>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledFlex5>
                            <StyledFlex9>
                                <StyledH4>그룹</StyledH4>
                                <StyledH5 style={{ color: '#E6951A' }}>2</StyledH5>
                            </StyledFlex9>
                            <StyledFlex9>
                                <StyledH4>아이템</StyledH4>
                                <StyledH5 style={{ color: '#E6951A' }}>7</StyledH5>
                            </StyledFlex9>
                        </StyledFlex5>
                    </div>

                    <div>
                        <StyledBorderDiv16>
                            <StyledBackgroundDiv16>
                                <StyledH4>정보수정</StyledH4>
                                <StyledExternalDiv4>
                                    <StyledRightOutlined1 />
                                </StyledExternalDiv4>
                            </StyledBackgroundDiv16>
                        </StyledBorderDiv16>

                        <StyledBorderDiv16>
                            <StyledBackgroundDiv16>
                                <StyledH4>로그아웃</StyledH4>
                                <StyledExternalDiv4>
                                    <StyledRightOutlined1 />
                                </StyledExternalDiv4>
                            </StyledBackgroundDiv16>
                        </StyledBorderDiv16>

                        <StyledBorderDiv16>
                            <StyledBackgroundDiv16>
                                <StyledH4>계정삭제</StyledH4>
                                <StyledExternalDiv4>
                                    <StyledRightOutlined1 />
                                </StyledExternalDiv4>
                            </StyledBackgroundDiv16>
                        </StyledBorderDiv16>
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default MainAdd;
