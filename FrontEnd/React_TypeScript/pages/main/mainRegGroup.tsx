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
import { IFriend } from '../../api/interface';
import { goMainHome, goMainModFriends, getTime, color3 } from '../../api/common';

const MainRegGroup = (): JSX.Element => {
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
    const [searchGroupName, setSearchGroupName] = React.useState<string>('');

    const onSearchGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchGroupName(e.target.value);
    };

    const onDeleteFriend = (index: number) => {
        const newFriends = friends.slice();
        newFriends.splice(index, 1);
        setFriends(newFriends);
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
                                <StyledCheckOutlined1 />
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
                                        <StyledText3 placeholder="그룹 명" onChange={onSearchGroupName} />
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
                            {friends.map((friend, key) => (
                                <Friend friend={friend} index={key} onDeleteFriend={onDeleteFriend} key={key} />
                            ))}
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default MainRegGroup;
