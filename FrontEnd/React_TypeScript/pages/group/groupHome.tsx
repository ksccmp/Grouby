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
} from '../../api/styled';
import { StyledSearchOutlined1, StyledAppstoreAddOutlined1 } from '../../api/styledAnt';
import { StyledH4, StyledH7 } from '../../api/styledFont';
import SpotCard from '../../component/group/spotCard';
import { ISpot, IRank, IRankComp } from '../../api/interface';
import { goGroupRegSpot, getTime, color3 } from '../../api/common';
import FilterRankComp from '../../component/group/filterRankComp';

export interface IChangeSpot extends ISpot {
    ranks: IRank[];
}

const GroupHome = (): JSX.Element => {
    const [spots, setSpots] = React.useState<IChangeSpot[]>([
        {
            spotId: 1,
            spotName: '사당 요란한부엌',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 20,
            todayRank: 2,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 4,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 3,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 2,
            spotName: '평택 요계닭',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'intan',
            totalRank: 32,
            todayRank: 5,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 3,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 3,
            spotName: '안양 다코야끼',
            groupId: 1,
            groupName: '수찬 커플',
            regId: 'ksccmp',
            totalRank: 14,
            todayRank: 0,
            regDate: getTime(),
            modDate: getTime(),
            ranks: [
                {
                    spotId: 1,
                    rankCompId: 1,
                    rankCompName: '음식',
                    rank: 5,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 2,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 4,
                    rankCompName: '가격',
                    rank: 1,
                    regDate: getTime(),
                },
            ],
        },
    ]);
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([
        // rankCompOrder => 0: 소트 x / 1: 오름차순 / 2: 내림차순
        {
            rankCompId: 1,
            rankCompName: '음식',
            rankCompOrder: 0,
        },
        {
            rankCompId: 3,
            rankCompName: '화장실',
            rankCompOrder: 0,
        },
    ]);
    const [searchSpot, setSearchSpot] = React.useState<string>('');
    const [openFilterRankComp, setOpenFilterRankComp] = React.useState<boolean>(false);
    const [openSearchSpot, setOpenSearchSpot] = React.useState<boolean>(false);

    // 필터창 열기/닫기
    const onOpenFilterRankComp = () => {
        setOpenFilterRankComp(!openFilterRankComp);
    };

    // 검색어 저장
    const onSearchSpot = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSpot(e.target.value);
    };

    // Sort함수에 들어갈 Rank별 상수값 구하기
    const getSort = (a: IChangeSpot, b: IChangeSpot, rankCompId: number, rankCompOrder: number): number => {
        switch (rankCompOrder) {
            // 오름차순
            case 1:
                // 비교할 두 스팟이 Sort할 Rank를 모두 소유하고 있을 시 차이값 구하기
                return a.ranks.find((rank) => rank.rankCompId === rankCompId) &&
                    b.ranks.find((rank) => rank.rankCompId === rankCompId)
                    ? (a.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank -
                          (b.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank
                    : 0;
            // 내림차순
            case 2:
                // 비교할 두 스팟이 Sort할 Rank를 모두 소유하고 있을 시 차이값 구하기
                return a.ranks.find((rank) => rank.rankCompId === rankCompId) &&
                    b.ranks.find((rank) => rank.rankCompId === rankCompId)
                    ? (b.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank -
                          (a.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank
                    : 0;
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
    const getFilterSpots = (): IChangeSpot[] => {
        return (
            spots
                // 랭크 별 Sort
                .sort((a, b) =>
                    rankComps.reduce(
                        (prev, cur) => prev || getSort(a, b, cur.rankCompId, cur.rankCompOrder as number),
                        0,
                    ),
                )
                // 검색어가 포함된 것만 Filter
                .filter(
                    (spot) =>
                        spot.spotName.includes(searchSpot) ||
                        spot.ranks.filter((rank) => rank.rankCompName.includes(searchSpot)).length > 0,
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
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
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
                                    <StyledH4>수찬 커플</StyledH4>
                                )}
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledSearchOutlined1 onClick={onOpenSearchSpot} />
                                <StyledAppstoreAddOutlined1 onClick={goGroupRegSpot} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
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
                </StyledDiv5>

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
