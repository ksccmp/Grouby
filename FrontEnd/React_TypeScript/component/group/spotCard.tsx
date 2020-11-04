import * as React from 'react';
import { StyledDiv1, StyledFlex6, StyledFlex2, StyledBorderDiv5, StyledBackgroundDiv5 } from '../../api/styled';
import { StyledH5, StyledH6, StyledH4 } from '../../api/styledFont';
import { goGroupSpotRating } from '../../api/common';
import { IChangeSpot } from '../../pages/group/groupHome';

interface ISpotCard {
    spot: IChangeSpot;
}

const SpotCard: React.FC<ISpotCard> = ({ spot }): JSX.Element => {
    return (
        <StyledDiv1>
            <StyledFlex6 extend={false}>
                <div>
                    <StyledH5>{spot.spotName}</StyledH5>
                </div>
                <div>
                    {spot.ranks.map((rank, key) => (
                        <StyledH6 style={{ marginRight: '0.3rem' }} key={key}>
                            #{rank.rankCompName}
                        </StyledH6>
                    ))}
                </div>
            </StyledFlex6>
            <div style={{ backgroundColor: 'blue', opacity: '0.5', color: 'white' }}>
                <StyledFlex2>
                    <StyledH6>평가</StyledH6>
                    <StyledH6>
                        (+{spot.todayRank}) {spot.totalRank}
                    </StyledH6>
                </StyledFlex2>
                {spot.ranks.map((rank, key) => (
                    <StyledFlex2 key={key}>
                        <StyledH6>{rank.rankCompName}</StyledH6>
                        <StyledH6>{rank.rank} / 5</StyledH6>
                    </StyledFlex2>
                ))}
            </div>

            <StyledBorderDiv5 onClick={goGroupSpotRating}>
                <StyledBackgroundDiv5>
                    <StyledH4>평 가</StyledH4>
                </StyledBackgroundDiv5>
            </StyledBorderDiv5>
        </StyledDiv1>
    );
};

export default SpotCard;
