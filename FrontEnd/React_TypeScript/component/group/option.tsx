import * as React from 'react';
import { StyledBorderDiv3, StyledBackgroundDiv3, StyledExternalDiv4, StyledText2 } from '../../api/styled';
import { StyledH5 } from '../../api/styledFont';
import { IRankComp, ITag } from '../../api/interface';
import {
    StyledCheckCircleOutlined2,
    StyledCheckCircleFilled2,
    StyledPlusCircleOutlined3,
    StyledMinusCircleFilled1,
} from '../../api/styledAnt';

interface IOption {
    rankComp?: IRankComp;
    onSelectRankComp?: (index: number) => void;
    tag?: ITag;
    onDeleteTag?: (index: number) => void;
    index?: number;
    searchTextTag?: string;
    onSearchTextTag?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSaveTag?: () => void;
}

const Option: React.FC<IOption> = ({
    rankComp,
    onSelectRankComp,
    tag,
    onDeleteTag,
    index,
    searchTextTag,
    onSearchTextTag,
    onSaveTag,
}): JSX.Element => {
    const getExternal = () => {
        if (rankComp) {
            return rankComp.rankCompSelect ? <StyledCheckCircleFilled2 /> : <StyledCheckCircleOutlined2 />;
        } else if (tag) {
            return <StyledMinusCircleFilled1 />;
        } else {
            return <StyledPlusCircleOutlined3 />;
        }
    };

    const getBorderClick = () => {
        onSelectRankComp && onSelectRankComp(index as number);
    };

    const getExternalClick = () => {
        onDeleteTag && onDeleteTag(index as number);
        onSaveTag && onSaveTag();
    };

    const onPressText = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSaveTag && onSaveTag();
        }
    };

    return (
        <StyledBorderDiv3 onClick={getBorderClick}>
            <StyledBackgroundDiv3>
                <div>
                    {rankComp && <StyledH5>{rankComp.rankCompName}</StyledH5>}
                    {tag && <StyledH5>{tag.tagName}</StyledH5>}
                    {!rankComp && !tag && (
                        <StyledText2
                            placeholder="태그 명"
                            value={searchTextTag}
                            onChange={onSearchTextTag}
                            onKeyPress={onPressText}
                        />
                    )}
                </div>
                <StyledExternalDiv4 onClick={getExternalClick}>{getExternal()}</StyledExternalDiv4>
            </StyledBackgroundDiv3>
        </StyledBorderDiv3>
    );
};

export default Option;
