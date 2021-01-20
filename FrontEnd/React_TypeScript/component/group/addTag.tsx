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
    StyledText4,
    StyledBorderDiv21,
    StyledBackgroundDiv21,
    StyledDiv10,
} from '../../api/styled';
import { StyledMinusCircleFilled2, StyledLeftOutlined2, StyledPlusCircleFilled1 } from '../../api/styledAnt';
import { StyledH5, StyledH7 } from '../../api/styledFont';
import { ITag } from '../../api/interface';
import { color3 } from '../../api/common';

interface IAddTag {
    openAddTag: boolean;
    onOpenAddTag: () => void;
    tags: ITag[];
    setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
}

const AddTag: React.FC<IAddTag> = ({ openAddTag, onOpenAddTag, tags, setTags }): JSX.Element => {
    const [searchTag, setSearchTag] = React.useState<string>('');
    const [addTag, setAddTag] = React.useState<string>('');

    const onSearchTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTag(e.target.value);
    };

    const onAddTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddTag(e.target.value);
    };

    const getFilterTags = () => {
        return tags.filter((tag) => tag.tagName.includes(searchTag));
    };

    // 태그 클릭
    const onDeleteTag = (index: number) => {
        const newTags = tags.slice();
        newTags.splice(index, 1);
        setTags(newTags);
    };

    // 태그 추가
    const onSaveAddTag = () => {
        setTags((prev) => [
            ...prev,
            {
                tagName: addTag,
            },
        ]);
        setAddTag('');
    };

    return (
        <>
            <StyledFixed1 open={openAddTag}>
                <StyledDiv1>
                    <StyledDiv10>
                        <StyledDiv6>
                            <StyledFlex2>
                                <StyledFlex13>
                                    <StyledLeftOutlined2 onClick={onOpenAddTag} />
                                </StyledFlex13>
                                <div style={{ width: '100%', marginLeft: '10px' }}>
                                    <StyledBorderDiv18>
                                        <StyledBackgroundDiv18>
                                            <StyledText3 placeholder="태그 검색" onChange={onSearchTag} />
                                        </StyledBackgroundDiv18>
                                    </StyledBorderDiv18>
                                </div>
                            </StyledFlex2>
                        </StyledDiv6>
                    </StyledDiv10>

                    <StyledDiv5>
                        <StyledDiv6>
                            <div>
                                <StyledH7 style={{ color: color3 }}>태그</StyledH7>
                            </div>

                            <div>
                                {getFilterTags().map((tag, key) => (
                                    <StyledFlex16 key={key}>
                                        <StyledFlex17>
                                            <StyledH5>{tag.tagName}</StyledH5>
                                        </StyledFlex17>
                                        <div onClick={() => onDeleteTag(key)}>
                                            <StyledMinusCircleFilled2 />
                                        </div>
                                    </StyledFlex16>
                                ))}

                                <StyledFlex16>
                                    <div style={{ width: '100%', marginRight: '10px' }}>
                                        <StyledBorderDiv21>
                                            <StyledBackgroundDiv21>
                                                <StyledText4
                                                    placeholder="태그를 추가하세요"
                                                    onChange={onAddTag}
                                                    value={addTag}
                                                />
                                            </StyledBackgroundDiv21>
                                        </StyledBorderDiv21>
                                    </div>
                                    <div onClick={onSaveAddTag}>
                                        <StyledPlusCircleFilled1 />
                                    </div>
                                </StyledFlex16>
                            </div>
                        </StyledDiv6>
                    </StyledDiv5>
                </StyledDiv1>
            </StyledFixed1>
        </>
    );
};

export default AddTag;
