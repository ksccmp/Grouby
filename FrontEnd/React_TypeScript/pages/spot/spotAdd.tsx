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
    StyledBorderDiv1,
    StyledBackgroundDiv1,
} from '../../api/styled';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { StyledRightOutlined1 } from '../../api/styledAnt';

const SpotAdd = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledH4>스팟 명</StyledH4>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledFlex5>
                        <div>
                            <StyledH4>아이템</StyledH4> <br />
                            <StyledH5>5</StyledH5>
                        </div>
                        <div>
                            <StyledH4>평가</StyledH4> <br />
                            <StyledH5>7</StyledH5>
                        </div>
                    </StyledFlex5>
                </StyledDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>생성자</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledH4>생성자</StyledH4>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>

                <StyledDiv1>
                    <StyledH5>생성일자</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledH4>생성일자</StyledH4>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledBorderDiv3>
                        <StyledBackgroundDiv3>
                            <StyledH4>스팟수정</StyledH4>
                            <StyledExternalDiv1>
                                <StyledRightOutlined1 />
                            </StyledExternalDiv1>
                        </StyledBackgroundDiv3>
                    </StyledBorderDiv3>

                    <StyledBorderDiv3>
                        <StyledBackgroundDiv3>
                            <StyledH4>스팟삭제</StyledH4>
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

export default SpotAdd;
