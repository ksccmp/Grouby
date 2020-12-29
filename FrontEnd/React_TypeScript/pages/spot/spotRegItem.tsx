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
    StyledFlex9,
    StyledSlideImg1,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledCheckOutlined1, StyledPlusCircleOutlined2 } from '../../api/styledAnt';
import { StyledH4, StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
import { goSpotItems, getTime, color3 } from '../../api/common';
import { IItem } from '../../api/interface';

const SpotRegItem = (): JSX.Element => {
    const [contents, setContents] = React.useState<string>('');
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [touchGab, setTouchGab] = React.useState<number>(0);
    const [slideCount, setSlideCount] = React.useState<number>(0);
    const [photo, setPhoto] = React.useState<HTMLInputElement | undefined>(undefined);
    const [photos, setPhotos] = React.useState<string[]>([]);

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
            setSlideIndex(slideIndex + 1 > photos.length ? slideIndex : slideIndex + 1);
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

    const onAddPhoto = () => {
        (photo as HTMLInputElement).click();
    };

    const onSavePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        const fileList: FileList | null = e.target.files;
        const fileArray = Array.prototype.slice.call(fileList);
        const newPhotos: string[] = photos.slice();

        fileArray.forEach((file, index) => {
            console.log(file);
            const reader = new FileReader();

            reader.onload = () => {
                // 파일을 읽은 result값(image url)을 photos에 저장
                newPhotos.push(reader.result as string);

                if (index === fileArray.length - 1) {
                    setPhotos(newPhotos);
                }
            };

            reader.readAsDataURL(file); // image url에 해당하는 파일 데이터 set
        });
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
                        <StyledH7 style={{ color: color3 }}>사진</StyledH7>
                    </StyledDiv6>
                    <StyledBorderDiv10>
                        <StyledBackgroundDiv10>
                            <StyledSlideDiv1>
                                <StyledSlideUl1
                                    count={photos.length + 1}
                                    index={slideIndex}
                                    onTouchStart={onBeforeTouch}
                                    onTouchEnd={onAfterTouch}
                                >
                                    {photos.map((photo, index) => (
                                        <StyledSlideImg1 count={photos.length + 1} src={photo} />
                                    ))}
                                    <StyledSlideLi1
                                        count={photos.length + 1}
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <StyledFlex9 onClick={onAddPhoto}>
                                            <StyledPlusCircleOutlined2 />
                                            <StyledH6 style={{ fontWeight: 'initial' }}>사진을 추가해보세요.</StyledH6>
                                        </StyledFlex9>
                                    </StyledSlideLi1>
                                </StyledSlideUl1>
                            </StyledSlideDiv1>

                            <StyledSlideDiv2>
                                <StyledSlideDiv3>
                                    {[...Array(photos.length + 1)].map((count, index) => (
                                        <StyledCircle1
                                            target={slideIndex === count}
                                            onClick={() => onClickCircle(count)}
                                        >
                                            ●
                                        </StyledCircle1>
                                    ))}
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

            <input type="file" multiple ref={(node: HTMLInputElement) => setPhoto(node)} onChange={onSavePhoto} />
        </>
    );
};

export default SpotRegItem;
