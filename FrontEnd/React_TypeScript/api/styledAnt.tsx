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
    HomeOutlined,
    TeamOutlined,
    MenuOutlined,
    CommentOutlined,
    AppstoreOutlined,
    MinusCircleFilled,
    FormOutlined,
    FileDoneOutlined,
} from '@ant-design/icons';

export const StyledLeftOutLined1 = styled(LeftOutlined)`
    margin-right: 0.4rem;
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
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
    & > svg > path {
        fill: #e6951a;
    }
`;

export const StyledPlusCircleOutlined3 = styled(PlusCircleOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    & > svg > path {
        fill: #1976d2;
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
    & > svg > path {
        fill: #e6951a;
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
    & > svg > path {
        fill: rgba(255, 0, 0, 0.7);
    }
`;

export const StyledMessageOutlined1 = styled(MessageOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
    & > svg > path {
        fill: #e6951a;
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
        fill: ${(props: IStyledCaretUpOutlined1) => (props.fill ? '#e6951a' : '#000000')};
    }
`;

export const StyledCaretDownOutlined = styled(CaretDownOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        opacity: ${(props: IStyledCaretUpOutlined1) => (props.fill ? 1 : 0.2)};
        fill: ${(props: IStyledCaretUpOutlined1) => (props.fill ? '#e6951a' : '#000000')};
    }
`;

export const StyledCheckCircleOutlined1 = styled(CheckCircleOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export const StyledCheckCircleOutlined2 = styled(CheckCircleOutlined)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
    & > svg > path {
        fill: rgba(137, 136, 135, 0.8);
    }
`;

export const StyledCheckCircleFilled1 = styled(CheckCircleFilled)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
    & > svg > path {
        fill: #e6951a;
    }
`;

export const StyledCheckCircleFilled2 = styled(CheckCircleFilled)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }
    & > svg > path {
        fill: #4ab422;
    }
`;

interface INavChoice {
    choice: string;
}

export const StyledHomeOutlined1 = styled(HomeOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyeldTeamOutlined1 = styled(TeamOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledMenuOutlined1 = styled(MenuOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledCommentOutlined1 = styled(CommentOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledAppstoreOutlined1 = styled(AppstoreOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledFormOutlined1 = styled(FormOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledFileDoneOutlined1 = styled(FileDoneOutlined)`
    & > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    & > svg > path {
        fill: ${(props: INavChoice) => props.choice === 'true' && '#E6951A'};
    }
`;

export const StyledMinusCircleFilled1 = styled(MinusCircleFilled)`
    & > svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    & > svg > path {
        fill: rgba(255, 0, 0, 0.7);
    }
`;
