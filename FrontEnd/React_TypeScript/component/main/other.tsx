import * as React from 'react';
import { StyledFlex16, StyledFlex17 } from '../../api/styled';
import { StyledH5, StyledH7 } from '../../api/styledFont';
import { IFriend } from '../../api/interface';
import { StyledPlusCircleFilled1 } from '../../api/styledAnt';

interface IChangeFriend {
    other: IFriend;
    index: number;
    onInsertFriend: () => void;
}

const Other: React.FC<IChangeFriend> = ({ other, index, onInsertFriend }): JSX.Element => {
    return (
        <>
            <StyledFlex16>
                <StyledFlex17>
                    <StyledH5>{other.friendId}</StyledH5>
                    <StyledH7>({other.friendName})</StyledH7>
                </StyledFlex17>
                <div>
                    <StyledPlusCircleFilled1 onClick={() => onInsertFriend()} />
                </div>
            </StyledFlex16>
        </>
    );
};

export default Other;
