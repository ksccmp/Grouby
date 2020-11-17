import * as React from 'react';
import { StyledFlex8, StyledFlex2, StyledBorderDiv9, StyledBackgroundDiv9 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IChangeRank } from '../../pages/spot/spotRanks';

interface IChangeRank2 {
    changeRank: IChangeRank;
}

const Rank: React.FC<IChangeRank2> = ({ changeRank }): JSX.Element => {
    return (
        <>
            <StyledBorderDiv9>
                <StyledBackgroundDiv9>
                    <div style={{ borderBottom: '1px solid rgba(137, 136, 135, 0.3)' }}>
                        <StyledFlex8>
                            <StyledH5>{changeRank.regId}</StyledH5>
                        </StyledFlex8>
                    </div>

                    <div style={{ margin: '0 5px' }}>
                        {changeRank.ranks.map((rank, key) => (
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
                </StyledBackgroundDiv9>
            </StyledBorderDiv9>
        </>
    );
};

export default Rank;
