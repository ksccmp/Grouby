import * as React from 'react';
import { StyledBorderDiv3, StyledBackgroundDiv3, StyledExternalDiv1, StyledButton2 } from '../../api/styled';
import { StyledH4, StyledH6 } from '../../api/styledFont';

interface IFriend {
    isAdd: boolean;
}

const Friend: React.FC<IFriend> = ({ isAdd }): JSX.Element => {
    return (
        <StyledBorderDiv3>
            <StyledBackgroundDiv3>
                <StyledH4 style={{ marginLeft: '0.7rem' }}>Intan(정수안)</StyledH4>
                <StyledExternalDiv1>
                    {isAdd ? (
                        <StyledButton2>
                            <StyledH6>추가</StyledH6>
                        </StyledButton2>
                    ) : (
                        <StyledButton2>
                            <StyledH6>삭제</StyledH6>
                        </StyledButton2>
                    )}
                </StyledExternalDiv1>
            </StyledBackgroundDiv3>
        </StyledBorderDiv3>
    );
};

export default Friend;
