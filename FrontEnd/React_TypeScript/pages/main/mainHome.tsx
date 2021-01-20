import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledText3,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledDiv8,
    StyledDiv10,
} from '../../api/styled';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import { StyledPlusCircleOutlined4, StyledSearchOutlined1 } from '../../api/styledAnt';
import GroupCard from '../../component/main/groupCard';
import { IUser, IGroup, IGroupMember } from '../../api/interface';
import { useDispatch, useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { goMainRegGroup, getTime, color3 } from '../../api/common';
import axios from '../../api/axios';
import { friendResetCreateGroupFriendsAction } from '../../modules/actions';

const MainHome = (): JSX.Element => {
    const dispatch = useDispatch();

    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [groups, setGroups] = React.useState<IGroup[]>([]);
    const [searchGroup, setSearchGroup] = React.useState<string>('');
    const [openSearchGroup, setOpenSearchGroup] = React.useState<boolean>(false);

    React.useEffect(() => {
        selectGroups();
    }, []);

    // 서버로부터 그룹 가져오기
    const selectGroups = async () => {
        const res = await axios.get('/group/selectGroups', {
            params: {
                userId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        setGroups(res.data.data);
    };

    // 검색내용 저장
    const onSearchGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchGroup(e.target.value);
    };

    // 검색 창 오픈
    const onOpenSearchGroup = () => {
        setOpenSearchGroup(!openSearchGroup);
    };

    // 필터 된 그룹
    const getFilterGroups = (): IGroup[] => {
        return groups.filter((group) => {
            return group.groupName.includes(searchGroup) ||
                (group.groupMembers as IGroupMember[]).filter((groupMembers) => {
                    return groupMembers.userId.includes(searchGroup);
                }).length > 0
                ? true
                : false;
        });
    };

    const onPlusCircle = () => {
        dispatch(friendResetCreateGroupFriendsAction()); // redux 비우기
        goMainRegGroup();
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                {openSearchGroup ? (
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="그룹 검색" onChange={onSearchGroup} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                ) : (
                                    <StyledH4>{reduxUser.userId}</StyledH4>
                                )}
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchGroup} />
                                <StyledPlusCircleOutlined4 onClick={onPlusCircle} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            {getFilterGroups().length > 0 && (
                                <StyledH7 style={{ color: color3 }}>그룹 {getFilterGroups().length}</StyledH7>
                            )}
                        </div>

                        <div>
                            {getFilterGroups().map((group, key) => {
                                return (
                                    <GroupCard
                                        group={group}
                                        groupMembers={group.groupMembers as IGroupMember[]}
                                        key={key}
                                    />
                                );
                            })}
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default MainHome;
