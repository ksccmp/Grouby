import * as React from 'react';
import {
    StyledFlex2,
    StyledFixed1,
    StyledNineDiv2,
    StyledDiv1,
    StyledBorderDiv2,
    StyledBackgroundDiv2,
    StyledText1,
    StyledExternalDiv1,
    StyledButton2,
    StyledFixed2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH6 } from '../../api/styledFont';
import Comment from './comment';

interface IComments {
    openComments: boolean;
    onOpenComments: () => void;
}

const Comments: React.FC<IComments> = ({ openComments, onOpenComments }): JSX.Element => {
    const refText = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (refText) {
            (refText.current as HTMLInputElement).focus();
        }
    }, [refText]);

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

                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </StyledDiv1>
                </StyledNineDiv2>

                <StyledFixed2 open={openComments}>
                    <StyledNineDiv2>
                        <StyledBorderDiv2 style={{ margin: '0 auto' }}>
                            <StyledBackgroundDiv2>
                                <StyledText1 placeholder="아이디" ref={refText}></StyledText1>
                                <StyledExternalDiv1>
                                    <StyledButton2>
                                        <StyledH6>게시</StyledH6>
                                    </StyledButton2>
                                </StyledExternalDiv1>
                            </StyledBackgroundDiv2>
                        </StyledBorderDiv2>
                    </StyledNineDiv2>
                </StyledFixed2>
            </StyledFixed1>
        </>
    );
};

export default Comments;
