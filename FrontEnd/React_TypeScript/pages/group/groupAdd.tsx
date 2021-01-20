import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledFlex16,
    StyledCheckBox1,
    StyledToggleDiv1,
    StyledToggleDiv2,
    StyledFlex17,
    StyledText2,
    StyledDiv8,
    StyledFlex18,
    StyledDiv10,
} from '../../api/styled';
import { StyledH4_1, StyledH5, StyledH6 } from '../../api/styledFont';
import { StyledEditOutlined1, StyledRightOutlined1, StyledCheckOutlined1 } from '../../api/styledAnt';
import { color2, goMainHome } from '../../api/common';
import { useDispatch, useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { IGroup, IUser } from '../../api/interface';
import { groupSetGroupAction } from '../../modules/actions';
import axios from '../../api/axios';

const GroupAdd = (): JSX.Element => {
    const dispatch = useDispatch();

    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const [groupName, setGroupName] = React.useState<string>('');
    const [modGroupName, setModGroupName] = React.useState<boolean>(false);
    const [memberCount, setMemberCount] = React.useState<number>(0);

    React.useEffect(() => {
        setGroupName(reduxGroup.groupName);
        getMemberCount();
    }, []);

    const getMemberCount = async () => {
        const res = await axios.get('/group/selectMemberCount', {
            params: {
                groupId: reduxGroup.groupId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            setMemberCount(res.data.data);
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    const onGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(e.target.value);
    };

    const onModGroupName = async () => {
        setModGroupName(!modGroupName);

        if (modGroupName) {
            const newReduxGroup: IGroup = {
                groupId: reduxGroup.groupId,
                groupName: groupName,
                regId: reduxGroup.regId,
                regDate: reduxGroup.regDate,
                modDate: reduxGroup.modDate,
            };

            dispatch(groupSetGroupAction(newReduxGroup));

            const res = await axios.put('/group/updateGroupName', newReduxGroup, {
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (!res.data.success) {
                alert('처리 중 에러가 발생했습니다.');
            }
        }
    };

    const onDeleteMember = async () => {
        const res = confirm(`${reduxGroup.groupName} 그룹을 탈퇴하시겠습니까?`);
        if (res) {
            const res = await axios.delete('/group/deleteMember', {
                params: {
                    groupId: reduxGroup.groupId,
                    userId: reduxUser.userId,
                },
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (res.data.success) {
                goMainHome();
            } else {
                alert('처리 중 오류가 발생했습니다.');
            }
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                {modGroupName ? (
                                    <StyledText2 value={groupName} onChange={onGroupName} />
                                ) : (
                                    <StyledH4_1>{groupName}</StyledH4_1>
                                )}
                            </StyledDiv8>
                            <StyledFlex13>
                                {modGroupName ? (
                                    <StyledCheckOutlined1 onClick={onModGroupName} />
                                ) : (
                                    <StyledEditOutlined1 onClick={onModGroupName} />
                                )}
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

                <StyledDiv5>
                    <StyledDiv6>
                        <StyledFlex18>
                            <div>
                                <StyledH5>알림</StyledH5>
                            </div>
                            <div>
                                <StyledCheckBox1 id="toggle1" />
                                <label htmlFor="toggle1">
                                    <StyledToggleDiv1>
                                        <StyledToggleDiv2 />
                                    </StyledToggleDiv1>
                                </label>
                            </div>
                        </StyledFlex18>
                        <StyledFlex18>
                            <div>
                                <StyledH5>인원제한</StyledH5>
                            </div>
                            <div>
                                <StyledCheckBox1 id="toggle2" />
                                <label htmlFor="toggle2">
                                    <StyledToggleDiv1>
                                        <StyledToggleDiv2 />
                                    </StyledToggleDiv1>
                                </label>
                            </div>
                        </StyledFlex18>
                        <StyledFlex16>
                            <StyledFlex17>
                                <StyledH5 style={{ marginRight: '5px' }}>멤버</StyledH5>
                                <StyledH6 style={{ color: color2 }}>{memberCount}</StyledH6>
                            </StyledFlex17>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex16>
                        <StyledFlex16 onClick={onDeleteMember}>
                            <div>
                                <StyledH5>그룹탈퇴</StyledH5>
                            </div>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex16>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default GroupAdd;
