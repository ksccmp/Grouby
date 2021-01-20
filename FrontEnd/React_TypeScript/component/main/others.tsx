import * as React from 'react';
import {
    StyledFixed1,
    StyledDiv1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex2,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledFlex13,
    StyledDiv10,
} from '../../api/styled';
import { StyledLeftOutlined2 } from '../../api/styledAnt';
import { StyledH7 } from '../../api/styledFont';
import { IFriend, IUser } from '../../api/interface';
import { color3 } from '../../api/common';
import Friend from './friend';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';

interface IOther {
    openOthers: boolean;
    onOpenOthers: () => void;
}

const Others: React.FC<IOther> = ({ openOthers, onOpenOthers }): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [searchOther, setSearchOther] = React.useState<string>('');
    const [others, setOthers] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        if (openOthers) {
            // 친구추가 창을 열때마다 데이터 select
            selectOthers();
        }
    }, [openOthers]);

    // 다른 사용자 불러오기
    const selectOthers = async () => {
        const res = await axios.get('/user/selectOthersByUserId', {
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

        setOthers(tempFriends);
    };

    // 검색내용 저장
    const onSearchOther = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchOther(e.target.value);
    };

    // 친구 추가
    const onInsertFriend = async (otherId: string) => {
        const friend: IFriend = {
            userId: reduxUser.userId,
            friendId: otherId,
        };

        const res = await axios.post('/friend/insert', friend, {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            const newOthers: IUser[] = [];

            others.map((other) => {
                if (other.userId === otherId) {
                    other.add = true;
                }
                newOthers.push(other);
            });

            setOthers(newOthers);
        } else {
            alert('요청 중 문제가 발생했습니다.');
        }
    };

    // 친구 삭제
    const onDeleteFriend = async (otherId: string) => {
        const res = await axios.delete('/friend/delete', {
            data: {
                userId: reduxUser.userId,
                friendId: otherId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            const newOthers: IUser[] = [];

            others.map((other) => {
                if (other.userId === otherId) {
                    other.add = false;
                }
                newOthers.push(other);
            });

            setOthers(newOthers);
        } else {
            alert('요청 중 문제가 발생했습니다.');
        }
    };

    // 다른 사용자 검색어에 맞게 필터
    const getFilterOthers = () => {
        return others.filter(
            (other) => other.userId.includes(searchOther) || (other.userName as string).includes(searchOther),
        );
    };

    return (
        <>
            <StyledFixed1 open={openOthers}>
                <StyledDiv1>
                    <StyledDiv10>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={onOpenOthers} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="다른 사용자 검색" onChange={onSearchOther} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv10>

                    <StyledDiv5>
                        <StyledDiv6>
                            <div>
                                {getFilterOthers().length > 0 && (
                                    <StyledH7 style={{ color: color3 }}>다른 사용자</StyledH7>
                                )}
                            </div>

                            <div>
                                {getFilterOthers().map((other, key) => (
                                    <Friend
                                        friend={other}
                                        onInsertFriend={onInsertFriend}
                                        onDeleteFriend={onDeleteFriend}
                                        key={key}
                                    />
                                ))}
                            </div>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>
            </StyledFixed1>
        </>
    );
};

export default Others;
