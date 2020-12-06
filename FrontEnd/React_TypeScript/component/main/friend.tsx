import * as React from 'react';
import { StyledFlex16, StyledFlex17 } from '../../api/styled';
import { StyledH5, StyledH7 } from '../../api/styledFont';
import { IFriend } from '../../api/interface';
import { StyledMinusCircleFilled2 } from '../../api/styledAnt';

interface IChangeFriend {
    friend: IFriend;
    index: number;
    onDeleteFriend: (index: number) => void;
}

const Friend: React.FC<IChangeFriend> = ({ friend, index, onDeleteFriend }): JSX.Element => {
    return (
        <>
            <StyledFlex16>
                <StyledFlex17>
                    <StyledH5>{friend.friendId}</StyledH5>
                    <StyledH7>({friend.friendName})</StyledH7>
                </StyledFlex17>
                <div>
                    <StyledMinusCircleFilled2 onClick={() => onDeleteFriend(index)} />
                </div>
            </StyledFlex16>
        </>
    );
};

export default Friend;
