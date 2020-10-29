import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledNineDiv2,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5 } from '../../api/styledFont';
import Friend from '../../component/main/friend';
import Router from 'next/router';

const MainModFriends = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={() => Router.back()} />
                        </div>
                        <div>
                            <StyledH3>확인</StyledH3>
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
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>내 친구</StyledH5>
                </StyledDiv1>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
            </StyledNineDiv2>
        </>
    );
};

export default MainModFriends;
