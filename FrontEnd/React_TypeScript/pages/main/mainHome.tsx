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
} from '../../api/styled';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import { StyledPlusCircleOutlined4, StyledSearchOutlined1 } from '../../api/styledAnt';
import GroupCard from '../../component/main/groupCard';
import { IUser, IGroup, IGroupMember } from '../../api/interface';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { goMainRegGroup, getTime, color3 } from '../../api/common';

interface IChangeGroup extends IGroup {
    groupMembers: IGroupMember[];
}

const MainHome = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [groups, setGroups] = React.useState<IChangeGroup[]>([
        {
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            groupMembers: [
                {
                    groupId: 1,
                    userId: 'intan',
                    regDate: getTime(),
                },
                {
                    groupId: 1,
                    userId: 'ksccmp',
                    regDate: getTime(),
                },
            ],
        },
        {
            groupId: 2,
            groupName: '친구들',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            groupMembers: [
                {
                    groupId: 2,
                    userId: 'ABC',
                    regDate: getTime(),
                },
                {
                    groupId: 2,
                    userId: 'BCD',
                    regDate: getTime(),
                },
                {
                    groupId: 2,
                    userId: 'CDE',
                    regDate: getTime(),
                },
            ],
        },
    ]);
    const [searchGroup, setSearchGroup] = React.useState<string>('');
    const [openSearchGroup, setOpenSearchGroup] = React.useState<boolean>(false);

    const onSearchGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchGroup(e.target.value);
    };

    const onOpenSearchGroup = () => {
        setOpenSearchGroup(!openSearchGroup);
    };

    const getFilterGroups = (): IChangeGroup[] => {
        return groups.filter((group) => {
            return group.groupName.includes(searchGroup) ||
                group.groupMembers.filter((groupMembers) => {
                    return groupMembers.userId.includes(searchGroup);
                }).length > 0
                ? true
                : false;
        });
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <div style={{ width: '100%', marginRight: '10px' }}>
                                {openSearchGroup ? (
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="그룹 검색" onChange={onSearchGroup} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                ) : (
                                    <StyledH4>{reduxUser.userId}</StyledH4>
                                )}
                            </div>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchGroup} />
                                <StyledPlusCircleOutlined4 onClick={goMainRegGroup} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            {getFilterGroups().length > 0 && (
                                <StyledH7 style={{ color: color3 }}>그룹 {getFilterGroups().length}</StyledH7>
                            )}
                        </div>

                        <div>
                            {getFilterGroups().map((group, key) => {
                                return <GroupCard group={group} groupMembers={group.groupMembers} key={key} />;
                            })}
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default MainHome;
