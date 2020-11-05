import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledBorderDiv12,
    StyledBackgroundDiv12,
    StyledText1,
    StyledTabUl1,
    StyledTabLi1,
    StyledTabRadio1,
    StyledTabDiv1,
    StyledFlex7,
    StyledButton3,
} from '../../api/styled';
import { StyledLeftOutLined1, StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5, StyledLabel5, StyledH4 } from '../../api/styledFont';
import { IRankComp, ITag } from '../../api/interface';
import { goBack } from '../../api/common';

const GroupRegSpot = (): JSX.Element => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([
        { rankCompId: 1, rankCompName: '음식', rankCompSelect: false },
        { rankCompId: 2, rankCompName: '가격', rankCompSelect: false },
        { rankCompId: 3, rankCompName: '친절', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
    ]);
    const [tags, setTags] = React.useState<ITag[]>([
        { groupId: 1, tagName: '광어회', tagSelect: false },
        { groupId: 1, tagName: '연어회', tagSelect: false },
        { groupId: 1, tagName: '고등어회', tagSelect: false },
    ]);
    const [searchTextTag, setSearchTextTag] = React.useState<string>('');
    const [searchTextSpotName, setSearchTextSpotName] = React.useState<string>('');

    // 태그추가 창 열기/닫기
    const onOpenModal = (): void => {
        setOpenModal(!openModal);
    };

    // 태그 입력 내용 저장
    const onSearchTextTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextTag(e.target.value);
    };

    // 스팟 명 입력 내용 저장
    const onSearchTextSpotName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextSpotName(e.target.value);
    };

    // 태그 추가
    const onSaveTag = () => {
        setTags((prev) => [
            ...prev,
            {
                groupId: 1,
                tagName: searchTextTag,
                tagSelect: false,
            },
        ]);
        setSearchTextTag('');
    };

    // 랭크 클릭
    const onSelectRankComp = (index: number) => {
        const newRankComps = rankComps.slice();
        newRankComps[index].rankCompSelect = !newRankComps[index].rankCompSelect;
        setRankComps(newRankComps);
    };

    // 태그 클릭
    const onSelectTag = (index: number) => {
        const newTags = tags.slice();
        newTags[index].tagSelect = !newTags[index].tagSelect;
        setTags(newTags);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명</StyledH3>
                        </div>
                        <div>
                            <StyledH3>스팟 생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>스팟 명</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="스팟 명" onChange={onSearchTextSpotName}></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>옵션</StyledH5>

                    <StyledTabUl1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li1" name="radio1" defaultChecked />
                            <StyledLabel5 htmlFor="li1">평가항목</StyledLabel5>
                            <StyledTabDiv1>
                                {rankComps.map((rankComp, key) => (
                                    <StyledBorderDiv12 key={key} onClick={() => onSelectRankComp(key)}>
                                        <StyledBackgroundDiv12 select={rankComp.rankCompSelect as boolean}>
                                            <StyledH4>{rankComp.rankCompName}</StyledH4>
                                        </StyledBackgroundDiv12>
                                    </StyledBorderDiv12>
                                ))}
                            </StyledTabDiv1>
                        </StyledTabLi1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li2" name="radio1" />
                            <StyledLabel5 htmlFor="li2">태그</StyledLabel5>
                            <StyledTabDiv1>
                                {tags.map((tag, key) => (
                                    <StyledBorderDiv12 key={key} onClick={() => onSelectTag(key)}>
                                        <StyledBackgroundDiv12 select={tag.tagSelect}>
                                            <StyledH4>{tag.tagName}</StyledH4>
                                        </StyledBackgroundDiv12>
                                    </StyledBorderDiv12>
                                ))}
                                <StyledBorderDiv1 onClick={onOpenModal}>
                                    <StyledBackgroundDiv1>
                                        <StyledPlusCircleOutlined1 />
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                    </StyledTabUl1>
                </StyledDiv1>
            </StyledNineDiv2>

            <StyledFlex7 open={openModal}>
                <StyledNineDiv2>
                    <StyledDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1
                                    placeholder="태그 명"
                                    onChange={onSearchTextTag}
                                    value={searchTextTag}
                                ></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                        <div>
                            <StyledButton3 onClick={onSaveTag}>확인</StyledButton3>
                            <StyledButton3 onClick={onOpenModal}>취소</StyledButton3>
                        </div>
                    </StyledDiv1>
                </StyledNineDiv2>
            </StyledFlex7>
        </>
    );
};

export default GroupRegSpot;
