import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv10,
    StyledBackgroundDiv10,
    StyledDiv3,
    StyledRadio1,
    StyledBorderDiv11,
    StyledBackgroundDiv11,
    StyledTextArea1,
    StyledExternalDiv2,
    StyledNineDiv2,
} from '../../api/styled';
import { StyledLeftOutLined1, StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5 } from '../../api/styledFont';
import { goBack } from '../../api/common';

const SpotRegItem = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명/스팟 명</StyledH3>
                        </div>
                        <div>
                            <StyledH3>생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <div>
                        <StyledH5>사진/동영상</StyledH5>
                        <StyledBorderDiv10>
                            <StyledBackgroundDiv10>
                                <StyledDiv3>
                                    <StyledRadio1 name="radio1" />
                                    <StyledRadio1 name="radio1" />
                                    <StyledRadio1 name="radio1" />
                                </StyledDiv3>
                            </StyledBackgroundDiv10>
                            <StyledExternalDiv2>
                                <StyledPlusCircleOutlined1 />
                            </StyledExternalDiv2>
                        </StyledBorderDiv10>
                    </div>
                    <div>
                        <StyledH5>내용</StyledH5>
                        <StyledBorderDiv11>
                            <StyledBackgroundDiv11>
                                <StyledTextArea1>Contents</StyledTextArea1>
                            </StyledBackgroundDiv11>
                        </StyledBorderDiv11>
                    </div>
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default SpotRegItem;
