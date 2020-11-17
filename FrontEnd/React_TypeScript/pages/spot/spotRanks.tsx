import * as React from 'react';
import { StyledNineDiv1, StyledDiv1, StyledFlex2 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import Rank from '../../component/spot/rank';
import { IRank } from '../../api/interface';
import { getTime, goGroupSpotRating } from '../../api/common';

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

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledH4>수찬 커플/사당 요란한식당</StyledH4>
                            </div>
                            <div onClick={goGroupSpotRating}>
                                <StyledH4>등록</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    {changeRanks.map((changeRank, key) => (
                        <Rank changeRank={changeRank} key={key} />
                    ))}
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default SpotRanks;
