import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledDiv8,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledFlex21,
} from '../../api/styled';
import { StyledCheckOutlined1, StyledLeftOutlined2 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import Friend from '../../component/main/friend';
import { IGroup, IGroupMember, IUser } from '../../api/interface';
import { goMainHome, goMainModFriends, getTime, color3 } from '../../api/common';
import { useDispatch, useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';
import {
    friendDelCreateGroupFriendsAction,
    friendInsCreateGroupFriendsAction,
    friendSetonCreateGroupNameAction,
} from '../../modules/actions';

const MainRegGroup = (): JSX.Element => {
    const dispatch = useDispatch();

    const reduxCreateGroupFriends: IUser[] = useSelector(
        (state: IIndexReducer) => state.FriendReducer.createGroupFriends,
    );
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const reduxGroupName: string = useSelector((state: IIndexReducer) => state.FriendReducer.createGroupName);

    const onInputGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(friendSetonCreateGroupNameAction(e.target.value));
    };

    const onDeleteFriend = (friendId: string) => {
        dispatch(friendDelCreateGroupFriendsAction(friendId));
    };

    const onInsertFriend = (friendId: string) => {
        dispatch(friendInsCreateGroupFriendsAction(friendId));
    };

    const onCreateGroup = async () => {
        const groupMembers: IGroupMember[] = [];
        reduxCreateGroupFriends.map((reduxFriend) => {
            const groupMember: IGroupMember = {
                groupId: 0,
                userId: reduxFriend.userId,
                regDate: '',
            };

            groupMembers.push(groupMember);
        });

        const groupMember: IGroupMember = {
            groupId: 0,
            userId: reduxUser.userId,
            regDate: '',
        };
        groupMembers.push(groupMember);

        const group: IGroup = {
            groupId: 0,
            groupName: reduxGroupName,
            regId: reduxUser.userId,
            regDate: '',
            modDate: '',
            groupMembers: groupMembers,
        };

        const res = await axios.post('/group/createGroup', group, {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            alert('그룹이 생성되었습니다.');
            goMainHome();
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goMainHome} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>아이템 생성</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 onClick={onCreateGroup} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>그룹 명</StyledH7>
                        </div>
                        <div>
                            <StyledFlex2>
                                <StyledBorderDiv18>
                                    <StyledBackgroundDiv18>
                                        <StyledText3
                                            placeholder="그룹 명"
                                            onChange={onInputGroupName}
                                            value={reduxGroupName}
                                        />
                                    </StyledBackgroundDiv18>
                                </StyledBorderDiv18>
                            </StyledFlex2>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <StyledFlex21>
                            <div>
                                <StyledH7 style={{ color: color3 }}>참여 멤버</StyledH7>
                            </div>
                            <div onClick={goMainModFriends}>
                                <StyledH7 style={{ opacity: 0.6 }}>편집</StyledH7>
                            </div>
                        </StyledFlex21>
                        <div>
                            {reduxCreateGroupFriends
                                .filter((friend) => friend.add !== false)
                                .map((friend, key) => (
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
        </>
    );
};

export default MainRegGroup;
