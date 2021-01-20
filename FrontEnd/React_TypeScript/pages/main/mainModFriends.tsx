import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledDiv8,
    StyledFlex13,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledDiv10,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledSearchOutlined1 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import { IUser } from '../../api/interface';
import { goMainRegGroup, color3 } from '../../api/common';
import { useDispatch, useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import Friend from '../../component/main/friend';
import {
    friendDelCreateGroupFriendsAction,
    friendInsCreateGroupFriendsAction,
    friendSetCreateGroupFriendsAction,
} from '../../modules/actions';
import axios from '../../api/axios';

const MainModFriends = (): JSX.Element => {
    const dispatch = useDispatch();

    const reduxCreateGroupFriends: IUser[] = useSelector(
        (state: IIndexReducer) => state.FriendReducer.createGroupFriends,
    );
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [searchMember, setSearchMember] = React.useState<string>('');
    const [openSearchMember, setOpenSearchMember] = React.useState<boolean>(false);
    const [friends, setFriends] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        getMembers();
    }, []);

    const getMembers = async () => {
        if (reduxCreateGroupFriends.length === 0) {
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
                friend.add = false;
            });

            setFriends(tempFriends);
            dispatch(friendSetCreateGroupFriendsAction(tempFriends));
        } else {
            reduxCreateGroupFriends.map((reduxFriend) => {
                if (reduxFriend.add === false) {
                    setFriends((prev) => [...prev, reduxFriend]);
                }
            });
        }
    };

    const onSearchMember = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMember(e.target.value);
    };

    const onOpenSearchMember = () => {
        setOpenSearchMember(!openSearchMember);
    };

    const onDeleteFriend = (friendId: string) => {
        const newFriends: IUser[] = friends.slice();
        newFriends.map((newFriend) => {
            if (newFriend.userId === friendId) {
                newFriend.add === false;
            }
        });

        setFriends(newFriends);
        dispatch(friendDelCreateGroupFriendsAction(friendId));
    };

    const onInsertFriend = (friendId: string) => {
        const newFriends: IUser[] = friends.slice();
        newFriends.map((newFriend) => {
            if (newFriend.userId === friendId) {
                newFriend.add === true;
            }
        });

        setFriends(newFriends);
        dispatch(friendInsCreateGroupFriendsAction(friendId));
    };

    const getFilterFriends = () => {
        return friends.filter(
            (friend) => friend.userId.includes(searchMember) || (friend.userName as string).includes(searchMember),
        );
    };

    const changeGoMainRegGroup = () => {
        goMainRegGroup();
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={changeGoMainRegGroup} />
                            </StyledFlex13>
                            <StyledDiv8>
                                {openSearchMember ? (
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="멤버 검색" onChange={onSearchMember} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                ) : (
                                    <StyledH4>멤버 편집</StyledH4>
                                )}
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchMember} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

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

            {/* <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goMainRegGroup} />
                                <StyledH4>멤버추가</StyledH4>
                            </div>
                            <div>
                                <StyledH4>확인</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="검색" onChange={onSearchText}></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </div>

                    <div>
                        <StyledH5>내 친구</StyledH5>
                        {friends
                            .filter(
                                (friend) =>
                                    friend.friendId.includes(searchText) || friend.friendName.includes(searchText),
                            )
                            .map((friend, key) => (
                                <Friend friend={friend} external={'add'} key={key} />
                            ))}
                    </div>
                </StyledDiv1>
            </StyledNineDiv1> */}
        </>
    );
};

export default MainModFriends;
