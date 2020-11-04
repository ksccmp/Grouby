import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledBorderDiv4,
    StyledBackgroundDiv4,
    StyledGrid1,
    StyledFlex1,
    StyledWidthLine1,
    StyledNineDiv2,
    StyledFixed1,
    StyledFixed3,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH7, StyledH5 } from '../../api/styledFont';
import SpotCard from '../../component/group/spotCard';
import { ISpot, IRank, IRankComp } from '../../api/interface';
import { goBack, goGroupRegSpot, getTime } from '../../api/common';
import RankComp from '../../component/group/rankComp';

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
                    rankCompId: 2,
                    rankCompName: '친절',
                    rank: 3,
                    regDate: getTime(),
                },
                {
                    spotId: 1,
                    rankCompId: 3,
                    rankCompName: '화장실',
                    rank: 5,
                    regDate: getTime(),
                },
            ],
        },
        {
            spotId: 2,
            spotName: '평택 폐계닭',
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
                    rankCompId: 2,
                    rankCompName: '친절',
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
            ],
        },
    ]);
    const [rankComps, setRankComps] = React.useState<IRankComp[]>([
        {
            rankCompId: 1,
            rankCompName: '음식',
            rankOrder: 2, // 내림차순
        },
        {
            rankCompId: 2,
            rankCompName: '친절',
            rankOrder: 0, // 소트 x
        },
        {
            rankCompId: 3,
            rankCompName: '화장실',
            rankOrder: 1, // 오름차순
        },
    ]);
    const [searchText, setSearchTest] = React.useState<string>('');
    const [openFilter, setOpenFilter] = React.useState<boolean>(false);
    const [checkCircle, setCheckCircle] = React.useState<number>(-1);

    const onOpenFilter = () => {
        setOpenFilter(!openFilter);
    };

    const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTest(e.target.value);
    };

    const onOutLine = (index: number) => {
        const newRankComps = rankComps.slice();
        newRankComps[index].rankOrder = (newRankComps[index].rankOrder + 1) % 3;
        setRankComps(newRankComps);
    };

    const onCheckCircle = (index: number) => {
        setCheckCircle(index);
    };

    const onUpRankComp = () => {
        const newRankComps = rankComps.slice();
        const temp = newRankComps[checkCircle];
        newRankComps[checkCircle] = newRankComps[checkCircle - 1 < 0 ? 0 : checkCircle - 1];
        newRankComps[checkCircle - 1 < 0 ? 0 : checkCircle - 1] = temp;
        setRankComps(newRankComps);
        setCheckCircle(checkCircle - 1 < 0 ? 0 : checkCircle - 1);
    };

    const onDownRankComp = () => {
        const newRankComps = rankComps.slice();
        const temp = newRankComps[checkCircle];
        newRankComps[checkCircle] =
            newRankComps[checkCircle + 1 >= newRankComps.length ? newRankComps.length - 1 : checkCircle + 1];
        newRankComps[checkCircle + 1 >= newRankComps.length ? newRankComps.length - 1 : checkCircle + 1] = temp;
        setRankComps(newRankComps);
        setCheckCircle(checkCircle + 1 >= newRankComps.length ? newRankComps.length - 1 : checkCircle + 1);
    };

    const getSort = (a: IChangeSpot, b: IChangeSpot, rankCompId: number, rankOrder: number): number => {
        switch (rankOrder) {
            case 1:
                return a.ranks.find((rank) => rank.rankCompId === rankCompId) &&
                    b.ranks.find((rank) => rank.rankCompId === rankCompId)
                    ? (a.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank -
                          (b.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank
                    : 0;
            case 2:
                return a.ranks.find((rank) => rank.rankCompId === rankCompId) &&
                    b.ranks.find((rank) => rank.rankCompId === rankCompId)
                    ? (b.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank -
                          (a.ranks.find((rank) => rank.rankCompId === rankCompId) as IRank).rank
                    : 0;
            default:
                return 0;
        }
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹명</StyledH3>
                        </div>
                        <div onClick={goGroupRegSpot}>
                            <StyledH3>등록</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledBorderDiv1>
                        <StyledBackgroundDiv1>
                            <StyledText1 placeholder="검색" onChange={onSearchText}></StyledText1>
                        </StyledBackgroundDiv1>
                    </StyledBorderDiv1>

                    <StyledBorderDiv4 onClick={onOpenFilter}>
                        <StyledBackgroundDiv4>
                            {rankComps.map((rankComp, key) =>
                                rankComp.rankOrder !== 0 ? (
                                    <StyledH7 key={key}>
                                        #{rankComp.rankCompName}
                                        {rankComp.rankOrder === 2 ? '↓' : '↑'}
                                    </StyledH7>
                                ) : (
                                    ''
                                ),
                            )}
                        </StyledBackgroundDiv4>
                    </StyledBorderDiv4>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledGrid1>
                        <StyledFlex1>
                            <StyledWidthLine1 />
                        </StyledFlex1>
                        <StyledH5>{spots.length}건</StyledH5>
                        <StyledFlex1>
                            <StyledWidthLine1 />
                        </StyledFlex1>
                    </StyledGrid1>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                {spots
                    .sort((a, b) =>
                        rankComps.reduce((prev, cur) => prev || getSort(a, b, cur.rankCompId, cur.rankOrder), 0),
                    )
                    .map((spot, key) => (
                        <SpotCard spot={spot} key={key} />
                    ))}
            </StyledNineDiv2>

            <StyledFixed1 open={openFilter}>
                <StyledNineDiv2 style={{ paddingBottom: '45px', position: 'relative' }}>
                    <StyledDiv1>
                        <StyledFlex2>
                            <div>
                                <StyledLeftOutLined1 onClick={onOpenFilter} />
                                <StyledH3>필터</StyledH3>
                            </div>
                        </StyledFlex2>

                        {rankComps.map((rankComp, key) => (
                            <RankComp
                                rankComp={rankComp}
                                onOutLine={onOutLine}
                                onCheckCircle={onCheckCircle}
                                index={key}
                                checkCircle={checkCircle}
                                key={key}
                            />
                        ))}
                    </StyledDiv1>
                </StyledNineDiv2>

                <StyledFixed3 open={openFilter && checkCircle !== -1}>
                    <StyledNineDiv2>
                        <div onClick={onUpRankComp}>위로</div>
                        <div onClick={onDownRankComp}>아래로</div>
                    </StyledNineDiv2>
                </StyledFixed3>
            </StyledFixed1>
        </>
    );
};

export default GroupHome;
