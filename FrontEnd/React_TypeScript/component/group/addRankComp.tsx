import * as React from 'react';
import {
    StyledFixed1,
    StyledDiv1,
    StyledDiv5,
    StyledDiv6,
    StyledFlex2,
    StyledBorderDiv18,
    StyledBackgroundDiv18,
    StyledText3,
    StyledFlex13,
    StyledFlex16,
    StyledFlex17,
} from '../../api/styled';
import { StyledCheckCircleOutlined3, StyledCheckCircleFilled3, StyledLeftOutlined2 } from '../../api/styledAnt';
import { StyledH5, StyledH7 } from '../../api/styledFont';
import { IRankComp } from '../../api/interface';
import { color3 } from '../../api/common';

interface IAddRankComp {
    openAddRankComp: boolean;
    onOpenAddRankComp: () => void;
    rankComps: IRankComp[];
    setRankComps: React.Dispatch<React.SetStateAction<IRankComp[]>>;
}

const AddRankComp: React.FC<IAddRankComp> = ({
    openAddRankComp,
    onOpenAddRankComp,
    rankComps,
    setRankComps,
}): JSX.Element => {
    const [searchRankComp, setSearchRankComp] = React.useState<string>('');

    const onSearchRankComp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchRankComp(e.target.value);
    };

    const getFilterRankComp = () => {
        return rankComps.filter((rankComp) => rankComp.rankCompName.includes(searchRankComp));
    };

    // 랭크 클릭
    const onSelectRankComp = (index: number) => {
        const newRankComps = rankComps.slice();
        newRankComps[index].rankCompSelect = !newRankComps[index].rankCompSelect;
        setRankComps(newRankComps);
    };

    return (
        <>
            <StyledFixed1 open={openAddRankComp}>
                <StyledDiv1>
                    <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={onOpenAddRankComp} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="평가항목 검색" onChange={onSearchRankComp} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv5>

                    <StyledDiv5>
                        <StyledDiv6>
                            <div>
                                {getFilterRankComp().length > 0 && (
                                    <StyledH7 style={{ color: color3 }}>평가항목</StyledH7>
                                )}
                            </div>

                            <div>
                                {getFilterRankComp().map((rank, key) => (
                                    <StyledFlex16 key={key}>
                                        <StyledFlex17>
                                            <StyledH5>{rank.rankCompName}</StyledH5>
                                        </StyledFlex17>
                                        <div onClick={() => onSelectRankComp(key)}>
                                            {rank.rankCompSelect ? (
                                                <StyledCheckCircleFilled3 />
                                            ) : (
                                                <StyledCheckCircleOutlined3 />
                                            )}
                                        </div>
                                    </StyledFlex16>
                                ))}
                            </div>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>
            </StyledFixed1>
        </>
    );
};

export default AddRankComp;
