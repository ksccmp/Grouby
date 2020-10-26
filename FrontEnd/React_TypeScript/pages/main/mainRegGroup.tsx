import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
} from '../../api/styled';
import { StyledLeftOutLined1, StyledPlusCircleOutlined2 } from '../../api/styledAnt';
import { StyledH3, StyledH5 } from '../../api/styledFont';
import { goBack, goMainModFriends } from '../../api/common';
import Friend from '../../component/main/friend';

const MainRegGroup = (): JSX.Element => {
    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                        </div>
                        <div>
                            <StyledH3>그룹 생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>그룹 명</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="그룹 명"></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>참여 멤버</StyledH5>
                    <StyledPlusCircleOutlined2 onClick={goMainModFriends} />
                </StyledDiv1>
                <Friend external={'delete'}></Friend>
                <Friend external={'delete'}></Friend>
                <Friend external={'delete'}></Friend>
                <Friend external={'delete'}></Friend>
            </StyledNineDiv2>
        </>
    );
};

export default MainRegGroup;
