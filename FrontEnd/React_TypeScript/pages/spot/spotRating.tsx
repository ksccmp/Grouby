import * as React from 'react';
import { StyledDiv1, StyledFlex2, StyledDiv5, StyledDiv6, StyledFlex13, StyledDiv8 } from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import { StyledLeftOutlined2, StyledCheckOutlined1 } from '../../api/styledAnt';
import { getTime, goSpotRanks } from '../../api/common';
import StarScore from '../../component/spot/starScore';
import { IRank } from '../../api/interface';

const spotRating = (): JSX.Element => {
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
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goSpotRanks} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>평가</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        {ranks
                            ? ranks.map((rank, key) => {
                                  return <StarScore rank={rank} onRanks={onRanks} key={key} />;
                              })
                            : ''}
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default spotRating;
