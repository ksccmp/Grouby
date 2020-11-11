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
import Friend from '../../component/main/friend';
import { IFriend } from '../../api/interface';
import { goMainHome, goMainModFriends, getTime } from '../../api/common';

const MainRegGroup = (): JSX.Element => {
    const [friends, setFriends] = React.useState<IFriend[]>([
        {
            userId: 'ksccmp',
            friendId: 'intan',
            friendName: '정수안',
            friendPhone: '010-1234-5678',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'ABC',
            friendName: '에이비씨',
            friendPhone: '010-1111-2222',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
    ]);

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goMainHome} />
                                <StyledH3>그룹생성</StyledH3>
                            </div>
                            <div>
                                <StyledH3>생성</StyledH3>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledH5>그룹 명</StyledH5>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="그룹 명"></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledH5>참여 멤버</StyledH5>
                        <StyledPlusCircleOutlined2 onClick={goMainModFriends} />
                        {friends.map((friend, key) => (
                            <Friend friend={friend} external={'delete'} key={key} />
                        ))}
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default MainRegGroup;
