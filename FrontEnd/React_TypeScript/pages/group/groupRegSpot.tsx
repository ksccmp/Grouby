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
    StyledDiv8,
} from '../../api/styled';
import { StyledLeftOutlined2, StyledCheckOutlined1, StyledPlusCircleOutlined5 } from '../../api/styledAnt';
import { StyledH4, StyledH7, StyledH6 } from '../../api/styledFont';
import { IRankComp, ITag, ISpotRank, IUser, ISpot, IGroup } from '../../api/interface';
import { goGroupHome, color3 } from '../../api/common';
import AddRankComp from '../../component/group/addRankComp';
import AddTag from '../../component/group/addTag';
import axios from '../../api/axios';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';

const GroupRegSpot = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);

    const [rankComps, setRankComps] = React.useState<IRankComp[]>([]);
    const [tags, setTags] = React.useState<ITag[]>([]);
    const [inputSpotName, setInputSpotName] = React.useState<string>('');
    const [openAddRankComp, setOpenAddRankComp] = React.useState<boolean>(false);
    const [openAddTag, setOpenAddTag] = React.useState<boolean>(false);

    React.useEffect(() => {
        getRankComps();
    }, []);

    const getRankComps = async () => {
        const res = await axios.get('/spot/selectAllRankComp', {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            setRankComps(res.data.data);
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    // 스팟 명 입력 내용 저장
    const onInputSpotName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSpotName(e.target.value);
    };

    const onOpenAddRankComp = () => {
        setOpenAddRankComp(!openAddRankComp);
    };

    const onOpenAddTag = () => {
        setOpenAddTag(!openAddTag);
    };

    const getFilterRankComps = () => {
        return rankComps.filter((rankComp) => rankComp.rankCompSelect !== false);
    };

    const onCreateSpot = async () => {
        const spotRanks: ISpotRank[] = [];

        getFilterRankComps().map((rankComp) => {
            const newSpotRank: ISpotRank = {
                rankCompId: rankComp.rankCompId,
                regId: reduxUser.userId,
            };

            spotRanks.push(newSpotRank);
        });

        if (spotRanks.length === 0) {
            alert('평가항목은 적어도 하나 선택해야 됩니다.');
        } else {
            const newSpot: ISpot = {
                spotName: inputSpotName,
                groupId: reduxGroup.groupId,
                regId: reduxUser.userId,
                spotRanks: spotRanks,
                tags: tags,
            };

            const res = await axios.post('/spot/createSpot', newSpot, {
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (res.data.success) {
                alert('스팟 생성이 완료되었습니다.');
                goGroupHome();
            } else {
                alert('처리 중 오류가 발생했습니다.');
            }
        }
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
                            <StyledDiv8>
                                <StyledH4>스팟 생성</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 onClick={onCreateSpot} />
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
                                        <StyledText3 placeholder="스팟 명" onChange={onInputSpotName} />
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
                            {getFilterRankComps().map((rankComp, key) => (
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

            <AddRankComp
                openAddRankComp={openAddRankComp}
                onOpenAddRankComp={onOpenAddRankComp}
                rankComps={rankComps}
                setRankComps={setRankComps}
            />
            <AddTag openAddTag={openAddTag} onOpenAddTag={onOpenAddTag} tags={tags} setTags={setTags} />
        </>
    );
};

export default GroupRegSpot;
