import * as React from 'react';
import {
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledTabUl1,
    StyledTabLi1,
    StyledTabRadio1,
    StyledTabDiv1,
    StyledDiv1,
} from '../../api/styled';
import { StyledLabel5 } from '../../api/styledFont';
import Friend from '../../component/main/friend';

const MainFriends = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledTabUl1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li1" name="radio1" defaultChecked />
                            <StyledLabel5 htmlFor="li1">친구</StyledLabel5>
                            <StyledTabDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledText1 placeholder="검색"></StyledText1>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                                <Friend external={'delete'}></Friend>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li2" name="radio1" />
                            <StyledLabel5 htmlFor="li2">다른 사용자</StyledLabel5>
                            <StyledTabDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledText1 placeholder="검색"></StyledText1>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                                <Friend external={'add'}></Friend>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                    </StyledTabUl1>
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default MainFriends;
