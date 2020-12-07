import styled, { keyframes } from 'styled-components';
import { color1, color2, color3, color4, color5 } from './common';

const minWidth1 = '300';
const maxWidth1 = '600';
const height1 = 40;
const height2 = 30;
const height3 = '120';
const height4 = '70';
const height5 = 90;
const height6 = 20;
const height7 = 50;
const height8 = '420';
const height9 = '250';
const height10 = 35;
const height11 = 25;
const height12 = 100;
const external1 = '50';
const external2 = '40';
const externalButton1 = '42';

export const StyledText1 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    height: ${height2}px;
    border-width: 0;
    outline: none;
    margin: 0 15px;
`;

export const StyledText2 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    height: ${height2}px;
    border-width: 0;
    outline: none;
`;

export const StyledText3 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    height: ${height11}px;
    border: none;
    outline: none;
    background-color: ${color1};
    margin: 0 10px;
`;

export const StyledText4 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    height: ${height2}px;
    border: none;
    outline: none;
    background-color: ${color1};
    margin: 0 10px;
`;

export const StyledText5 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    height: ${height1}px;
    border: none;
    outline: none;
    background-color: ${color1};
    margin: 0 10px;
`;

export const StyledPassword1 = styled.input.attrs(() => ({
    type: 'password',
}))`
    width: 100%;
    height: ${height2}px;
    border-width: 0;
    outline: none;
    margin: 0 15px;
`;

export const StyledPassword2 = styled.input.attrs(() => ({
    type: 'password',
}))`
    width: 100%;
    height: ${height2}px;
    border: none;
    outline: none;
    background-color: ${color1};
    margin: 0 10px;
`;

export const StyledCheckBox1 = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    display: none;

    & + label > div > div {
        left: 3px;
        right: initial;
    }

    & + label > div {
        background-color: ${color2};
    }

    &:checked {
        & + label > div > div {
            left: initial;
            right: 3px;
        }

        & + label > div {
            background-color: ${color3};
        }
    }
`;

export const StyledDiv1 = styled.div`
    width: 100%;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    margin: 0 auto;
`;

export const StyledDiv2 = styled.div`
    padding: 0.5rem;
`;

export const StyledDiv3 = styled.div`
    width: 100%;
    height: ${height9}px;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    position: relative;
    text-align: center;
`;

export const StyledDiv4 = styled.div`
    height: ${height5}px;
`;

export const StyledDiv5 = styled.div`
    background-color: #ffffff;
`;

export const StyledDiv6 = styled.div`
    margin: 0 5px;
`;

export const StyledDiv7 = styled.div`
    & > div {
        border-bottom: 1px solid ${color1};
    }
`;

export const StyledDiv8 = styled.div`
    width: 100%;
    margin-right: 10px;
    overflow: hidden;
`;

export const StyledDiv9 = styled.div`
    &:active {
        background-color: ${color1};
    }
`;

export const StyledToggleDiv1 = styled.div`
    width: 2.2rem;
    height: 1.1rem;
    display: flex;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    position: relative;
`;

export const StyledToggleDiv2 = styled.div`
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    position: absolute;
    background-color: #ffffff;
`;

export const StyledBorderDiv1 = styled.div`
    background: #e6951a;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv2 = styled.div`
    background: #e6951a;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBorderDiv3 = styled.div`
    background-color: rgba(137, 136, 135, 0.3);
    height: ${height1}px;
    padding-bottom: 1px;
    position: relative;
`;

export const StyledBorderDiv4 = styled.div`
    background-color: ${color1};
    width: 100%;
    height: ${height6}px;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBorderDiv5 = styled.div`
    width: 100%;
    height: ${height6}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv6_1 = styled.div`
    width: 100%;
    height: ${height2}px;
    border-right: 1px solid ${color1};
`;

export const StyledBorderDiv6_2 = styled.div`
    width: 100%;
    height: ${height2}px;
`;

export const StyledBorderDiv7 = styled.div`
    background-color: rgba(137, 136, 135, 0.3);
    height: ${height8}px;
    padding: 1px;
    margin: 15px auto;
`;

export const StyledBorderDiv8 = styled.div`
    width: 100%;
    display: inline-block;
    background-color: rgba(137, 136, 135, 0.3);
    padding-bottom: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv9 = styled.div`
    background-color: rgba(137, 136, 135, 0.3);
    padding: 1px;
    margin: 15px auto;
`;

export const StyledBorderDiv10 = styled.div`
    height: ${height9}px;
    position: relative;
`;

export const StyledBorderDiv11 = styled.div`
    width: 100%;
    height: ${height5}px;
    background-color: ${color1};
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBorderDiv12 = styled.div`
    background: red;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv13 = styled.div`
    background: ${color1};
    width: 100%;
    height: ${height1}px;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

interface IStyledBorderDiv14 {
    same: boolean;
}

export const StyledBorderDiv14 = styled.div`
    background: ${(props: IStyledBorderDiv14) => (props.same ? '#e6951a' : 'red')};
    height: ${height1}px;
    padding: ${(props: IStyledBorderDiv14) => (props.same ? '1px' : '2px')};
    margin: 4px auto;
`;

export const StyledBorderDiv15 = styled.div`
    background: #e6951a;
    height: ${height1}px;
    padding: 1px;
    margin: 15px auto;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBorderDiv16 = styled.div`
    background-color: rgba(137, 136, 135, 0.3);
    height: ${height1}px;
    padding-bottom: 1px;
    position: relative;
`;

export const StyledBorderDiv17 = styled.div`
    background-color: rgba(137, 136, 135, 0.3);
    padding: 1px;
    margin: 15px auto;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
`;

export const StyledBorderDiv18 = styled.div`
    width: 100%;
    height: ${height11}px;
    background-color: ${color1};
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBorderDiv19 = styled.div`
    background-color: ${color1};
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;

export const StyledBorderDiv20 = styled.div`
    display: inline-block;
    background-color: ${color1};
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;

export const StyledBorderDiv21 = styled.div`
    width: 100%;
    height: ${height2}px;
    background-color: ${color1};
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBackgroundDiv1 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv2 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledBackgroundDiv3 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledBackgroundDiv4 = styled.div`
    width: 100%;
    height: ${height6}px;
    overflow: hidden;
    background-color: ${color1};
    display: flex;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBackgroundDiv5 = styled.div`
    height: ${height6}px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackgroundDiv6 = styled.div`
    height: ${height2}px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackgroundDiv7 = styled.div`
    height: ${height8}px;
    overflow: hidden;
    background-color: #fafafa;
`;

export const StyledBackgroundDiv8 = styled.div`
    overflow: hidden;
    background-color: #fafafa;
    padding: 0.2rem 0.5rem;
`;

export const StyledBackgroundDiv9 = styled.div`
    overflow: hidden;
    background-color: #fafafa;
`;

export const StyledBackgroundDiv10 = styled.div`
    height: ${height9}px;
    overflow: hidden;
    background-color: #fafafa;
`;

export const StyledBackgroundDiv11 = styled.div`
    overflow: hidden;
    width: 100%;
    height: ${height5}px;
    background-color: ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

interface IStyledBackgroundDiv12 {
    select: boolean;
}

export const StyledBackgroundDiv12 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: ${(props: IStyledBackgroundDiv12) => (props.select ? '' : '#fafafa')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv13 = styled.div`
    overflow: hidden;
    width: 100%;
    height: ${height1}px;
    background-color: ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBackgroundDiv14 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv15 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBackgroundDiv16 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledBackgroundDiv17 = styled.div`
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
`;

export const StyledBackgroundDiv18 = styled.div`
    overflow: hidden;
    width: 100%;
    height: ${height11}px;
    background-color: ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledBackgroundDiv19_1 = styled.div`
    overflow: hidden;
    background-color: ${color1};
    display: inline-block;
    margin: 0 5px;
`;

export const StyledBackgroundDiv19_2 = styled.div`
    overflow: hidden;
    background-color: ${color1};
    display: inline-block;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    margin: 0 5px;
`;

export const StyledBackgroundDiv20 = styled.div`
    overflow: hidden;
    background-color: ${color1};
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    margin: 0 5px;
`;

export const StyledBackgroundDiv21 = styled.div`
    overflow: hidden;
    width: 100%;
    height: ${height2}px;
    background-color: ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`;

export const StyledButton1 = styled.button`
    width: 100%;
    height: ${height2}px;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    outline: none;
    border: none;
    background-color: ${color3};
    color: ${color1};
`;

export const StyledButton2 = styled.button`
    width: ${externalButton1}px;
    height: ${height2}px;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
    border: 1px solid #e6951a;
    background-color: #fafafa;
    &:active {
        background-color: #e6951a;
    }
`;

export const StyledButton3 = styled.button`
    width: 50%;
    height: ${height2}px;
`;

const KeyFramesRipple1 = keyframes`
    0% {
        opacity: 1;
        transform: scale(0);
    }

    100% {
        opacity: 0;
        transform: scale(10);
    }
`;

interface IStyledButton4 {
    line: string;
}

export const StyledButton4 = styled.button`
    width: 100%;
    height: ${height2}px;
    ${(props: IStyledButton4) => () => {
        switch (props.line) {
            case 'left': {
                return 'border-top-left-radius: 2rem;border-bottom-left-radius: 2rem;';
            }

            case 'right': {
                return 'border-top-right-radius: 2rem;border-bottom-right-radius: 2rem;';
            }
        }
    }}

    position: relative;
    overflow: hidden;
    outline: none;
    border: none;
    background-color: ${color3};
    color: ${color1};

    &::after {
        content: '';
        display: none;
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);

        width: 100%;
        height: 100px;
        margin-top: -50px;

        top: 50%;
        opacity: 0;

        animation: ${KeyFramesRipple1} 1.5s;
    }

    &:focus:not(:active)::after {
        display: block;
    }
`;

interface IStyledButton5 {
    check: boolean;
}

export const StyledButton5 = styled.button`
    width: ${externalButton1}px;
    height: ${height2}px;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
    border: ${(props: IStyledButton5) => (props.check ? '1px solid #e6951a' : '2px solid red')};
    background-color: #fafafa;
    &:active {
        background-color: #e6951a;
    }
`;

export const StyledFlex1 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: 0 auto;
    background-color: #ffffff;
`;

export const StyledFlex2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height10}px;
`;

export const StyledFlex3 = styled.div`
    display: flex;
    justify-content: space-between;
    height: ${height2}px;
`;

interface IStyledFlex4 {
    extend: boolean;
}

export const StyledFlex4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props: IStyledFlex4) => (props.extend ? 'initial' : height4 + 'px')};
    margin-top: 0.5rem;
`;

export const StyledFlex5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: ${height4}px;
    text-align: center;
    & > div:first-child {
        border-left: initial;
    }
`;

interface IStyledFlex6 {
    extend: boolean;
}

export const StyledFlex6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${(props: IStyledFlex6) => (props.extend ? 'initial' : height7 + 'px')};
`;

interface IStyledFlex7 {
    open: boolean;
}

export const StyledFlex7 = styled.div`
    display: ${(props: IStyledFlex7) => (props.open ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledFlex8 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height2}px;
`;

export const StyledFlex9 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledFlex10 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height2}px;
`;

export const StyledFlex11 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height6}px;
`;

export const StyledFlex12 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid rgba(137, 136, 135, 0.3);
`;

export const StyledFlex13 = styled.div`
    display: flex;

    & > span {
        margin-right: 2px;
    }

    & > span:last-child {
        margin-right: 0;
    }
`;

export const StyledFlex14 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height7}px;

    &:active {
        background-color: ${color1};
    }
`;

export const StyledFlex15 = styled.div`
    display: flex;
    align-items: center;

    & > p {
        margin-right: 2px;
    }

    & > span:last-child {
        margin-right: 0;
    }
`;

export const StyledFlex16 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height1}px;

    &:active {
        background-color: ${color1};
    }
`;

export const StyledFlex16_1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height1}px;
`;

export const StyledFlex17 = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledFlex18 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height1}px;
`;

export const StyledFlex19 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height2}px;
`;

export const StyledFlex20 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const StyledFlex21 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledFlex22 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height12}px;
`;

export const StyledFlex23 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${height7}px;
`;

export const StyledFlex24 = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: ${color5};
`;

export const StyledFlex25 = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledGrid1 = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 4fr;
`;

export const StyledGrid2 = styled.div`
    display: grid;
    grid-template-columns: 5fr 10fr;
`;

export const StyledGrid3 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin: 0 2rem;
`;

export const StyledNineDiv1 = styled.div`
    width: 95%;
    margin: 0 auto;
`;

export const StyledNineDiv2 = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const StyledMaxDiv1 = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export const StyledExternalDiv1 = styled.div`
    width: ${external1}px;
    height: ${height1}px;
    position: absolute;
    right: 1px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledExternalDiv2 = styled.div`
    width: calc(100% - 2px);
    height: ${external2}px;
    position: absolute;
    bottom: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
`;

export const StyledExternalDiv3 = styled.div`
    width: ${external1}px;
    height: ${height1}px;
    position: absolute;
    right: 0;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledExternalDiv4 = styled.div`
    width: ${external1}px;
    height: ${height1}px;
    position: absolute;
    right: 0;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledWidthLine1 = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid black;
    opacity: 0.5;
`;

export const StyledFixedFooter1 = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
`;

export const StyledNavUl1 = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
    background-color: #eeecec;
    height: ${height1}px;
`;

export const StyledNavUl2 = styled.ul`
    width: 100%;
    height: ${height2}px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
`;

export const StyledNavLi1 = styled.li`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;

export const StyledNavLi2 = styled.li`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    height: ${height2}px;
`;

interface IStyledCardDiv1 {
    extend: boolean;
}

export const StyledCardDiv1 = styled.div`
    background-color: rgba(230, 149, 26, 0.9);
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${(props: IStyledCardDiv1) => (props.extend ? 'initial' : height3 + 'px')};
    margin: 15px auto;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
`;

export const StyledTabUl1 = styled.ul`
    width: calc(100% - 2px);
    list-style-type: none;
    margin: 4px auto;
    padding: 0;
    display: table;
    table-layout: fixed;
    position: relative;
    border: 1px solid black;
`;

export const StyledTabLi1 = styled.li`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    margin: 0 0.5rem;
`;

export const StyledTabRadio1 = styled.input.attrs(() => ({
    type: 'radio',
}))`
    display: none;

    &:checked {
        & + label {
            background-color: #e6951a;
        }

        & ~ div {
            display: block;
        }
    }
`;

export const StyledTabDiv1 = styled.div`
    position: absolute;
    display: none;
    left: 0;
    width: 100%;
    padding-bottom: 30px;
`;

export const StyledRadio1 = styled.input.attrs(() => ({
    type: 'radio',
}))``;

export const StyledRadio2 = styled.input.attrs(() => ({
    type: 'radio',
    name: 'filterRadio',
}))`
    display: none;
    & + div label:nth-child(1) {
        display: inline-block;
    }
    & + div label:nth-child(2) {
        display: none;
    }

    &:checked {
        & + div label:nth-child(1) {
            display: none;
        }
        & + div label:nth-child(2) {
            display: inline-block;
        }
    }
`;

export const StyledTable1 = styled.div`
    width: 100%;
    height: ${height2}px;
    display: table;
    table-layout: fixed;
`;

export const StyledTable2 = styled.table`
    border-collapse: collapse;
    width: 100%;
    height: ${height7}px;
    table-layout: fixed;
    text-align: center;

    & > tbody > tr:last-child {
        border-bottom: 1px solid ${color1};
    }
`;

export const StyledTr1 = styled.tr`
    border-top: 1px solid ${color1};

    & > td:last-child {
        border-right: initial;
    }
`;

export const StyledTd1 = styled.td`
    border-right: 1px solid ${color1};

    &:active {
        background-color: ${color1};
    }
`;

export const StyledTableCell1 = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;

interface IStyledFixed1 {
    open: boolean;
}

export const StyledFixed1 = styled.div`
    position: fixed;
    bottom: ${(props: IStyledFixed1) => (props.open ? '0' : '-100%')};
    background-color: ${color1};
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 2;
    overflow: auto;
`;

export const StyledFixed2 = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: ${(props: IStyledFixed1) => (props.open ? '0' : '-100%')};
    z-index: 3;
`;

export const StyledFixed3 = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: ${(props: IStyledFixed1) => (props.open ? '5%' : '-100%')};
    z-index: 3;
`;

export const StyledTextArea1 = styled.textarea`
    width: 100%;
    height: ${Number(height5 - 5)}px;
    border: none;
    outline: none;
    background-color: ${color1};
    margin: 0 10px;
    resize: none;
`;

export const StyledSlideDiv1 = styled.div`
    width: 100%;
    height: ${height9}px;
    overflow: hidden;
    position: relative;
`;

export const StyledSlideDiv2 = styled.div`
    width: calc(100% - 2px);
    position: absolute;
    top: 0;
`;

export const StyledSlideDiv3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IStyledSlideUl1 {
    count: number;
    index?: number;
}

export const StyledSlideUl1 = styled.ul`
    list-style-type: none;
    width: calc(100% * ${(props: IStyledSlideUl1) => props.count});
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: -${(props: IStyledSlideUl1) => (props.index as number) * 100}% !important;
    transition: 1s;
`;

export const StyledSlideLi1 = styled.li`
    width: calc(100% / ${(props: IStyledSlideUl1) => props.count});
    height: 300px;
`;

interface IStyledCircle1 {
    target: boolean;
}

export const StyledCircle1 = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${(props: IStyledCircle1) => (props.target ? '0.9rem' : '0.4rem')};
    color: #e6951a;
`;
