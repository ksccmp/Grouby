import * as React from 'react';
import {
    StyledNineDiv1,
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
import { IFriend } from '../../api/interface';
import { getTime } from '../../api/common';

const MainFriends = (): JSX.Element => {
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
    const [searchTextFriend, setSearchTextFriend] = React.useState<string>('');
    const [searchTextOthers, setSearchTextOthers] = React.useState<string>('');

    const onSearchTextFriend = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextFriend(e.target.value);
    };

    const onSearchTextOthers = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextOthers(e.target.value);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledTabUl1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li1" name="radio1" defaultChecked />
                            <StyledLabel5 htmlFor="li1">친구</StyledLabel5>
                            <StyledTabDiv1>
                                <div style={{ margin: '0.5rem 0' }}>
                                    <StyledBorderDiv1>
                                        <StyledBackgroundDiv1>
                                            <StyledText1 placeholder="검색" onChange={onSearchTextFriend}></StyledText1>
                                        </StyledBackgroundDiv1>
                                    </StyledBorderDiv1>
                                </div>
                                <div>
                                    {friends
                                        .filter(
                                            (friend) =>
                                                friend.friendId.includes(searchTextFriend) ||
                                                friend.friendName.includes(searchTextFriend),
                                        )
                                        .map((friend, key) => (
                                            <Friend friend={friend} external={'delete'} key={key} />
                                        ))}
                                </div>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li2" name="radio1" />
                            <StyledLabel5 htmlFor="li2">다른 사용자</StyledLabel5>
                            <StyledTabDiv1>
                                <div style={{ margin: '0.5rem 0' }}>
                                    <StyledBorderDiv1>
                                        <StyledBackgroundDiv1>
                                            <StyledText1 placeholder="검색" onChange={onSearchTextOthers}></StyledText1>
                                        </StyledBackgroundDiv1>
                                    </StyledBorderDiv1>
                                </div>

                                <div>
                                    {friends
                                        .filter(
                                            (friend) =>
                                                friend.friendId.includes(searchTextOthers) ||
                                                friend.friendName.includes(searchTextOthers),
                                        )
                                        .map((friend, key) => (
                                            <Friend friend={friend} external={'add'} key={key} />
                                        ))}
                                </div>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                    </StyledTabUl1>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default MainFriends;
