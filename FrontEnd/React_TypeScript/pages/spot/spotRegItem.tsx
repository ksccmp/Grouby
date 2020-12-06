import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv10,
    StyledBackgroundDiv10,
    StyledSlideDiv2,
    StyledBorderDiv11,
    StyledBackgroundDiv11,
    StyledTextArea1,
    StyledSlideDiv1,
    StyledSlideUl1,
    StyledSlideLi1,
    StyledCircle1,
    StyledSlideDiv3,
    StyledDiv5,
    StyledDiv6,
    StyledDiv8,
    StyledFlex13,
    StyledFlex22,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledCheckOutlined1 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import { goSpotItems, getTime, color3 } from '../../api/common';
import { IItem } from '../../api/interface';

const SpotRegItem = (): JSX.Element => {
    const [contents, setContents] = React.useState<string>('');
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [touchGab, setTouchGab] = React.useState<number>(0);

    // 내용 저장
    const onContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    // 아이템 등록
    const onRegItem = () => {
        const item: IItem = {
            itemId: 1,
            groupId: 1,
            groupName: '수찬 커플',
            spotId: 1,
            spotName: '사당 요란한부엌',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            like: 0,
            contents: contents,
        };

        console.log(item);
    };

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
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goSpotItems} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>아이템 생성</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledH7 style={{ color: color3 }}>사진/동영상</StyledH7>
                    </StyledDiv6>
                    <StyledBorderDiv10>
                        <StyledBackgroundDiv10>
                            <StyledSlideDiv1>
                                <StyledSlideUl1
                                    count={4}
                                    index={slideIndex}
                                    onTouchStart={onBeforeTouch}
                                    onTouchEnd={onAfterTouch}
                                >
                                    <StyledSlideLi1 count={4} style={{ backgroundColor: 'red' }} />
                                    <StyledSlideLi1 count={4} style={{ backgroundColor: 'blue' }} />
                                    <StyledSlideLi1 count={4} style={{ backgroundColor: 'green' }} />
                                    <StyledSlideLi1 count={4} style={{ backgroundColor: 'yellow' }} />
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
                        </StyledBackgroundDiv10>
                    </StyledBorderDiv10>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>리뷰</StyledH7>
                        </div>
                        <div>
                            <StyledFlex22>
                                <StyledBorderDiv11>
                                    <StyledBackgroundDiv11>
                                        <StyledTextArea1 placeholder="리뷰를 작성해보세요." onChange={onContents} />
                                    </StyledBackgroundDiv11>
                                </StyledBorderDiv11>
                            </StyledFlex22>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>

            {/* <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goSpotItems} />
                                <StyledH4>수찬 커플/요란한식당</StyledH4>
                            </div>
                            <div>
                                <StyledH4>게시</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <StyledH5>사진/동영상</StyledH5>
                        <StyledBorderDiv10>
                            <StyledBackgroundDiv10>
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
                                        <StyledSlideLi1
                                            count={4}
                                            style={{ backgroundColor: 'yellow' }}
                                        ></StyledSlideLi1>
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
                            </StyledBackgroundDiv10>
                            <StyledExternalDiv2>
                                <StyledPlusCircleOutlined1 />
                            </StyledExternalDiv2>
                        </StyledBorderDiv10>
                    </div>

                    <div>
                        <StyledH5>리뷰</StyledH5>
                        <StyledBorderDiv11>
                            <StyledBackgroundDiv11>
                                <StyledTextArea1 placeholder="리뷰를 작성해보세요." onChange={onContents} />
                            </StyledBackgroundDiv11>
                        </StyledBorderDiv11>
                    </div>
                </StyledDiv1>
            </StyledNineDiv1> */}
        </>
    );
};

export default SpotRegItem;
