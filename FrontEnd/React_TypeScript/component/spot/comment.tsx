import * as React from 'react';
import { StyledBorderDiv8, StyledBackgroundDiv8, StyledFlex9, StyledFlex2 } from '../../api/styled';
import { StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
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
                        <StyledFlex9>
                            <StyledFlex2>
                                <StyledH5>{comment.regId}</StyledH5>
                                <StyledH7 style={{ opacity: '0.6' }}>{comment.modDate}</StyledH7>
                            </StyledFlex2>
                            <StyledH6 style={{ fontWeight: 'initial' }}>{comment.comments}</StyledH6>
                        </StyledFlex9>
                    </StyledBackgroundDiv8>
                </StyledBorderDiv8>
            </div>
        </>
    );
};

export default Comment;
