import * as React from 'react';
import {
    StyledFlex6,
    StyledFlex2,
    StyledBorderDiv5,
    StyledBackgroundDiv5,
    StyledBorderDiv17,
    StyledBackgroundDiv17,
} from '../../api/styled';
import { StyledH5, StyledH6, StyledH4 } from '../../api/styledFont';
import { goGroupSpotRating } from '../../api/common';
import { IChangeSpot } from '../../pages/group/groupHome';

interface ISpotCard {
    spot: IChangeSpot;
}

const SpotCard: React.FC<ISpotCard> = ({ spot }): JSX.Element => {
    return (
        <>
            <StyledBorderDiv17>
                <StyledBackgroundDiv17>
                    <div style={{ margin: '0 15px' }}>
                        <StyledFlex6 extend={false}>
                            <div>
                                <StyledH4>{spot.spotName}</StyledH4>
                            </div>
                            <div>
                                {spot.ranks.map((rank, key) => (
                                    <StyledH6 style={{ marginRight: '0.3rem' }} key={key}>
                                        #{rank.rankCompName}
                                    </StyledH6>
                                ))}
                            </div>
                        </StyledFlex6>
                    </div>

                    <div
                        style={{
                            borderTop: '1px solid rgba(137,136,135,0.3)',
                            borderBottom: '1px solid rgba(137,136,135,0.3)',
                        }}
                    >
                        <div style={{ margin: '0 15px' }}>
                            <StyledFlex2>
                                <StyledH6>평가</StyledH6>
                                <div>
                                    <StyledH6 style={{ color: '#4ab422' }}>(+{spot.todayRank})</StyledH6>
                                    <StyledH6>{spot.totalRank}</StyledH6>
                                </div>
                            </StyledFlex2>
                            {spot.ranks.map((rank, key) => (
                                <StyledFlex2 key={key}>
                                    <StyledH6>{rank.rankCompName}</StyledH6>
                                    <div>
                                        {rank.rank >= 3 ? (
                                            <StyledH6 style={{ color: '#1976d2' }}>{rank.rank}</StyledH6>
                                        ) : (
                                            <StyledH6 style={{ color: 'rgba(255, 0, 0, 0.7)' }}>{rank.rank}</StyledH6>
                                        )}
                                        <StyledH6>/</StyledH6>
                                        <StyledH6>5</StyledH6>
                                    </div>
                                </StyledFlex2>
                            ))}
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(230, 149, 26, 0.9)' }}>
                        <StyledBorderDiv5 onClick={goGroupSpotRating}>
                            <StyledBackgroundDiv5>
                                <StyledH4>평 가</StyledH4>
                            </StyledBackgroundDiv5>
                        </StyledBorderDiv5>
                    </div>
                </StyledBackgroundDiv17>
            </StyledBorderDiv17>
        </>
    );
};

export default SpotCard;
