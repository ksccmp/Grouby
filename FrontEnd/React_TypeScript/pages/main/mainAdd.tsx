import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledTable2,
    StyledTr1,
    StyledTd1,
    StyledFlex16,
    StyledDiv8,
    StyledDiv10,
} from '../../api/styled';
import { StyledH4, StyledH5, StyledH6, StyledH7 } from '../../api/styledFont';
import { StyledRightOutlined1, StyledSettingOutlined1 } from '../../api/styledAnt';
import { IUser } from '../../api/interface';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import { useSelector } from 'react-redux';
import { color3, color4 } from '../../api/common';
import axios from '../../api/axios';

const MainAdd = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);

    const [groupCount, setGroupCount] = React.useState<number>(0);
    const [itemCount, setItemCount] = React.useState<number>(0);
    const [rankCount, setRankCount] = React.useState<number>(0);

    React.useEffect(() => {
        getCount();
    }, []);

    const getCount = async () => {
        const res = await axios.get('/group/selectGroupCount', {
            params: {
                userId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            setGroupCount(res.data.data);
        } else {
            alert('처리 중 오류가 발생했습니다.');
            return;
        }

        const res1 = await axios.get('/item/selectItemCount', {
            params: {
                userId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res1.data.success) {
            setItemCount(res1.data.data);
        } else {
            alert('처리 중 오류가 발생했습니다.');
            return;
        }

        const res2 = await axios.get('/spot/selectRankCount', {
            params: {
                userId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res2.data.success) {
            setRankCount(res2.data.data);
        } else {
            alert('처리 중 오류가 발생했습니다.');
            return;
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                <StyledH4>{reduxUser.userId}</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledSettingOutlined1 />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv10>

                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledH5>{reduxUser.userName}님의 활동</StyledH5>
                    </StyledDiv6>

                    <StyledTable2>
                        <tbody>
                            <StyledTr1>
                                <StyledTd1>
                                    <div>
                                        <StyledH5>그룹</StyledH5>
                                    </div>
                                    <div>
                                        <StyledH5 style={{ color: '#E6951A' }}>{groupCount}</StyledH5>
                                    </div>
                                </StyledTd1>
                                <StyledTd1>
                                    <div>
                                        <StyledH5>아이템</StyledH5>
                                    </div>
                                    <div>
                                        <StyledH5 style={{ color: '#E6951A' }}>{itemCount}</StyledH5>
                                    </div>
                                </StyledTd1>
                                <StyledTd1>
                                    <div>
                                        <StyledH5>평가</StyledH5>
                                    </div>
                                    <div>
                                        <StyledH5 style={{ color: '#E6951A' }}>{rankCount}</StyledH5>
                                    </div>
                                </StyledTd1>
                            </StyledTr1>
                        </tbody>
                    </StyledTable2>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <StyledFlex16>
                            <div>
                                <StyledH5>공지사항</StyledH5>
                                <StyledH7 style={{ color: color4, marginLeft: '5px' }}>오픈예정</StyledH7>
                            </div>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex16>
                        <StyledFlex16>
                            <div>
                                <StyledH5>고객센터</StyledH5>
                                <StyledH7 style={{ color: color4, marginLeft: '5px' }}>오픈예정</StyledH7>
                            </div>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex16>
                        <StyledFlex16>
                            <div>
                                <StyledH5>현재버전</StyledH5>
                            </div>
                            <div>
                                <StyledH6 style={{ color: color3 }}>Beta</StyledH6>
                            </div>
                        </StyledFlex16>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default MainAdd;
