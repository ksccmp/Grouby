import * as React from 'react';
import { StyledCardDiv1, StyledFlex3, StyledDiv2, StyledFlex4 } from '../../api/styled';
import { StyledH5, StyledH6, StyledBorderH6 } from '../../api/styledFont';

const GroupCard = (): JSX.Element => {
    return (
        <StyledCardDiv1 extend={false}>
            <StyledDiv2>
                <StyledFlex3>
                    <StyledH5>수찬 커플</StyledH5>
                    <StyledH6>99+</StyledH6>
                </StyledFlex3>
                <StyledFlex4 extend={false}>
                    <StyledBorderH6>intan</StyledBorderH6>
                    <StyledBorderH6>ksccmp</StyledBorderH6>
                </StyledFlex4>
            </StyledDiv2>
        </StyledCardDiv1>
    );
};

export default GroupCard;
