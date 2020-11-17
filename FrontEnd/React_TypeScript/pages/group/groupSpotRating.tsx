import * as React from 'react';
import { StyledNineDiv1, StyledDiv1, StyledFlex2, StyledNineDiv2 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { goBack, getTime } from '../../api/common';
import StarScore from '../../component/group/starScore';
import { IRank } from '../../api/interface';

const GroupSpotRating = (): JSX.Element => {
    const [ranks, setRanks] = React.useState<IRank[]>([
        {
            spotId: 1,
            rankCompId: 0,
            rankCompName: '음식',
            rank: 1,
            regDate: getTime(),
        },
        {
            spotId: 1,
            rankCompId: 1,
            rankCompName: '친절',
            rank: 1,
            regDate: getTime(),
        },
        {
            spotId: 1,
            rankCompId: 2,
            rankCompName: '화장실',
            rank: 1,
            regDate: getTime(),
        },
    ]);

    // 별 클릭 시 해당 점수 부여
    const onRanks = (index: number, rank: number) => {
        const newRanks: IRank[] = ranks.slice();
        newRanks[index].rank = rank;
        setRanks(newRanks);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goBack} />
                                <StyledH4>수찬 커플/사당 요란한식당</StyledH4>
                            </div>
                            <div>
                                <StyledH4>평가</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div>
                        {ranks
                            ? ranks.map((rank, key) => {
                                  return <StarScore rank={rank} onRanks={onRanks} key={key} />;
                              })
                            : ''}
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>
        </>
    );
};

export default GroupSpotRating;
