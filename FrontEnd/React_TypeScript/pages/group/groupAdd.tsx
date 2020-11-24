import * as React from 'react';
import {
    StyledDiv1,
    StyledFlex2,
    StyledDiv5,
    StyledDiv6,
    StyledFlex13,
    StyledFlex18,
    StyledCheckBox1,
    StyledToggleDiv1,
    StyledToggleDiv2,
    StyledFlex17,
    StyledText2,
} from '../../api/styled';
import { StyledH4, StyledH5, StyledH6 } from '../../api/styledFont';
import { StyledEditOutlined1, StyledRightOutlined1, StyledCheckOutlined1 } from '../../api/styledAnt';
import { color2 } from '../../api/common';

const GroupAdd = (): JSX.Element => {
    const [title, setTitle] = React.useState<string>('수찬 커플');
    const [modGroupName, setModGroupName] = React.useState<boolean>(false);

    const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onModGroupName = () => {
        setModGroupName(!modGroupName);
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <div style={{ width: '100%', marginRight: '10px' }}>
                                {modGroupName ? (
                                    <StyledText2 value={title} onChange={onTitle} />
                                ) : (
                                    <StyledH4>{title}</StyledH4>
                                )}
                            </div>
                            <StyledFlex13>
                                {modGroupName ? (
                                    <StyledCheckOutlined1 onClick={onModGroupName} />
                                ) : (
                                    <StyledEditOutlined1 onClick={onModGroupName} />
                                )}
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <StyledDiv5>
                    <StyledDiv6>
                        <StyledFlex18>
                            <div>
                                <StyledH5>알림</StyledH5>
                            </div>
                            <div>
                                <StyledCheckBox1 id="toggle1" />
                                <label htmlFor="toggle1">
                                    <StyledToggleDiv1>
                                        <StyledToggleDiv2></StyledToggleDiv2>
                                    </StyledToggleDiv1>
                                </label>
                            </div>
                        </StyledFlex18>
                        <StyledFlex18>
                            <div>
                                <StyledH5>인원제한</StyledH5>
                            </div>
                            <div>
                                <StyledCheckBox1 id="toggle2" />
                                <label htmlFor="toggle2">
                                    <StyledToggleDiv1>
                                        <StyledToggleDiv2></StyledToggleDiv2>
                                    </StyledToggleDiv1>
                                </label>
                            </div>
                        </StyledFlex18>
                        <StyledFlex18>
                            <StyledFlex17>
                                <StyledH5 style={{ marginRight: '5px' }}>멤버</StyledH5>
                                <StyledH6 style={{ color: color2 }}>3</StyledH6>
                            </StyledFlex17>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex18>
                        <StyledFlex18>
                            <div>
                                <StyledH5>그룹탈퇴</StyledH5>
                            </div>
                            <div>
                                <StyledRightOutlined1 />
                            </div>
                        </StyledFlex18>
                    </StyledDiv6>
                </StyledDiv5>
            </StyledDiv1>
        </>
    );
};

export default GroupAdd;
