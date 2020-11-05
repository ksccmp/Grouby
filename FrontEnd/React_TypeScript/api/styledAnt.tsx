import styled from 'styled-components';
import {
    LeftOutlined,
    RightOutlined,
    PlusCircleOutlined,
    StarOutlined,
    StarFilled,
    HeartOutlined,
    HeartFilled,
    MessageOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    CheckCircleOutlined,
    CheckCircleFilled,
} from '@ant-design/icons';

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
    outline: none;
    & > svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;

export const StyledStarFilled1 = styled(StarFilled)`
    outline: none;
    & > svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;

export const StyledHeartOutlined1 = styled(HeartOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledHeartFilled1 = styled(HeartFilled)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledMessageOutlined1 = styled(MessageOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

interface IStyledCaretUpOutlined1 {
    fill: boolean;
}

export const StyledCaretUpOutlined1 = styled(CaretUpOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        opacity: ${(props: IStyledCaretUpOutlined1) => (props.fill ? 1 : 0.2)};
    }
`;

export const StyledCaretDownOutlined = styled(CaretDownOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        opacity: ${(props: IStyledCaretUpOutlined1) => (props.fill ? 1 : 0.2)};
    }
`;

export const StyledCheckCircleOutlined1 = styled(CheckCircleOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledCheckCircleFilled1 = styled(CheckCircleFilled)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;
