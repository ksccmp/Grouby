import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledGrid1,
    StyledFlex1,
    StyledWidthLine1,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5 } from '../../api/styledFont';
import { goBack, goSpotRegItem } from '../../api/common';
import Item from '../../component/spot/item';

const SpotItems = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명/스팟 명</StyledH3>
                        </div>
                        <div onClick={goSpotRegItem}>
                            <StyledH3>등록</StyledH3>
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
                        <StyledH5>1건</StyledH5>
                        <StyledFlex1>
                            <StyledWidthLine1 />
                        </StyledFlex1>
                    </StyledGrid1>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <Item />
                    <Item />
                    <Item />
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default SpotItems;
