import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv4,
    StyledBackgroundDiv4,
    StyledDiv5,
    StyledDiv6,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledFlex13,
    StyledFlex19,
    StyledDiv7,
    StyledDiv8,
    StyledDiv10,
} from '../../api/styled';
import { StyledSearchOutlined1, StyledAppstoreAddOutlined1 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import SpotCard from '../../component/group/spotCard';
import { ISpot, IRank, IRankComp, IGroup, ITag } from '../../api/interface';
import { goGroupRegSpot, color3 } from '../../api/common';
import FilterRankComp from '../../component/group/filterRankComp';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';

const GroupHome = (): JSX.Element => {
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const [spots, setSpots] = React.useState<ISpot[]>([]);
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([]); // rankCompOrder => 0: 소트 x / 1: 오름차순 / 2: 내림차순
    const [searchSpot, setSearchSpot] = React.useState<string>('');
    const [openFilterRankComp, setOpenFilterRankComp] = React.useState<boolean>(false);
    const [openSearchSpot, setOpenSearchSpot] = React.useState<boolean>(false);

    React.useEffect(() => {
        getSpots();
        getRankComps();
    }, []);

    const getSpots = async () => {
        const res = await axios.get('/spot/selectSpotByGroupId', {
            params: {
                groupId: reduxGroup.groupId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            setSpots(res.data.data);
        } else {
            alert('처리 중 에러가 발생했습니다.');
        }
    };

    const getRankComps = async () => {
        const res = await axios.get('/spot/selectAllRankCompByGroupId', {
            params: {
                groupId: reduxGroup.groupId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            setRankComps(res.data.data);
        } else {
            alert('처리 중 에러가 발생했습니다.');
        }
    };

    // 필터창 열기/닫기
    const onOpenFilterRankComp = () => {
        setOpenFilterRankComp(!openFilterRankComp);
    };

    // 검색어 저장
    const onSearchSpot = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSpot(e.target.value);
    };

    // Sort함수에 들어갈 Rank별 상수값 구하기
    const getSort = (a: ISpot, b: ISpot, rankCompId: number, rankCompOrder: number): number => {
        switch (rankCompOrder) {
            // 오름차순
            case 1:
                // 비교할 두 스팟이 Sort할 Rank를 모두 소유하고 있을 시 차이값 구하기
                // return (a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) &&
                //     (b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                //     ? ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore -
                //           ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                //     : 0;
                return (
                    ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                        ? ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                        : 6) -
                    ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                        ? ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                        : 6)
                );
            // 내림차순
            case 2:
                // 비교할 두 스팟이 Sort할 Rank를 모두 소유하고 있을 시 차이값 구하기
                // return (a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) &&
                //     (b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                //     ? ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore -
                //           ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                //     : 0;
                return (
                    ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                        ? ((b.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                        : 0) -
                    ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId)
                        ? ((a.ranks as IRank[]).find((rank) => rank.rankCompId === rankCompId) as IRank).rankScore
                        : 0)
                );
            // Sort X
            default:
                return 0;
        }
    };

    // 검색 창 오픈
    const onOpenSearchSpot = () => {
        setOpenSearchSpot(!openSearchSpot);
    };

    // 필터 된 spot 값 리턴
    const getFilterSpots = (): ISpot[] => {
        return (
            spots
                // 랭크 별 Sort
                .sort((a, b) =>
                    rankComps.reduce(
                        (prev, cur) => prev || getSort(a, b, cur.rankCompId, cur.rankCompOrder as number),
                        0,
                    ) !== 0
                        ? rankComps.reduce(
                              (prev, cur) => prev || getSort(a, b, cur.rankCompId, cur.rankCompOrder as number),
                              0,
                          )
                        : (a.regDate as string) > (b.regDate as string)
                        ? 1
                        : -1,
                )
                // 검색어가 포함된 것만 Filter
                .filter(
                    (spot) =>
                        spot.spotName.includes(searchSpot) ||
                        (spot.ranks as IRank[]).filter((rank) => rank.rankCompName.includes(searchSpot)).length > 0 ||
                        ((spot.tags as ITag[]).length > 0 &&
                            (spot.tags as ITag[]).filter((tag) => tag.tagName.includes(searchSpot)).length > 0),
                )
        );
    };

    // 필터 된 rankComp 값 리턴
    const getFilterRankComps = (): IRankComp[] => {
        // 오름/내림차순이 정해져있는 것만 Filter
        return rankComps.filter((rankComp) => rankComp.rankCompOrder !== 0);
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                {openSearchSpot ? (
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="스팟 검색" onChange={onSearchSpot} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                ) : (
                                    <StyledH4>{reduxGroup.groupName}</StyledH4>
                                )}
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchSpot} />
                                <StyledAppstoreAddOutlined1 onClick={goGroupRegSpot} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>

                    <StyledDiv6>
                        <StyledFlex19>
                            <StyledBorderDiv4 onClick={onOpenFilterRankComp}>
                                <StyledBackgroundDiv4>
                                    {getFilterRankComps().map((rankComp, key) => (
                                        <StyledH7 key={key} style={{ marginLeft: key === 0 ? '15px' : '5px' }}>
                                            {rankComp.rankCompName}
                                            {rankComp.rankCompOrder === 2 ? '↓' : '↑'}
                                        </StyledH7>
                                    ))}
                                    {getFilterRankComps().length === 0 ? (
                                        <StyledH7 style={{ marginLeft: '15px' }}>필터를 추가하세요.</StyledH7>
                                    ) : (
                                        ''
                                    )}
                                </StyledBackgroundDiv4>
                            </StyledBorderDiv4>
                        </StyledFlex19>
                    </StyledDiv6>
                </StyledDiv10>

                <StyledDiv5>
                    <StyledDiv6>
                        <div>
                            {getFilterSpots().length > 0 && (
                                <StyledH7 style={{ color: color3 }}>스팟 {getFilterSpots().length}</StyledH7>
                            )}
                        </div>

                        <StyledDiv7>
                            {getFilterSpots().map((spot, key) => {
                                return <SpotCard spot={spot} key={key} />;
                            })}
                        </StyledDiv7>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>

            <FilterRankComp
                openFilterRankComp={openFilterRankComp}
                onOpenFilterRankComp={onOpenFilterRankComp}
                rankComps={rankComps}
                setRankComps={setRankComps}
            />
        </>
    );
};

export default GroupHome;
