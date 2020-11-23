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
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
} from '../../api/styled';
import {
    StyledLeftOutLined1,
    StyledPlusCircleOutlined1,
    StyledLeftOutlined2,
    StyledCheckOutlined1,
} from '../../api/styledAnt';
import { StyledH3, StyledH5, StyledLabel5, StyledH4, StyledH7 } from '../../api/styledFont';
import { IRankComp, ITag } from '../../api/interface';
import { goBack, goGroupHome, color3 } from '../../api/common';
import Option from '../../component/group/option';

const GroupRegSpot = (): JSX.Element => {
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([
        { rankCompId: 1, rankCompName: '음식', rankCompSelect: false },
        { rankCompId: 2, rankCompName: '가격', rankCompSelect: false },
        { rankCompId: 3, rankCompName: '친절', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
    ]);
    const [tags, setTags] = React.useState<ITag[]>([
        { groupId: 1, tagName: '광어회' },
        { groupId: 1, tagName: '연어회' },
        { groupId: 1, tagName: '고등어회' },
    ]);
    const [searchTag, setSearchTag] = React.useState<string>('');
    const [searchTextSpotName, setSearchTextSpotName] = React.useState<string>('');

    // 태그 입력 내용 저장
    const onSearchTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTag(e.target.value);
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
                tagName: searchTag,
                tagSelect: false,
            },
        ]);
        setSearchTag('');
    };

    // 랭크 클릭
    const onSelectRankComp = (index: number) => {
        const newRankComps = rankComps.slice();
        newRankComps[index].rankCompSelect = !newRankComps[index].rankCompSelect;
        setRankComps(newRankComps);
    };

    // 태그 클릭
    const onDeleteTag = (index: number) => {
        const newTags = tags.slice();
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goGroupHome} />
                            </StyledFlex13>
                            <div style={{ width: '100%', margin: '0 10px' }}>
                                <StyledH4>수찬 커플</StyledH4>
                            </div>
                            <StyledFlex13>
                                <StyledCheckOutlined1 />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>스팟 명</StyledH7>
                        </div>
                        <div>
                            <StyledFlex2>
                                <StyledBorderDiv18>
                                    <StyledBackgroundDiv18>
                                        <StyledText3 placeholder="스팟 명" onChange={onSearchTag} />
                                    </StyledBackgroundDiv18>
                                </StyledBorderDiv18>
                            </StyledFlex2>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>평가항목</StyledH7>
                        </div>
                        <div>
                            <StyledFlex2>
                                <StyledBorderDiv18>
                                    <StyledBackgroundDiv18>
                                        <StyledText3 placeholder="스팟 명" onChange={onSearchTag} />
                                    </StyledBackgroundDiv18>
                                </StyledBorderDiv18>
                            </StyledFlex2>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div>
                            <StyledH7 style={{ color: color3 }}>태그</StyledH7>
                        </div>
                        <div>
                            <StyledFlex2>
                                <StyledBorderDiv18>
                                    <StyledBackgroundDiv18>
                                        <StyledText3 placeholder="스팟 명" onChange={onSearchTag} />
                                    </StyledBackgroundDiv18>
                                </StyledBorderDiv18>
                            </StyledFlex2>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>

            {/* <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={goBack} />
                                <StyledH4>수찬 커플</StyledH4>
                            </div>
                            <div>
                                <StyledH4>생성</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <StyledH5>스팟 명</StyledH5>
                            <StyledBorderDiv1>
                                <StyledBackgroundDiv1>
                                    <StyledText1 placeholder="스팟 명" onChange={onSearchTextSpotName}></StyledText1>
                                </StyledBackgroundDiv1>
                            </StyledBorderDiv1>
                        </div>

                        <div>
                            <StyledH5>옵션</StyledH5>
                            <StyledTabUl1>
                                <StyledTabLi1>
                                    <StyledTabRadio1 id="li1" name="radio1" defaultChecked />
                                    <StyledLabel5 htmlFor="li1">평가항목</StyledLabel5>
                                    <StyledTabDiv1>
                                        <div style={{ margin: '0.5rem 0' }}>
                                            {rankComps.map((rankComp, key) => (
                                                <Option
                                                    rankComp={rankComp}
                                                    onSelectRankComp={onSelectRankComp}
                                                    index={key}
                                                    key={key}
                                                />
                                            ))}
                                        </div>
                                    </StyledTabDiv1>
                                </StyledTabLi1>
                                <StyledTabLi1>
                                    <StyledTabRadio1 id="li2" name="radio1" />
                                    <StyledLabel5 htmlFor="li2">태그</StyledLabel5>
                                    <StyledTabDiv1>
                                        <div style={{ margin: '0.5rem 0' }}>
                                            {tags.map((tag, key) => (
                                                <Option tag={tag} onDeleteTag={onDeleteTag} index={key} key={key} />
                                            ))}
                                            <Option
                                                searchTextTag={searchTextTag}
                                                onSearchTextTag={onSearchTextTag}
                                                onSaveTag={onSaveTag}
                                            />
                                        </div>
                                    </StyledTabDiv1>
                                </StyledTabLi1>
                            </StyledTabUl1>
                        </div>
                    </div>
                </StyledDiv1>
            </StyledNineDiv1> */}
        </>
    );
};

export default GroupRegSpot;
