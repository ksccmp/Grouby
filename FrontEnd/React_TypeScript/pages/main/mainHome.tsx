import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv1,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledBorderDiv15,
    StyledBackgroundDiv15,
    StyledText1,
    StyledGrid1,
    StyledWidthLine1,
    StyledFlex1,
} from '../../api/styled';
import { StyledH4, StyledH5, StyledH6 } from '../../api/styledFont';
import { StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import GroupCard from '../../component/main/groupCard';
import { IUser, IGroup, IGroupMember } from '../../api/interface';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { goMainRegGroup, getTime } from '../../api/common';

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
    const [searchText, setSearchText] = React.useState<string>('');

    const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div>
                        <StyledFlex2>
                            <div>
                                <StyledH4>{reduxUser.userId}</StyledH4>
                                <StyledH6>({reduxUser.userName})</StyledH6>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="검색" onChange={onSearchText}></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <StyledGrid1>
                            <StyledFlex1>
                                <StyledWidthLine1 />
                            </StyledFlex1>
                            <StyledH5>{groups.length}건</StyledH5>
                            <StyledFlex1>
                                <StyledWidthLine1 />
                            </StyledFlex1>
                        </StyledGrid1>
                    </div>

                    <div>
                        {groups
                            .filter((group) => {
                                return group.groupName.includes(searchText) ||
                                    group.groupMembers.filter((groupMembers) => {
                                        return groupMembers.userId.includes(searchText);
                                    }).length > 0
                                    ? true
                                    : false;
                            })
                            .map((group, key) => {
                                return <GroupCard group={group} groupMembers={group.groupMembers} key={key} />;
                            })}

                        <StyledBorderDiv15 onClick={goMainRegGroup}>
                            <StyledBackgroundDiv15>
                                <StyledPlusCircleOutlined1 />
                            </StyledBackgroundDiv15>
                        </StyledBorderDiv15>
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default MainHome;
