import * as React from 'react';
import { StyledNineDiv1, StyledDiv1, StyledFlex2 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import Rank from '../../component/spot/rank';

const SpotRanks = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledH4>스팟 명</StyledH4>
                        </div>
                    </StyledFlex2>

                    <Rank />
                    <Rank />
                    <Rank />
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default SpotRanks;
