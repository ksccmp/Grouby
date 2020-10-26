import * as React from 'react';
import { StyledDiv1, StyledFlex6 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';

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
        </StyledDiv1>
    );
};

export default SpotCard;
