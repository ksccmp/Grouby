import * as React from 'react';
import {
    StyledFlex8,
    StyledDiv4,
    StyledSlideDiv1,
    StyledSlideUl1,
    StyledSlideDiv2,
    StyledSlideDiv3,
    StyledCircle1,
    StyledFlex10,
    StyledFlex11,
    StyledFlex9,
    StyledDiv5,
    StyledDiv6,
    StyledSlideImg1,
} from '../../api/styled';
import { StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
import { IItem, IUploadFile } from '../../api/interface';
import { StyledHeartOutlined1, StyledHeartFilled1, StyledMessageOutlined1 } from '../../api/styledAnt';
import { color1, color3, color4, getTime } from '../../api/common';

interface IChangeItem {
    item: IItem;
    onHeartPress: (index: number) => void;
    onOpenComments: (itemId: number) => void;
}

const Item: React.FC<IChangeItem> = ({ item, onHeartPress, onOpenComments }): JSX.Element => {
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
            setSlideIndex(
                slideIndex + 1 > (item.uploadFiles as IUploadFile[]).length - 1 ? slideIndex : slideIndex + 1,
            );
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
            <StyledFlex9>
                <StyledDiv5 style={{ marginBottom: '5px' }}>
                    <StyledDiv6>
                        <StyledFlex8>
                            <StyledH5>{item.regId}</StyledH5>
                        </StyledFlex8>
                    </StyledDiv6>

                    <div style={{ position: 'relative' }}>
                        <StyledSlideDiv1>
                            <StyledSlideUl1
                                count={(item.uploadFiles as IUploadFile[]).length}
                                index={slideIndex}
                                onTouchStart={onBeforeTouch}
                                onTouchEnd={onAfterTouch}
                            >
                                {(item.uploadFiles as IUploadFile[]).map((uploadFile, index) => (
                                    <StyledSlideImg1
                                        count={(item.uploadFiles as IUploadFile[]).length}
                                        src={uploadFile.src}
                                    />
                                ))}
                            </StyledSlideUl1>
                        </StyledSlideDiv1>

                        <StyledSlideDiv2>
                            <StyledSlideDiv3>
                                {[...Array((item.uploadFiles as IUploadFile[]).length)].map((temp, index) => {
                                    return (
                                        <StyledCircle1
                                            target={slideIndex === index}
                                            onClick={() => onClickCircle(index)}
                                            key={index}
                                        >
                                            ●
                                        </StyledCircle1>
                                    );
                                })}
                            </StyledSlideDiv3>
                        </StyledSlideDiv2>
                    </div>

                    <StyledDiv6
                        style={{
                            borderTop: `1px solid ${color1}`,
                            borderBottom: `1px solid ${color1}`,
                        }}
                    >
                        <StyledDiv4>
                            <StyledH6>{item.contents}</StyledH6>
                        </StyledDiv4>
                    </StyledDiv6>

                    <StyledDiv6>
                        <div>
                            <StyledFlex11>
                                <StyledFlex11>
                                    <div style={{ marginRight: '5px' }}>
                                        <StyledH7 style={{ marginRight: '1px' }}>좋아요</StyledH7>
                                        <StyledH7 style={{ color: color4 }}>{item.heart}</StyledH7>
                                    </div>
                                    <div style={{ marginRight: '5px' }}>
                                        <StyledH7 style={{ marginRight: '1px' }}>댓글</StyledH7>
                                        <StyledH7 style={{ color: color3 }}>{item.comment}</StyledH7>
                                    </div>
                                </StyledFlex11>
                                <div>
                                    <StyledH7 style={{ opacity: '0.6' }}>{getTime(item.regDate as string)}</StyledH7>
                                </div>
                            </StyledFlex11>
                        </div>

                        <div>
                            <StyledFlex10>
                                <StyledFlex10>
                                    <div
                                        style={{ marginRight: '5px' }}
                                        onClick={() => onHeartPress(item.index as number)}
                                    >
                                        {item.heartPress ? <StyledHeartFilled1 /> : <StyledHeartOutlined1 />}
                                    </div>
                                    <div
                                        style={{ marginRight: '5px' }}
                                        onClick={() => onOpenComments(item.itemId as number)}
                                    >
                                        <StyledMessageOutlined1 />
                                    </div>
                                </StyledFlex10>
                                <div></div>
                            </StyledFlex10>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledFlex9>
        </>
    );
};

export default Item;
