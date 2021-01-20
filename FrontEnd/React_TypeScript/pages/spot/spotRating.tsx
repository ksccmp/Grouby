import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledDiv8,
    StyledDiv10,
} from '../../api/styled';
import { StyledH4 } from '../../api/styledFont';
import { StyledLeftOutlined2, StyledCheckOutlined1 } from '../../api/styledAnt';
import { goSpotRanks } from '../../api/common';
import StarScore from '../../component/spot/starScore';
import { IRank, ISpot, IUser } from '../../api/interface';
import axios from '../../api/axios';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';

const spotRating = (): JSX.Element => {
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [ranks, setRanks] = React.useState<IRank[]>([]);

    React.useEffect(() => {
        getRanks();
    }, []);

    const getRanks = async () => {
        const res = await axios.get('/spot/selectRankComp', {
            params: {
                spotId: reduxSpot.spotId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        setRanks(res.data.data);
    };

    // 별 클릭 시 해당 점수 부여
    const onRanks = (index: number, rankScore: number) => {
        const newRanks: IRank[] = ranks.slice();
        newRanks[index].rankScore = rankScore;
        setRanks(newRanks);
    };

    const regRanks = async () => {
        console.log(ranks);

        ranks.map((rank) => (rank.regId = reduxUser.userId));

        const res = await axios.post('/spot/createRanks', ranks, {
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            goSpotRanks();
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledFlex13>
                                <StyledLeftOutlined2 onClick={goSpotRanks} />
                            </StyledFlex13>
                            <StyledDiv8>
                                <StyledH4>평가</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledCheckOutlined1 onClick={regRanks} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

                <StyledDiv5>
                    <StyledDiv6>
                        {ranks
                            ? ranks.map((rank, key) => {
                                  return <StarScore rank={rank} onRanks={onRanks} index={key} key={key} />;
                              })
                            : ''}
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default spotRating;
