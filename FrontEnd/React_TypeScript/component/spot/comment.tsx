import * as React from 'react';
import { StyledBorderDiv8, StyledBackgroundDiv8 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IComment } from '../../api/interface';

const Comment = (): JSX.Element => {
    const [comment, setComment] = React.useState<IComment>({
        itemId: 1,
        regId: 'asd',
        regDate: new Date(),
        modDate: new Date(),
        comments:
            '처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!처음 댓글 입니당!!',
    });

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
