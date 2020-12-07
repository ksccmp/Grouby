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
import { color3 } from '../../api/common';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { useSelector } from 'react-redux';
import Others from '../../component/main/others';
import axios from '../../api/axios';

const MainFriends = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [friends, setFriends] = React.useState<IUser[]>([]);
    const [searchFriend, setSearchFriend] = React.useState<string>('');
    const [openSearchFriend, setOpenSearchFriend] = React.useState<boolean>(false);
    const [openOthers, setOpenOthers] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!openOthers) {
            // 친구추가 창이 닫힐때 마다 불러오기
            selectOthers();
        }
    }, [openOthers]);

    const selectOthers = async () => {
        const res = await axios.get('/user/selectFriendsByUserId', {
            params: {
                userId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        const tempFriends: IUser[] = res.data.data;
        tempFriends.map((friend) => {
            friend.add = true;
        });

        setFriends(tempFriends);
    };

    const onSearchFriend = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFriend(e.target.value);
    };

    const onOpenSearchFriend = () => {
        setOpenSearchFriend(!openSearchFriend);
    };

    // 친구 추가
    const onInsertFriend = async (friendId: string) => {
        const friend: IFriend = {
            userId: reduxUser.userId,
            friendId: friendId,
        };

        const res = await axios.post('/friend/insert', friend, {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            const newFriends: IUser[] = [];

            friends.map((friend) => {
                if (friend.userId === friendId) {
                    friend.add = true;
                }
                newFriends.push(friend);
            });

            setFriends(newFriends);
        } else {
            alert('요청 중 문제가 발생했습니다.');
        }
    };

    // 친구 삭제
    const onDeleteFriend = async (friendId: string) => {
        const res = await axios.delete('/friend/delete', {
            data: {
                userId: reduxUser.userId,
                friendId: friendId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            const newFriends: IUser[] = [];

            friends.map((friend) => {
                if (friend.userId === friendId) {
                    friend.add = false;
                }
                newFriends.push(friend);
            });

            setFriends(newFriends);
        } else {
            alert('요청 중 문제가 발생했습니다.');
        }
    };

    const onOpenOthers = () => {
        setOpenOthers(!openOthers);
    };

    const getFilterFriends = (): IUser[] => {
        return friends.filter(
            (friend) => friend.userId.includes(searchFriend) || (friend.userName as string).includes(searchFriend),
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
                                <Friend
                                    friend={friend}
                                    onInsertFriend={onInsertFriend}
                                    onDeleteFriend={onDeleteFriend}
                                    key={key}
                                />
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
