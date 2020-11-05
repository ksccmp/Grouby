import * as React from 'react';
import { StyledBorderDiv8, StyledBackgroundDiv8 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IComment } from '../../api/interface';

interface IChangeComment {
    comment: IComment;
}

const Comment: React.FC<IChangeComment> = ({ comment }): JSX.Element => {
    return (
        <>
            <div>
                <StyledBorderDiv8>
                    <StyledBackgroundDiv8>
                        <StyledH5>{comment.regId}</StyledH5> <br />
                        <StyledH6>{comment.comments}</StyledH6>
                    </StyledBackgroundDiv8>
                </StyledBorderDiv8>
            </div>
        </>
    );
};

export default Comment;
