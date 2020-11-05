import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledBorderDiv10,
    StyledBackgroundDiv10,
    StyledDiv3,
    StyledRadio1,
    StyledBorderDiv11,
    StyledBackgroundDiv11,
    StyledTextArea1,
    StyledExternalDiv2,
    StyledNineDiv2,
} from '../../api/styled';
import { StyledLeftOutLined1, StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5 } from '../../api/styledFont';
import { goBack, getTime } from '../../api/common';
import { IItem } from '../../api/interface';

const SpotRegItem = (): JSX.Element => {
    const [contents, setContents] = React.useState<string>('');

    const onContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    const onRegItem = () => {
        const item: IItem = {
            itemId: 1,
            groupId: 1,
            groupName: '수찬 커플',
            spotId: 1,
            spotName: '사당 요란한부엌',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            like: 0,
            contents: contents,
        };

        console.log(item);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명/스팟 명</StyledH3>
                        </div>
                        <div onClick={onRegItem}>
                            <StyledH3>생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <div>
                        <StyledH5>사진/동영상</StyledH5>
                        <StyledBorderDiv10>
                            <StyledBackgroundDiv10>
                                <StyledDiv3>
                                    <StyledRadio1 name="radio1" />
                                    <StyledRadio1 name="radio1" />
                                    <StyledRadio1 name="radio1" />
                                </StyledDiv3>
                            </StyledBackgroundDiv10>
                            <StyledExternalDiv2>
                                <StyledPlusCircleOutlined1 />
                            </StyledExternalDiv2>
                        </StyledBorderDiv10>
                    </div>
                    <div>
                        <StyledH5>내용</StyledH5>
                        <StyledBorderDiv11>
                            <StyledBackgroundDiv11>
                                <StyledTextArea1 onChange={onContents}>Contents</StyledTextArea1>
                            </StyledBackgroundDiv11>
                        </StyledBorderDiv11>
                    </div>
                </StyledDiv1>
            </StyledNineDiv2>
        </>
    );
};

export default SpotRegItem;
