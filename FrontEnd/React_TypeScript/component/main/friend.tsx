import * as React from 'react';
import { StyledBorderDiv3, StyledBackgroundDiv3, StyledExternalDiv4, StyledButton2 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IFriend } from '../../api/interface';

interface IChangeFriend {
    friend: IFriend;
    external: string;
}

const Friend: React.FC<IChangeFriend> = ({ friend, external }): JSX.Element => {
    const getExternal = () => {
        if (external === 'add') {
            return (
                <StyledButton2>
                    <StyledH6>추가</StyledH6>
                </StyledButton2>
            );
        } else if (external === 'delete') {
            return (
                <StyledButton2>
                    <StyledH6>삭제</StyledH6>
                </StyledButton2>
            );
        }
    };

    return (
        <StyledBorderDiv3>
            <StyledBackgroundDiv3>
                <div>
                    <StyledH5>{friend.friendId}</StyledH5>
                    <StyledH6>({friend.friendName})</StyledH6>
                </div>
                <StyledExternalDiv4>{getExternal()}</StyledExternalDiv4>
            </StyledBackgroundDiv3>
        </StyledBorderDiv3>
    );
};

export default Friend;
