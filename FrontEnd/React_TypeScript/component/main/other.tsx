import * as React from 'react';
import { StyledFlex16, StyledFlex25 } from '../../api/styled';
import { StyledH5, StyledH7 } from '../../api/styledFont';
import { IUser } from '../../api/interface';
import { StyledPlusCircleFilled1 } from '../../api/styledAnt';

interface IChangeFriend {
    other: IUser;
    onInsertOther: (otherId: string) => void;
    onDeleteOther: (otherId: string) => void;
}

const Other: React.FC<IChangeFriend> = ({ other, onInsertOther, onDeleteOther }): JSX.Element => {
    return (
        <>
            <StyledFlex16>
                <StyledFlex25>
                    <StyledH5>{other.userId}</StyledH5>
                    <StyledH7>({other.userName})</StyledH7>
                </StyledFlex25>
                <div>
                    <StyledPlusCircleFilled1 onClick={() => onInsertOther(other.userId)} />
                    onDeleteOther
                </div>
            </StyledFlex16>
        </>
    );
};

export default Other;
