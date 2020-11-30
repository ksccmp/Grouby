import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledText2,
    StyledDiv8,
} from '../../api/styled';
import { StyledH4_1 } from '../../api/styledFont';
import Rank from '../../component/spot/rank';
import { IRank } from '../../api/interface';
import { getTime, goSpotRating } from '../../api/common';
import { StyledCheckOutlined1, StyledEditOutlined1, StyledFileAddOutlined1 } from '../../api/styledAnt';

export interface IChangeRank {
    regId: string;
    regDate: string;
    ranks: IRank[];
}

const SpotRanks = (): JSX.Element => {
    const [changeRanks, setChangeRanks] = React.useState<IChangeRank[]>([
        {
            regId: 'ksccmp',
            regDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    regId: 'ksccmp',
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 4,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    regId: 'ksccmp',
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    regId: 'ksccmp',
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 3,
                    regDate: getTime(),
                },
            ],
        },

        {
            regId: 'intan',
            regDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    regId: 'intan',
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 4,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    regId: 'intan',
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    regId: 'intan',
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 5,
                    regDate: getTime(),
                },
            ],
        },
    ]);
    const [title, setTitle] = React.useState<string>('사당 요란한식당');
    const [modSpotName, setModSpoName] = React.useState<boolean>(false);

    const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onModSpotName = () => {
        setModSpoName(!modSpotName);
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                {modSpotName ? (
                                    <StyledText2 value={title} onChange={onTitle} />
                                ) : (
                                    <StyledH4_1>수찬커플/{title}</StyledH4_1>
                                )}
                            </StyledDiv8>
                            {modSpotName ? (
                                <StyledFlex13>
                                    <StyledCheckOutlined1 onClick={onModSpotName} />
                                </StyledFlex13>
                            ) : (
                                <StyledFlex13>
                                    <StyledEditOutlined1 onClick={onModSpotName} />
                                    <StyledFileAddOutlined1 onClick={goSpotRating} />
                                </StyledFlex13>
                            )}
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <div>
                    {changeRanks.map((changeRank, key) => (
                        <Rank changeRank={changeRank} key={key} />
                    ))}
                </div>
            </StyledDiv1>
        </>
    );
};

export default SpotRanks;
