import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledTabUl1,
    StyledTabLi1,
    StyledTabRadio1,
    StyledTabDiv1,
    StyledFlex7,
    StyledButton3,
} from '../../api/styled';
import { StyledLeftOutLined1, StyledPlusCircleOutlined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5, StyledLabel5, StyledH4 } from '../../api/styledFont';
import { goBack } from '../../api/common';

const GroupRegSpot = (): JSX.Element => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const onOpenModal = (): void => {
        setOpenModal(!openModal);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <StyledFlex2>
                        <div>
                            <StyledLeftOutLined1 onClick={goBack} />
                            <StyledH3>그룹 명</StyledH3>
                        </div>
                        <div>
                            <StyledH3>스팟 생성</StyledH3>
                        </div>
                    </StyledFlex2>
                </StyledDiv1>
            </StyledNineDiv1>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>스팟 명</StyledH5>
                </StyledDiv1>
                <StyledBorderDiv1>
                    <StyledBackgroundDiv1>
                        <StyledText1 placeholder="스팟 명"></StyledText1>
                    </StyledBackgroundDiv1>
                </StyledBorderDiv1>
            </StyledNineDiv2>

            <StyledNineDiv2>
                <StyledDiv1>
                    <StyledH5>옵션</StyledH5>

                    <StyledTabUl1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li1" name="radio1" defaultChecked />
                            <StyledLabel5 htmlFor="li1">평가항목</StyledLabel5>
                            <StyledTabDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>음식</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>가격</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>친절</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>화장실</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                        <StyledTabLi1>
                            <StyledTabRadio1 id="li2" name="radio1" />
                            <StyledLabel5 htmlFor="li2">태그</StyledLabel5>
                            <StyledTabDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>광어회</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>연어회</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1>
                                    <StyledBackgroundDiv1>
                                        <StyledH4>고등어회</StyledH4>
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                                <StyledBorderDiv1 onClick={onOpenModal}>
                                    <StyledBackgroundDiv1>
                                        <StyledPlusCircleOutlined1 />
                                    </StyledBackgroundDiv1>
                                </StyledBorderDiv1>
                            </StyledTabDiv1>
                        </StyledTabLi1>
                    </StyledTabUl1>
                </StyledDiv1>
            </StyledNineDiv2>

            <StyledFlex7 open={openModal}>
                <StyledNineDiv2>
                    <StyledDiv1>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="태그 명"></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                        <div>
                            <StyledButton3>확인</StyledButton3>
                            <StyledButton3 onClick={onOpenModal}>취소</StyledButton3>
                        </div>
                    </StyledDiv1>
                </StyledNineDiv2>
            </StyledFlex7>
        </>
    );
};

export default GroupRegSpot;
