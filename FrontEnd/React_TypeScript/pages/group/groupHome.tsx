import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledBorderDiv4,
    StyledBackgroundDiv4,
    StyledGrid1,
    StyledFlex1,
    StyledWidthLine1,
    StyledNineDiv2,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { goBack } from '../../api/common';
import { StyledH3, StyledH7, StyledH5 } from '../../api/styledFont';
import SpotCard from '../../component/group/spotCard';

const GroupHome = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹명</StyledH3>
                        </div>
                        <div>
                            <StyledH3>등록</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledBorderDiv1>
                        <StyledBackgroundDiv1>
                            <StyledText1 placeholder="검색"></StyledText1>
                        </StyledBackgroundDiv1>
                    </StyledBorderDiv1>

                    <StyledBorderDiv4>
                        <StyledBackgroundDiv4>
                            <StyledH7>#음식↑</StyledH7>
                            <StyledH7>#가격↓</StyledH7>
                        </StyledBackgroundDiv4>
                    </StyledBorderDiv4>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledGrid1>
                        <StyledFlex1>
                            <StyledWidthLine1 />
                        </StyledFlex1>
                        <StyledH5>2건</StyledH5>
                        <StyledFlex1>
                            <StyledWidthLine1 />
                        </StyledFlex1>
                    </StyledGrid1>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <SpotCard></SpotCard>
            </StyledNineDiv2>
        </>
    );
};

export default GroupHome;
