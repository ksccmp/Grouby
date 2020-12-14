import * as React from 'react';
import {
    StyledFlex20,
    StyledFlex9,
    StyledBorderDiv19,
    StyledBackgroundDiv19_1,
    StyledBackgroundDiv19_2,
    StyledDiv9,
} from '../../api/styled';
import { StyledH6, StyledH4, StyledH7 } from '../../api/styledFont';
import { color2, color3, color4, color5 } from '../../api/common';
import { ISpot } from '../../api/interface';

interface ISpotCard {
    spot: ISpot;
}

const SpotCard: React.FC<ISpotCard> = ({ spot }): JSX.Element => {
    return (
        <>
            <StyledDiv9>
                <StyledFlex9 style={{ margin: '0.5rem 0' }}>
                    <StyledFlex20>
                        {spot.ranks.map((rank, key) => (
                            <StyledH7 style={{ marginRight: '0.3rem', color: color3 }} key={key}>
                                #{rank.rankCompName}
                            </StyledH7>
                        ))}
                    </StyledFlex20>
                    <StyledFlex20>
                        <StyledH4>{spot.spotName}</StyledH4>
                    </StyledFlex20>
                    <StyledFlex20>
                        {spot.ranks.map((rank, key) => (
                            <StyledBorderDiv19 key={key} style={{ marginRight: '0.5rem', marginBottom: '0.2rem' }}>
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
                </StyledFlex9>
            </StyledDiv9>
        </>
    );
};

export default SpotCard;
