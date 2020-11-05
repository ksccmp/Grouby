import * as React from 'react';
import { StyledNineDiv1, StyledDiv1, StyledFlex2, StyledNineDiv2 } from '../../api/styled';
import { StyledH3 } from '../../api/styledFont';
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
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명/스팟 명</StyledH3>
                        </div>
                        <div>
                            <StyledH3>평가</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    {ranks
                        ? ranks.map((rank, key) => {
                              return <StarScore rank={rank} onRanks={onRanks} key={key} />;
                          })
                        : ''}
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default GroupSpotRating;
