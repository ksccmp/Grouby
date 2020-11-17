import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledFlex5,
    StyledBorderDiv3,
    StyledBackgroundDiv3,
    StyledExternalDiv1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledFlex9,
    StyledBorderDiv16,
    StyledBackgroundDiv16,
    StyledExternalDiv4,
} from '../../api/styled';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { StyledRightOutlined1 } from '../../api/styledAnt';

const GroupAdd = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledH4>그룹 명</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledFlex5>
                            <StyledFlex9>
                                <StyledH4>멤버</StyledH4>
                                <StyledH5 style={{ color: '#E6951A' }}>5</StyledH5>
                            </StyledFlex9>
                        </StyledFlex5>
                    </div>

                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>생성자</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledH4>생성자</StyledH4>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>생성일자</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledH4>생성일자</StyledH4>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>
                    </div>

                    <div>
                        <StyledBorderDiv16>
                            <StyledBackgroundDiv16>
                                <StyledH4>그룹수정</StyledH4>
                                <StyledExternalDiv4>
                                    <StyledRightOutlined1 />
                                </StyledExternalDiv4>
                            </StyledBackgroundDiv16>
                        </StyledBorderDiv16>

                        <StyledBorderDiv16>
                            <StyledBackgroundDiv16>
                                <StyledH4>그룹삭제</StyledH4>
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

export default GroupAdd;
