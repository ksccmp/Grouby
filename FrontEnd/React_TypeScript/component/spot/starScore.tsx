import * as React from 'react';
import { StyledStarOutlined1, StyledStarFilled1 } from '../../api/styledAnt';
import {
    StyledGrid2,
    StyledBorderDiv6_1,
    StyledBorderDiv6_2,
    StyledBackgroundDiv6,
    StyledGrid3,
} from '../../api/styled';
import { StyledH5 } from '../../api/styledFont';
import { IRank } from '../../api/interface';

interface IStarScore {
    rank: IRank;
    onRanks: (index: number, rankScore: number) => void;
    index: number;
}

const StarScore: React.FC<IStarScore> = ({ rank, onRanks, index }): JSX.Element => {
    const stars: number[] = [0, 1, 2, 3, 4];

    const getStar = (starScore: number, key: number) => {
        return rank.rankScore > starScore ? (
            <StyledStarFilled1
                key={key}
                onClick={() => {
                    onRanks(index, starScore + 1);
                }}
            />
        ) : (
            <StyledStarOutlined1
                key={key}
                onClick={() => {
                    onRanks(index, starScore + 1);
                }}
            />
        );
    };

    return (
        <>
            <StyledGrid2>
                <StyledBorderDiv6_1>
                    <StyledBackgroundDiv6>
                        <StyledH5>{rank.rankCompName}</StyledH5>
                    </StyledBackgroundDiv6>
                </StyledBorderDiv6_1>

                <StyledBorderDiv6_2>
                    <StyledBackgroundDiv6>
                        <StyledGrid3>{stars.map((star, key) => getStar(star, key))}</StyledGrid3>
                    </StyledBackgroundDiv6>
                </StyledBorderDiv6_2>
            </StyledGrid2>
        </>
    );
};

export default StarScore;
