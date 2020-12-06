import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledDiv5,
    StyledDiv6,
    StyledDiv8,
    StyledFlex13,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
} from '../../api/styled';
import {
    StyledLeftOutLined1,
    StyledLeftOutlined2,
    StyledCheckOutlined1,
    StyledSearchOutlined1,
} from '../../api/styledAnt';
import { StyledH4, StyledH5, StyledH7 } from '../../api/styledFont';
import Other from '../../component/main/other';
import { IFriend } from '../../api/interface';
import { getTime, goMainRegGroup, color3 } from '../../api/common';

const MainModFriends = (): JSX.Element => {
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
    const [searchMember, setSearchMember] = React.useState<string>('');
    const [openSearchMember, setOpenSearchMember] = React.useState<boolean>(false);

    const onSearchMember = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMember(e.target.value);
    };

    const onOpenSearchMember = () => {
        setOpenSearchMember(!openSearchMember);
    };

    const onInsertFriend = () => {
        console.log('onInsertFriend');
    };

    const getFilterFriends = () => {
        return friends.filter(
            (friend) => friend.friendId.includes(searchMember) || friend.friendName.includes(searchMember),
        );
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goMainRegGroup} />
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
                                <StyledCheckOutlined1 />
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
                                <Other other={friend} index={key} onInsertFriend={onInsertFriend} key={key} />
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
