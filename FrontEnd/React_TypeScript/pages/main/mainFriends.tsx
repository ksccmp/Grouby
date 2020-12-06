import * as React from 'react';
import {
    StyledDiv1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex2,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledFlex13,
} from '../../api/styled';
import { StyledSearchOutlined1, StyledUsergroupAddOutlined1 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import Friend from '../../component/main/friend';
import { IFriend, IUser } from '../../api/interface';
import { getTime, color3 } from '../../api/common';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { useSelector } from 'react-redux';
import Others from '../../component/main/others';

const MainFriends = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

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
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
            regDate: getTime(),
        },
        {
            userId: 'ksccmp',
            friendId: 'CDE',
            friendName: '씨디이',
            friendPhone: '010-3333-4444',
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
    const [searchFriend, setSearchFriend] = React.useState<string>('');
    const [openSearchFriend, setOpenSearchFriend] = React.useState<boolean>(false);
    const [openOthers, setOpenOthers] = React.useState<boolean>(false);

    const onSearchFriend = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFriend(e.target.value);
    };

    const onOpenSearchFriend = () => {
        setOpenSearchFriend(!openSearchFriend);
    };

    const onDeleteFriend = (index: number) => {
        const newFriends = friends.slice();
        newFriends.splice(index, 1);
        setFriends(newFriends);
    };

    const onOpenOthers = () => {
        setOpenOthers(!openOthers);
    };

    const getFilterFriends = (): IFriend[] => {
        return friends.filter(
            (friend) => friend.friendId.includes(searchFriend) || friend.friendName.includes(searchFriend),
        );
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <div style={{ width: '100%', marginRight: '10px' }}>
                                {openSearchFriend ? (
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="친구 검색" onChange={onSearchFriend} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                ) : (
                                    <StyledH4>{reduxUser.userId}</StyledH4>
                                )}
                            </div>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchFriend} />
                                <StyledUsergroupAddOutlined1 onClick={onOpenOthers} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            {getFilterFriends().length > 0 && (
                                <StyledH7 style={{ color: color3 }}>친구 {getFilterFriends().length}</StyledH7>
                            )}
                        </div>

                        <div>
                            {getFilterFriends().map((friend, key) => (
                                <Friend friend={friend} index={key} onDeleteFriend={onDeleteFriend} key={key} />
                            ))}
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>

            <Others openOthers={openOthers} onOpenOthers={onOpenOthers} />
        </>
    );
};

export default MainFriends;
