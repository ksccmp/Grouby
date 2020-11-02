import * as React from 'react';
import { StyledFlex8, StyledFlex2, StyledBorderDiv9, StyledBackgroundDiv9 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';

const Rank = (): JSX.Element => {
    return (
        <>
            <StyledBorderDiv9>
                <StyledBackgroundDiv9>
                    <StyledFlex8>
                        <StyledH5>등록자</StyledH5>
                        <StyledH5>시간</StyledH5>
                    </StyledFlex8>

                    <div style={{ backgroundColor: 'blue', opacity: '0.5', color: 'white' }}>
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
                </StyledBackgroundDiv9>
            </StyledBorderDiv9>
        </>
    );
};

export default Rank;
