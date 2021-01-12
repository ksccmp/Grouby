import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledText2,
    StyledDiv8,
} from '../../api/styled';
import { StyledH4_1, StyledH5, StyledH4 } from '../../api/styledFont';
import Rank from '../../component/spot/rank';
import { IGroup, IRank, ISpot } from '../../api/interface';
import { getTime, goSpotRating } from '../../api/common';
import { StyledCheckOutlined1, StyledEditOutlined1, StyledFileAddOutlined1 } from '../../api/styledAnt';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';

export interface IChangeRank {
    regId: string;
    modDate: string;
    ranks: IRank[];
}

const SpotRanks = (): JSX.Element => {
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);

    const [changeRanks, setChangeRanks] = React.useState<IChangeRank[]>([]);
    const [spotName, setSpotName] = React.useState<string>('');
    const [modSpotName, setModSpoName] = React.useState<boolean>(false);

    React.useEffect(() => {
        setSpotName(reduxSpot.spotName);
        getChangeRanks();
    }, []);

    // 서버에서 changeRanks 가져오기
    const getChangeRanks = async () => {
        const res = await axios.get('/spot/selectRanksBySpotId', {
            params: {
                spotId: reduxSpot.spotId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        setChangeRanks(res.data.data);
    };

    const onSpotName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpotName(e.target.value);
    };

    const onModSpotName = async () => {
        setModSpoName(!modSpotName);

        if (modSpotName) {
            reduxSpot.spotName = spotName;

            const res = await axios.put('/spot/updateSpotName', reduxSpot, {
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (!res.data.success) {
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
                            <StyledDiv8>
                                {modSpotName ? (
                                    <StyledText2 value={spotName} onChange={onSpotName} />
                                ) : (
                                    <>
                                        <StyledH5 style={{ opacity: '0.6', marginRight: '5px' }}>
                                            {reduxGroup.groupName}
                                        </StyledH5>
                                        <StyledH4>{reduxSpot.spotName}</StyledH4>
                                    </>
                                )}
                            </StyledDiv8>
                            {modSpotName ? (
                                <StyledFlex13>
                                    <StyledCheckOutlined1 onClick={onModSpotName} />
                                </StyledFlex13>
                            ) : (
                                <StyledFlex13>
                                    <StyledEditOutlined1 onClick={onModSpotName} />
                                    <StyledFileAddOutlined1 onClick={goSpotRating} />
                                </StyledFlex13>
                            )}
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <div>
                    {changeRanks.map((changeRank, key) => (
                        <Rank changeRank={changeRank} key={key} />
                    ))}
                </div>
            </StyledDiv1>
        </>
    );
};

export default SpotRanks;
