import * as React from 'react';
import {
    StyledFixed1,
    StyledDiv1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex2,
    StyledFlex13,
    StyledFlex16,
    StyledFlex17,
    StyledRadio2,
    StyledFlex9,
    StyledFixed3,
    StyledNavUl2,
    StyledNavLi2,
    StyledButton4,
    StyledDiv10,
} from '../../api/styled';
import {
    StyledCheckCircleOutlined3,
    StyledCheckCircleFilled3,
    StyledLeftOutlined2,
    StyledCaretUpOutlined1,
    StyledCaretDownOutlined,
} from '../../api/styledAnt';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { IRankComp } from '../../api/interface';

interface IFilterRankComp {
    openFilterRankComp: boolean;
    onOpenFilterRankComp: () => void;
    rankComps: IRankComp[];
    setRankComps: React.Dispatch<React.SetStateAction<IRankComp[]>>;
}

const FilterRankComp: React.FC<IFilterRankComp> = ({
    openFilterRankComp,
    onOpenFilterRankComp,
    rankComps,
    setRankComps,
}): JSX.Element => {
    const [checkCircle, setCheckCircle] = React.useState<number>(-1);

    // 화살표 클릭 시 Rank별 오름/내림 차순 변경
    const onOutLine = (index: number) => {
        const newRankComps = rankComps.slice();
        newRankComps[index].rankCompOrder = ((newRankComps[index].rankCompOrder as number) + 1) % 3;
        setRankComps(newRankComps);
    };

    // Rank 클릭 시 선택된 Rank 저장
    const onCheckCircle = (index: number) => {
        if (checkCircle === index) {
            setCheckCircle(-1);
        } else {
            setCheckCircle(index);
        }
    };

    // 위로 버튼 클릭 시 Rank 위치 변경
    const onUpRankComp = () => {
        const newRankComps = rankComps.slice();
        // 클릭 된 위치와 상위에 있는 위치 변경, 클릭 된 위치가 최상위 일때는 원래 위치로
        const temp = newRankComps[checkCircle];
        newRankComps[checkCircle] = newRankComps[checkCircle === 0 ? 0 : checkCircle - 1];
        newRankComps[checkCircle === 0 ? 0 : checkCircle - 1] = temp;
        setRankComps(newRankComps);
        setCheckCircle(checkCircle === 0 ? 0 : checkCircle - 1);
    };

    // 아래로 버튼 클릭 시 Rank 위치 변경
    const onDownRankComp = () => {
        const newRankComps = rankComps.slice();
        // 클릭 된 위치와 하위에 있는 위치 변경, 클릭 된 위치가 최하위 일때는 원래 위치로
        const temp = newRankComps[checkCircle];
        newRankComps[checkCircle] =
            newRankComps[checkCircle === newRankComps.length - 1 ? newRankComps.length - 1 : checkCircle + 1];
        newRankComps[checkCircle === newRankComps.length - 1 ? newRankComps.length - 1 : checkCircle + 1] = temp;
        setRankComps(newRankComps);
        setCheckCircle(checkCircle === newRankComps.length - 1 ? newRankComps.length - 1 : checkCircle + 1);
    };

    const changeTest = () => {
        console.log('change');
    };

    return (
        <>
            <StyledFixed1 open={openFilterRankComp}>
                <StyledDiv1>
                    <StyledDiv10>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={onOpenFilterRankComp} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledH4>필터</StyledH4>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv10>

                    <StyledDiv5>
                        <StyledDiv6>
                            <div>
                                {rankComps.map((rankComp, key) => (
                                    <StyledFlex16 key={key}>
                                        <StyledFlex17>
                                            <StyledRadio2
                                                id={String(key)}
                                                checked={checkCircle === key}
                                                onChange={changeTest}
                                            />
                                            <div onClick={() => onCheckCircle(key)}>
                                                <label htmlFor={String(key)}>
                                                    <StyledCheckCircleOutlined3 />
                                                </label>
                                                <label htmlFor={String(key)}>
                                                    <StyledCheckCircleFilled3 />
                                                </label>
                                            </div>
                                            <StyledH5 style={{ margin: '0 0.3rem' }}>{rankComp.rankCompName}</StyledH5>
                                        </StyledFlex17>
                                        <StyledFlex9 onClick={() => onOutLine(key)}>
                                            <StyledCaretUpOutlined1 fill={String(rankComp.rankCompOrder === 1)} />
                                            <StyledCaretDownOutlined fill={String(rankComp.rankCompOrder === 2)} />
                                        </StyledFlex9>
                                    </StyledFlex16>
                                ))}
                            </div>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>

                <StyledFixed3 open={openFilterRankComp && checkCircle !== -1}>
                    <StyledDiv1>
                        <StyledDiv6>
                            <StyledNavUl2>
                                <StyledNavLi2 onClick={onUpRankComp}>
                                    <StyledButton4 line="left">위로</StyledButton4>
                                </StyledNavLi2>
                                <StyledNavLi2 onClick={onDownRankComp}>
                                    <StyledButton4 line="right">아래로</StyledButton4>
                                </StyledNavLi2>
                            </StyledNavUl2>
                        </StyledDiv6>
                    </StyledDiv1>
                </StyledFixed3>
            </StyledFixed1>
        </>
    );
};

export default FilterRankComp;
