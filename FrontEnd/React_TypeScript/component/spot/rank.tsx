import * as React from 'react';
import {
    StyledFlex8,
    StyledFlex9,
    StyledDiv5,
    StyledDiv6,
    StyledBorderDiv19,
    StyledBackgroundDiv19_1,
    StyledBackgroundDiv19_2,
    StyledFlex20,
    StyledDiv9,
} from '../../api/styled';
import { StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
import { IChangeRank } from '../../pages/spot/spotRanks';
import { color2, color4, color5, getTime } from '../../api/common';

interface IChangeRank2 {
    changeRank: IChangeRank;
}

const Rank: React.FC<IChangeRank2> = ({ changeRank }): JSX.Element => {
    return (
        <>
            <StyledFlex9>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledDiv9>
                            <StyledFlex8>
                                <StyledH5>{changeRank.regId}</StyledH5>
                                <StyledH7 style={{ opacity: '0.6' }}>{getTime()}</StyledH7>
                            </StyledFlex8>

                            <StyledFlex20>
                                {changeRank.ranks.map((rank, key) => (
                                    <StyledBorderDiv19
                                        key={key}
                                        style={{ marginRight: '0.5rem', marginBottom: '0.2rem' }}
                                    >
                                        <StyledBackgroundDiv19_1>
                                            <StyledH6>{rank.rankCompName}</StyledH6>
                                        </StyledBackgroundDiv19_1>
                                        <StyledBackgroundDiv19_2>
                                            {rank.rank >= 3 ? (
                                                rank.rank === 3 ? (
                                                    <StyledH6 style={{ color: color2 }}>{rank.rank}</StyledH6>
                                                ) : (
                                                    <StyledH6 style={{ color: color5 }}>{rank.rank}</StyledH6>
                                                )
                                            ) : (
                                                <StyledH6 style={{ color: color4 }}>{rank.rank}</StyledH6>
                                            )}
                                        </StyledBackgroundDiv19_2>
                                    </StyledBorderDiv19>
                                ))}
                            </StyledFlex20>
                        </StyledDiv9>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledFlex9>
        </>
    );
};

export default Rank;
