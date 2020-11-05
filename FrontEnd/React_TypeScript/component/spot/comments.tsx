import * as React from 'react';
import {
    StyledFlex2,
    StyledFixed1,
    StyledNineDiv2,
    StyledDiv1,
    StyledBorderDiv13,
    StyledBackgroundDiv13,
    StyledText1,
    StyledExternalDiv1,
    StyledButton2,
    StyledFixed2,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH6 } from '../../api/styledFont';
import Comment from './comment';
import { IComment } from '../../api/interface';
import { getTime } from '../../api/common';

interface IComments {
    openComments: boolean;
    onOpenComments: () => void;
}

const Comments: React.FC<IComments> = ({ openComments, onOpenComments }): JSX.Element => {
    const [comments, setComments] = React.useState<IComment[]>([
        {
            commentId: 1,
            itemId: 1,
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            comments: '아니 이집 진짜 대박이에요 여러분!!!!!',
        },
        {
            commentId: 2,
            itemId: 1,
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            comments: '진짜입니다. 속이는거 아니에요!!',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
        },
    ]);
    const [searchTextComment, setSearchTextComment] = React.useState<string>('');

    React.useEffect(() => {
        if (openComments) {
            console.log('axios');
        }
    }, [openComments]);

    const onSearchTextComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextComment(e.target.value);
    };

    const onSaveComment = () => {
        setComments((prev) => [
            ...prev,
            {
                commentId: 4,
                itemId: 1,
                regId: 'ksccmp',
                regDate: getTime(),
                modDate: getTime(),
                comments: searchTextComment,
            },
        ]);
        setSearchTextComment('');
    };

    return (
        <>
            <StyledFixed1 open={openComments}>
                <StyledNineDiv2 style={{ paddingBottom: '45px', position: 'relative' }}>
                    <StyledDiv1>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={onOpenComments} />
                                <StyledH3>댓글</StyledH3>
                            </div>
                        </StyledFlex2>

                        {comments.map((comment, key) => (
                            <Comment comment={comment} key={key} />
                        ))}
                    </StyledDiv1>
                </StyledNineDiv2>

                <StyledFixed2 open={openComments}>
                    <StyledNineDiv2>
                        <StyledBorderDiv13>
                            <StyledBackgroundDiv13>
                                <StyledText1
                                    placeholder="내용"
                                    onChange={onSearchTextComment}
                                    value={searchTextComment}
                                ></StyledText1>
                                <StyledExternalDiv1 onClick={onSaveComment}>
                                    <StyledButton2>
                                        <StyledH6>게시</StyledH6>
                                    </StyledButton2>
                                </StyledExternalDiv1>
                            </StyledBackgroundDiv13>
                        </StyledBorderDiv13>
                    </StyledNineDiv2>
                </StyledFixed2>
            </StyledFixed1>
        </>
    );
};

export default Comments;
