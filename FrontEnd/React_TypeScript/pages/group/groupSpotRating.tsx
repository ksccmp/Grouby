import * as React from 'react';
import { StyledNineDiv1, StyledDiv1, StyledFlex2, StyledNineDiv2 } from '../../api/styled';
import { StyledH3 } from '../../api/styledFont';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { goBack } from '../../api/common';
import StarScore from '../../component/group/starScore';
import { IRank } from '../../api/interface';

const GroupSpotRating = (): JSX.Element => {
    const [ranks, setRanks] = React.useState<IRank[]>([
        {
            index: 0,
            rankName: '음식',
            rankScore: 1,
        },
        {
            index: 1,
            rankName: '친절',
            rankScore: 1,
        },
        {
            index: 2,
            rankName: '화장실',
            rankScore: 1,
        },
    ]);

    const onRanks = (rank: IRank) => {
        const newRanks = ranks.slice();
        newRanks[rank.index] = rank;
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
