import * as React from 'react';
import { StyledFlex16, StyledFlex25 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IUser } from '../../api/interface';
import { StyledMinusCircleFilled2, StyledPlusCircleFilled1 } from '../../api/styledAnt';

interface IChangeFriend {
    friend: IUser;
    onInsertFriend: (friendId: string) => void;
    onDeleteFriend: (friendId: string) => void;
}

const Friend: React.FC<IChangeFriend> = ({ friend, onInsertFriend, onDeleteFriend }): JSX.Element => {
    return (
        <>
            <StyledFlex16>
                <StyledFlex25>
                    <StyledH5 style={{ marginRight: '5px' }}>{friend.userName}</StyledH5>
                    <StyledH6 style={{ opacity: '0.6' }}>({friend.userId})</StyledH6>
                </StyledFlex25>
                <div>
                    {friend.add ? (
                        <StyledMinusCircleFilled2 onClick={() => onDeleteFriend(friend.userId)} />
                    ) : (
                        <StyledPlusCircleFilled1 onClick={() => onInsertFriend(friend.userId)} />
                    )}
                </div>
            </StyledFlex16>
        </>
    );
};

export default Friend;
