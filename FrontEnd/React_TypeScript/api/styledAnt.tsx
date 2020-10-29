import styled from 'styled-components';
import { LeftOutlined, RightOutlined, PlusCircleOutlined, StarOutlined, StarFilled } from '@ant-design/icons';

export const StyledLeftOutLined1 = styled(LeftOutlined)`
    margin-right: 0.4rem;
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledRightOutlined1 = styled(RightOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledPlusCircleOutlined1 = styled(PlusCircleOutlined)`
    & > svg {
        width: 1.7rem;
        height: 1.7rem;
    }
`;

export const StyledPlusCircleOutlined2 = styled(PlusCircleOutlined)`
    margin-left: 0.3rem;

    & > svg {
        width: 1rem;
        height: 1rem;
    }
`;

export const StyledStarOutlined1 = styled(StarOutlined)`
    & > svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;

export const StyledStarFilled1 = styled(StarFilled)`
    & > svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;
