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
    StyledDiv10,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledPlusCircleFilled1 } from '../../api/styledAnt';
import { StyledH4 } from '../../api/styledFont';
import Comment from './comment';
import { IComment, IUser } from '../../api/interface';
import axios from '../../api/axios';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';

interface IComments {
    comments: IComment[];
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
    openComments: boolean;
    onOpenComments: (itemId: number) => void;
}

const Comments: React.FC<IComments> = ({ comments, setComments, openComments, onOpenComments }): JSX.Element => {
    const reduxOpenItemId: number = useSelector((state: IIndexReducer) => state.ItemReducer.openItemId);
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [inputComment, setInputComment] = React.useState<string>('');

    // 댓글 입력 시 하단으로 위치 조정
    React.useEffect(() => {
        const fixed1: HTMLDivElement = document.getElementById('fixed1') as HTMLDivElement;
        fixed1.scrollTop = fixed1.scrollHeight;
    }, [comments]);

    // 코멘트 내용 저장
    const onInputComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputComment(e.target.value);
    };

    // 코멘트 게시
    const onSaveComment = async () => {
        let isSuccess = true;

        const comment: IComment = {
            itemId: reduxOpenItemId,
            regId: reduxUser.userId,
            comments: inputComment,
        };

        setInputComment('');

        const res = await axios.post('/item/regComment', comment, {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (!res.data.success) {
            isSuccess = false;
        }

        if (isSuccess) {
            const res1 = await axios.get('/item/selectCommentsByItemId', {
                params: {
                    itemId: reduxOpenItemId,
                },
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (res1.data.success) {
                setComments(res1.data.data);
            } else {
                isSuccess = false;
            }
        }

        if (!isSuccess) {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <StyledFixed1 open={openComments} id="fixed1">
                <StyledDiv1 style={{ paddingBottom: '30px', position: 'relative' }}>
                    <StyledDiv10>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={() => onOpenComments(-1)} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledH4>댓글</StyledH4>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv10>

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
                                                onChange={onInputComment}
                                                value={inputComment}
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
