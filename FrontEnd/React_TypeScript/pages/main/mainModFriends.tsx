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
import { IFriend } from '../../api/interface';
import { getTime, goBack } from '../../api/common';

const MainModFriends = (): JSX.Element => {
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
    const [searchText, setSearchTest] = React.useState<string>('');

    const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTest(e.target.value);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
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
                            <StyledText1 placeholder="검색" onChange={onSearchText}></StyledText1>
                        </StyledBackgroundDiv1>
                    </StyledBorderDiv1>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>내 친구</StyledH5>
                </StyledDiv1>
                {friends
                    .filter((friend) => friend.friendId.includes(searchText) || friend.friendName.includes(searchText))
                    .map((friend, key) => (
                        <Friend friend={friend} external={'add'} key={key} />
                    ))}
            </StyledNineDiv2>
        </>
    );
};

export default MainModFriends;
