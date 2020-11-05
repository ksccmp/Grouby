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
                    <StyledFlex8>
                        <StyledH5>{changeRank.regId}</StyledH5>
                        <StyledH5>{changeRank.regDate}</StyledH5>
                    </StyledFlex8>

                    <div style={{ backgroundColor: 'blue', opacity: '0.5', color: 'white' }}>
                        {changeRank.ranks.map((rank, key) => (
                            <StyledFlex2 key={key}>
                                <StyledH6>{rank.rankCompName}</StyledH6>
                                <StyledH6>{rank.rank} / 5</StyledH6>
                            </StyledFlex2>
                        ))}
                    </div>
                </StyledBackgroundDiv9>
            </StyledBorderDiv9>
        </>
    );
};

export default Rank;
