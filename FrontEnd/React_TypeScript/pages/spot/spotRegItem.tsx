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
    StyledDiv10,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledCheckOutlined1, StyledPlusCircleOutlined2 } from '../../api/styledAnt';
import { StyledH4, StyledH6, StyledH7 } from '../../api/styledFont';
import { goSpotItems, color3 } from '../../api/common';
import { IGroup, IItem, ISpot, IUser } from '../../api/interface';
import axios from '../../api/axios';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';

const SpotRegItem = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);

    const [contents, setContents] = React.useState<string>('');
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [touchGab, setTouchGab] = React.useState<number>(0);
    const [photo, setPhoto] = React.useState<HTMLInputElement | undefined>(undefined);
    const [photos, setPhotos] = React.useState<string[]>([]);
    const [fileLists, setFileLists] = React.useState<File[]>([]);

    // 내용 저장
    const onContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    const onCheckValid = () => {
        if (fileLists.length === 0) {
            alert('적어도 1개의 사진이 필요합니다.');
            return false;
        }

        if (contents.length === 0) {
            alert('적어도 1글자의 리뷰내용이 필요합니다.');
            return false;
        }

        return true;
    };

    // 아이템 등록
    const onRegItem = async () => {
        if (onCheckValid()) {
            const item: IItem = {
                groupId: reduxGroup.groupId,
                spotId: reduxSpot.spotId as number,
                regId: reduxUser.userId,
                contents: contents,
            };

            const res = await axios.post('/item/regItem', item, {
                // 아이템 생성
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (res.data.success) {
                const formData = new FormData();

                fileLists.forEach((file) => {
                    formData.append('multipartFiles', file);
                });

                formData.append('stringItemId', String(res.data.data));

                const res1 = await axios.post('/common/uploadFiles', formData, {
                    // 생성된 아이템에 업로드 파일 저장
                    headers: {
                        // 'content-type': 'multipart/form-data',
                        'user-token': localStorage.userToken,
                    },
                });

                if (res1.data.success) {
                    goSpotItems();
                } else {
                    alert('처리 중 오류가 발생했습니다.');
                }
            } else {
                alert('처리 중 오류가 발생했습니다.');
            }
        }
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

    // 서클 인덱스에 해당하는 이미지로 이동
    const onClickCircle = (index: number) => {
        setSlideIndex(index);
    };

    // 파일탐색 오픈
    const onAddPhoto = () => {
        (photo as HTMLInputElement).click();
    };

    // 파일 저장
    const onSavePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList: FileList | null = e.target.files;
        const fileArray = Array.prototype.slice.call(fileList);
        const newPhotos: string[] = photos.slice();

        fileArray.forEach((file, index) => {
            const reader = new FileReader();

            reader.onload = () => {
                // 파일을 읽은 result값(image url)을 photos에 저장
                newPhotos.push(reader.result as string);

                if (index === fileArray.length - 1) {
                    setPhotos(newPhotos);
                }
            };

            fileLists.push(file);
            reader.readAsDataURL(file); // image url에 해당하는 파일 데이터 set
        });
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goSpotItems} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>아이템 생성</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 onClick={onRegItem} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

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
                                            target={slideIndex === index}
                                            onClick={() => onClickCircle(index)}
                                            key={index}
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

            <input
                type="file"
                style={{ display: 'none' }}
                multiple
                ref={(node: HTMLInputElement) => setPhoto(node)}
                onChange={onSavePhoto}
            />
        </>
    );
};

export default SpotRegItem;
