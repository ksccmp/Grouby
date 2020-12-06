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
} from '../../api/styled';
import { StyledSearchOutlined1, StyledLeftOutlined2 } from '../../api/styledAnt';
import { StyledH7 } from '../../api/styledFont';
import { IFriend } from '../../api/interface';
import { getTime, color3 } from '../../api/common';
import Other from './other';

interface IOther {
    openOthers: boolean;
    onOpenOthers: () => void;
}

const Others: React.FC<IOther> = ({ openOthers, onOpenOthers }): JSX.Element => {
    const [searchOther, setSearchOther] = React.useState<string>('');

    const [others, setOthers] = React.useState<IFriend[]>([
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

    const onSearchOther = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchOther(e.target.value);
    };

    const onInsertFriend = () => {
        console.log('onInsertFriend');
    };

    const getFilterOthers = () => {
        return others.filter((other) => other.friendId.includes(searchOther) || other.friendName.includes(searchOther));
    };

    return (
        <>
            <StyledFixed1 open={openOthers}>
                <StyledDiv1>
                    <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
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
                    </StyledDiv5>

                    <StyledDiv5>
                        <StyledDiv6>
                            <div>
                                {getFilterOthers().length > 0 && (
                                    <StyledH7 style={{ color: color3 }}>다른 사용자</StyledH7>
                                )}
                            </div>

                            <div>
                                {getFilterOthers().map((other, key) => (
                                    <Other other={other} index={key} onInsertFriend={onInsertFriend} key={key} />
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
