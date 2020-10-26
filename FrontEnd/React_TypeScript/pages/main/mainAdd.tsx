import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledFlex5,
    StyledBorderDiv3,
    StyledBackgroundDiv3,
    StyledExternalDiv1,
    StyledButton2,
} from '../../api/styled';
import { StyledH4, StyledH5, StyledH6, StyledH4_1 } from '../../api/styledFont';
import { StyledRightOutlined1 } from '../../api/styledAnt';

const MainAdd = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledH4>ksccmp(김성찬)</StyledH4>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledFlex5>
                        <div>
                            <StyledH4>그룹</StyledH4> <br />
                            <StyledH5>2</StyledH5>
                        </div>
                        <div>
                            <StyledH4>아이템</StyledH4> <br />
                            <StyledH5>7</StyledH5>
                        </div>
                    </StyledFlex5>
                </StyledDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledBorderDiv3>
                        <StyledBackgroundDiv3>
                            <StyledH4_1>정보수정</StyledH4_1>
                            <StyledExternalDiv1>
                                <StyledRightOutlined1 />
                            </StyledExternalDiv1>
                        </StyledBackgroundDiv3>
                    </StyledBorderDiv3>

                    <StyledBorderDiv3>
                        <StyledBackgroundDiv3>
                            <StyledH4_1>로그아웃</StyledH4_1>
                            <StyledExternalDiv1>
                                <StyledRightOutlined1 />
                            </StyledExternalDiv1>
                        </StyledBackgroundDiv3>
                    </StyledBorderDiv3>

                    <StyledBorderDiv3>
                        <StyledBackgroundDiv3>
                            <StyledH4_1>계정삭제</StyledH4_1>
                            <StyledExternalDiv1>
                                <StyledRightOutlined1 />
                            </StyledExternalDiv1>
                        </StyledBackgroundDiv3>
                    </StyledBorderDiv3>
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default MainAdd;
