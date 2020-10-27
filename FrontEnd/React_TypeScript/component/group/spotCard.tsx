import * as React from 'react';
import { StyledDiv1, StyledFlex6, StyledFlex2, StyledBorderDiv5, StyledBackgroundDiv5 } from '../../api/styled';
import { StyledH5, StyledH6, StyledH4 } from '../../api/styledFont';

const SpotCard = (): JSX.Element => {
    return (
        <StyledDiv1>
            <StyledFlex6 extend={false}>
                <div>
                    <StyledH5>사당 요란한부엌</StyledH5>
                </div>
                <div>
                    <StyledH6>#식당 </StyledH6>
                    <StyledH6>#광어회 </StyledH6>
                    <StyledH6>#연어회 </StyledH6>
                </div>
            </StyledFlex6>
            <div style={{ backgroundColor: 'blue', opacity: '0.5', color: 'white' }}>
                <StyledFlex2>
                    <StyledH6>평가</StyledH6>
                    <StyledH6>(+2) 20</StyledH6>
                </StyledFlex2>
                <StyledFlex2>
                    <StyledH6>음식</StyledH6>
                    <StyledH6>4 / 5</StyledH6>
                </StyledFlex2>
                <StyledFlex2>
                    <StyledH6>친절</StyledH6>
                    <StyledH6>4 / 5</StyledH6>
                </StyledFlex2>
                <StyledFlex2>
                    <StyledH6>화장실</StyledH6>
                    <StyledH6>4 / 5</StyledH6>
                </StyledFlex2>
            </div>

            <StyledBorderDiv5>
                <StyledBackgroundDiv5>
                    <StyledH4>평 가</StyledH4>
                </StyledBackgroundDiv5>
            </StyledBorderDiv5>
        </StyledDiv1>
    );
};

export default SpotCard;
