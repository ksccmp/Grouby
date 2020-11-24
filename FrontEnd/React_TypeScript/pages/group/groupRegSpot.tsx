import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledBorderDiv20,
    StyledBackgroundDiv20,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledCheckOutlined1, StyledPlusCircleOutlined5 } from '../../api/styledAnt';
import { StyledH4, StyledH7, StyledH6 } from '../../api/styledFont';
import { IRankComp, ITag } from '../../api/interface';
import { goGroupHome, color3 } from '../../api/common';
import AddRankComp from '../../component/group/addRankComp';
import AddTag from '../../component/group/addTag';

const GroupRegSpot = (): JSX.Element => {
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([
        { rankCompId: 1, rankCompName: '음식', rankCompSelect: false },
        { rankCompId: 2, rankCompName: '가격', rankCompSelect: false },
        { rankCompId: 3, rankCompName: '친절', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
        { rankCompId: 4, rankCompName: '화장실', rankCompSelect: false },
    ]);
    const [tags, setTags] = React.useState<ITag[]>([
        { groupId: 1, tagName: '광어회' },
        { groupId: 1, tagName: '연어회' },
        { groupId: 1, tagName: '고등어회' },
    ]);
    const [searchSpotName, setSearchSpotName] = React.useState<string>('');
    const [openAddRankComp, setOpenAddRankComp] = React.useState<boolean>(false);
    const [openAddTag, setOpenAddTag] = React.useState<boolean>(false);

    // 스팟 명 입력 내용 저장
    const onSearchSpotName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSpotName(e.target.value);
    };

    const onOpenAddRankComp = () => {
        setOpenAddRankComp(!openAddRankComp);
    };

    const onOpenAddTag = () => {
        setOpenAddTag(!openAddTag);
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
                                <StyledH4>스팟 생성</StyledH4>
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
                                        <StyledText3 placeholder="스팟 명" onChange={onSearchSpotName} />
                                    </StyledBackgroundDiv18>
                                </StyledBorderDiv18>
                            </StyledFlex2>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <StyledH7 style={{ color: color3 }}>평가항목</StyledH7>
                        </div>
                        <div>
                            {rankComps.map((rankComp, key) => (
                                <StyledBorderDiv20 key={key} style={{ marginRight: '0.5rem' }}>
                                    <StyledBackgroundDiv20>
                                        <StyledH6>{rankComp.rankCompName}</StyledH6>
                                    </StyledBackgroundDiv20>
                                </StyledBorderDiv20>
                            ))}
                            <StyledBorderDiv20 style={{ marginRight: '0.5rem' }} onClick={onOpenAddRankComp}>
                                <StyledBackgroundDiv20>
                                    <StyledPlusCircleOutlined5 />
                                </StyledBackgroundDiv20>
                            </StyledBorderDiv20>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <StyledH7 style={{ color: color3 }}>태그</StyledH7>
                        </div>
                        <div>
                            {tags.map((tag, key) => (
                                <StyledBorderDiv20 key={key} style={{ marginRight: '0.5rem' }}>
                                    <StyledBackgroundDiv20>
                                        <StyledH6>{tag.tagName}</StyledH6>
                                    </StyledBackgroundDiv20>
                                </StyledBorderDiv20>
                            ))}
                            <StyledBorderDiv20 style={{ marginRight: '0.5rem' }} onClick={onOpenAddTag}>
                                <StyledBackgroundDiv20>
                                    <StyledPlusCircleOutlined5 />
                                </StyledBackgroundDiv20>
                            </StyledBorderDiv20>
                        </div>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>

            <AddRankComp openAddRankComp={openAddRankComp} onOpenAddRankComp={onOpenAddRankComp} />
            <AddTag openAddTag={openAddTag} onOpenAddTag={onOpenAddTag} />
        </>
    );
};

export default GroupRegSpot;
