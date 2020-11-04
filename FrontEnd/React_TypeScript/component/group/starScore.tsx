import * as React from 'react';
import { StyledStarOutlined1, StyledStarFilled1 } from '../../api/styledAnt';
import { StyledGrid2, StyledBorderDiv6, StyledBackgroundDiv6, StyledGrid3 } from '../../api/styled';
import { StyledH5 } from '../../api/styledFont';
import { IRank1 } from '../../api/interface';

interface IStarScore {
    rank: IRank1;
    onRanks: (rank: IRank1) => void;
}

const StarScore: React.FC<IStarScore> = ({ rank, onRanks }): JSX.Element => {
    const stars: number[] = [0, 1, 2, 3, 4];

    const getStar = (index: number, key: number) => {
        return rank.rankScore > index ? (
            <StyledStarFilled1
                key={key}
                onClick={() => {
                    onRanks({
                        index: rank.index,
                        rankName: rank.rankName,
                        rankScore: index + 1,
                    });
                }}
            />
        ) : (
            <StyledStarOutlined1
                key={key}
                onClick={() => {
                    onRanks({
                        index: rank.index,
                        rankName: rank.rankName,
                        rankScore: index + 1,
                    });
                }}
            />
        );
    };

    return (
        <>
            <StyledGrid2>
                <StyledBorderDiv6>
                    <StyledBackgroundDiv6>
                        <StyledH5>{rank.rankName}</StyledH5>
                    </StyledBackgroundDiv6>
                </StyledBorderDiv6>

                <div></div>

                <StyledBorderDiv6>
                    <StyledBackgroundDiv6>
                        <StyledGrid3>
                            {stars.map((star, key) => {
                                return getStar(star, key);
                            })}
                        </StyledGrid3>
                    </StyledBackgroundDiv6>
                </StyledBorderDiv6>
            </StyledGrid2>
        </>
    );
};

export default StarScore;
