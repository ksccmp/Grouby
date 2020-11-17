import * as React from 'react';
import {
    StyledBorderDiv7,
    StyledBackgroundDiv7,
    StyledFlex8,
    StyledDiv4,
    StyledSlideDiv1,
    StyledSlideUl1,
    StyledSlideLi1,
    StyledSlideDiv2,
    StyledSlideDiv3,
    StyledCircle1,
    StyledFlex10,
    StyledFlex11,
} from '../../api/styled';
import { StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
import { IItem } from '../../api/interface';
import { StyledHeartOutlined1, StyledHeartFilled1, StyledMessageOutlined1 } from '../../api/styledAnt';

interface IChangeItem {
    item: IItem;
    onLikePress: (index: number) => void;
    onOpenComments: () => void;
}

const Item: React.FC<IChangeItem> = ({ item, onLikePress, onOpenComments }): JSX.Element => {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [touchGab, setTouchGab] = React.useState<number>(0);

    // 사진/동영상 터치 직후
    const onAfterTouch = (e: React.TouchEvent<HTMLUListElement>) => {
        const val: number = e.changedTouches[0].screenX;
        if (val - touchGab > 0) {
            // 직후의 X축이 더 클때 -> 오른쪽 넘김
            setSlideIndex(slideIndex - 1 < 0 ? 0 : slideIndex - 1);
        } else if (val - touchGab < 0) {
            // 직후의 x축이 더 작을때 -> 왼쪽 넘김
            setSlideIndex(slideIndex + 1 > 3 ? slideIndex : slideIndex + 1);
        }
        setTouchGab(0);
    };

    // 사진/동영상 터치 직전
    const onBeforeTouch = (e: React.TouchEvent<HTMLUListElement>) => {
        setTouchGab(e.targetTouches[0].screenX);
    };

    const onClickCircle = (index: number) => {
        setSlideIndex(index);
    };

    return (
        <>
            <StyledBorderDiv7>
                <StyledBackgroundDiv7>
                    <div>
                        <StyledFlex8>
                            <StyledH5>{item.regId}</StyledH5>
                        </StyledFlex8>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <StyledSlideDiv1>
                            <StyledSlideUl1
                                count={4}
                                index={slideIndex}
                                onTouchStart={onBeforeTouch}
                                onTouchEnd={onAfterTouch}
                            >
                                <StyledSlideLi1 count={4} style={{ backgroundColor: 'red' }}></StyledSlideLi1>
                                <StyledSlideLi1 count={4} style={{ backgroundColor: 'blue' }}></StyledSlideLi1>
                                <StyledSlideLi1 count={4} style={{ backgroundColor: 'green' }}></StyledSlideLi1>
                                <StyledSlideLi1 count={4} style={{ backgroundColor: 'yellow' }}></StyledSlideLi1>
                            </StyledSlideUl1>
                        </StyledSlideDiv1>

                        <StyledSlideDiv2>
                            <StyledSlideDiv3>
                                <StyledCircle1 target={slideIndex === 0} onClick={() => onClickCircle(0)}>
                                    ●
                                </StyledCircle1>
                                <StyledCircle1 target={slideIndex === 1} onClick={() => onClickCircle(1)}>
                                    ●
                                </StyledCircle1>
                                <StyledCircle1 target={slideIndex === 2} onClick={() => onClickCircle(2)}>
                                    ●
                                </StyledCircle1>
                                <StyledCircle1 target={slideIndex === 3} onClick={() => onClickCircle(3)}>
                                    ●
                                </StyledCircle1>
                            </StyledSlideDiv3>
                        </StyledSlideDiv2>
                    </div>

                    <div
                        style={{
                            borderTop: '1px solid rgba(137, 136, 135, 0.3)',
                        }}
                    >
                        <StyledDiv4>
                            <StyledH6>{item.contents}</StyledH6>
                        </StyledDiv4>
                    </div>

                    <div style={{ borderBottom: '1px solid rgba(137, 136, 135, 0.3)' }}>
                        <StyledFlex11>
                            <StyledFlex11>
                                <div style={{ marginRight: '5px' }}>
                                    <StyledH7>좋아요({item.like})</StyledH7>
                                </div>
                                <div style={{ marginRight: '5px' }}>
                                    <StyledH7>댓글(5)</StyledH7>
                                </div>
                            </StyledFlex11>
                            <div>
                                <StyledH7>{item.regDate}</StyledH7>
                            </div>
                        </StyledFlex11>
                    </div>

                    <div>
                        <StyledFlex10>
                            <StyledFlex10>
                                <div style={{ marginRight: '5px' }} onClick={() => onLikePress(item.index as number)}>
                                    {item.likePress ? <StyledHeartFilled1 /> : <StyledHeartOutlined1 />}
                                </div>
                                <div style={{ marginRight: '5px' }} onClick={onOpenComments}>
                                    <StyledMessageOutlined1 />
                                </div>
                            </StyledFlex10>
                            <div></div>
                        </StyledFlex10>
                    </div>
                </StyledBackgroundDiv7>
            </StyledBorderDiv7>
        </>
    );
};

export default Item;
