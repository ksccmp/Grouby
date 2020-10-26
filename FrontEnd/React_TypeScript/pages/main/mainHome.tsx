import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv1,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledGrid1,
    StyledWidthLine1,
    StyledFlex1,
} from '../../api/styled';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import GroupCard from '../../component/main/groupCard';
import { goMainRegGroup } from '../../api/common';

const MainHome = (): JSX.Element => {
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
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="검색"></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

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
                <GroupCard></GroupCard>

                <StyledBorderDiv1 onClick={goMainRegGroup}>
                    <StyledBackgroundDiv1>
                        <StyledPlusCircleOutlined1 />
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default MainHome;
