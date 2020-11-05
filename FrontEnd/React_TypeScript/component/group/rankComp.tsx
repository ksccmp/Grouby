import * as React from 'react';
import { StyledBorderDiv3, StyledBackgroundDiv3, StyledExternalDiv3, StyledRadio2 } from '../../api/styled';
import { StyledH4_1 } from '../../api/styledFont';
import {
    StyledCaretUpOutlined1,
    StyledCaretDownOutlined,
    StyledCheckCircleOutlined1,
    StyledCheckCircleFilled1,
} from '../../api/styledAnt';
import { IRankComp } from '../../api/interface';

interface IChangeRankComp {
    rankComp: IRankComp;
    onOutLine: (index: number) => void;
    onCheckCircle: (index: number) => void;
    index: number;
    checkCircle: number;
}

const RankComp: React.FC<IChangeRankComp> = ({
    rankComp,
    onOutLine,
    onCheckCircle,
    index,
    checkCircle,
}): JSX.Element => {
    const change = () => {
        return 0;
    };

    return (
        <StyledBorderDiv3>
            <StyledBackgroundDiv3>
                <StyledRadio2 id={String(index)} checked={checkCircle === index} onChange={change} />
                <div onClick={() => onCheckCircle(index)}>
                    <label htmlFor={String(index)}>
                        <StyledCheckCircleOutlined1 />
                    </label>
                    <label htmlFor={String(index)}>
                        <StyledCheckCircleFilled1 />
                    </label>
                </div>
                <StyledH4_1>{rankComp.rankCompName}</StyledH4_1>
                <StyledExternalDiv3 onClick={() => onOutLine(index)}>
                    <StyledCaretUpOutlined1 fill={rankComp.rankCompOrder === 1} />
                    <StyledCaretDownOutlined fill={rankComp.rankCompOrder === 2} />
                </StyledExternalDiv3>
            </StyledBackgroundDiv3>
        </StyledBorderDiv3>
    );
};

export default RankComp;
