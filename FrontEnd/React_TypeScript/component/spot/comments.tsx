import * as React from 'react';
import {
    StyledFlex2,
    StyledFixed1,
    StyledDiv1,
    StyledFixed2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledFlex16_1,
    StyledBorderDiv21,
    StyledBackgroundDiv21,
    StyledText4,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledPlusCircleFilled1 } from '../../api/styledAnt';
import { StyledH4 } from '../../api/styledFont';
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
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
        },
        {
            commentId: 3,
            itemId: 1,
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            comments: '정말이요? 저도 여기 가야겠어요',
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
    const [searchComment, setSearchComment] = React.useState<string>('');

    React.useEffect(() => {
        if (openComments) {
            console.log('axios');
        }
    }, [openComments]);

    // 댓글 입력 시 하단으로 위치 조정
    // React.useEffect(() => {
    //     const fixed1: HTMLDivElement = document.getElementById('fixed1') as HTMLDivElement;
    //     fixed1.scrollTop = fixed1.scrollHeight;
    // }, [comments]);

    // 코멘트 내용 저장
    const onSearchComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchComment(e.target.value);
    };

    // 코멘트 게시
    const onSaveComment = () => {
        setComments((prev) => [
            ...prev,
            {
                commentId: 4,
                itemId: 1,
                regId: 'ksccmp',
                regDate: getTime(),
                modDate: getTime(),
                comments: searchComment,
            },
        ]);
        setSearchComment('');
    };

    return (
        <>
            <StyledFixed1 open={openComments} id="fixed1">
                <StyledDiv1 style={{ paddingBottom: '30px', position: 'relative' }}>
                    <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={onOpenComments} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledH4>댓글</StyledH4>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv5>

                    <StyledDiv5>
                        <StyledDiv6>
                            {comments.map((comment, key) => (
                                <Comment comment={comment} key={key} />
                            ))}
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>

                <StyledFixed2 open={openComments}>
                    <StyledDiv5>
                        <StyledDiv6>
                            <StyledFlex16_1>
                                <div style={{ width: '100%', marginRight: '10px' }}>
                                    <StyledBorderDiv21>
                                        <StyledBackgroundDiv21>
                                            <StyledText4
                                                placeholder="댓글을 입력하세요."
                                                onChange={onSearchComment}
                                                value={searchComment}
                                            />
                                        </StyledBackgroundDiv21>
                                    </StyledBorderDiv21>
                                </div>
                                <div onClick={onSaveComment}>
                                    <StyledPlusCircleFilled1 />
                                </div>
                            </StyledFlex16_1>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledFixed2>
            </StyledFixed1>
        </>
    );
};

export default Comments;
