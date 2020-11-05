import styled, { keyframes } from 'styled-components';

const minWidth1 = '300';
const maxWidth1 = '600';
const height1 = '40';
const height2 = '30';
const height3 = '120';
const height4 = '70';
const height5 = '90';
const height6 = '20';
const height7 = '60';
const height8 = '400';
const height9 = '250';
const external1 = '50';
const external2 = '40';
const externalButton1 = '42';

export const StyledText1 = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 90%;
    height: ${height2}px;
    border-width: 0;
`;

export const StyledPassword1 = styled.input.attrs(() => ({
    type: 'password',
}))`
    width: 90%;
    height: ${height2}px;
    border-width: 0;
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
    width: 100%;
    height: ${height5}px;
`;

export const StyledBorderDiv1 = styled.div`
    background: red;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv2 = styled.div`
    background: red;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBorderDiv3 = styled.div`
    background-color: yellow;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBorderDiv4 = styled.div`
    background-color: blue;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height6}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv5 = styled.div`
    background-color: blue;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${height6}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv6 = styled.div`
    width: 100%;
    background-color: blue;
    height: ${height2}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv7 = styled.div`
    background-color: lightseagreen;
    height: ${height8}px;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv8 = styled.div`
    display: inline-block;
    background-color: lightseagreen;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv9 = styled.div`
    background-color: lightseagreen;
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv10 = styled.div`
    background-color: lightseagreen;
    height: ${Number(height9) + Number(external2)}px;
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBorderDiv11 = styled.div`
    background-color: red;
    height: ${height5}px;
    padding: 1px;
    margin: 4px auto;
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
    background: red;
    width: 100%;
    height: ${height1}px;
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBackgroundDiv1 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv2 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledBackgroundDiv3 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledBackgroundDiv4 = styled.div`
    height: ${height6}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    align-items: center;
`;

export const StyledBackgroundDiv5 = styled.div`
    height: ${height6}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackgroundDiv6 = styled.div`
    height: ${height2}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackgroundDiv7 = styled.div`
    height: ${height8}px;
    overflow: hidden;
    background-color: #ffffff;
`;

export const StyledBackgroundDiv8 = styled.div`
    overflow: hidden;
    background-color: #ffffff;
    padding: 0.2rem 0.5rem;
`;

export const StyledBackgroundDiv9 = styled.div`
    overflow: hidden;
    background-color: #ffffff;
`;

export const StyledBackgroundDiv10 = styled.div`
    height: ${height9}px;
    overflow: hidden;
    background-color: #ffffff;
    margin-bottom: ${external2}px;
`;

export const StyledBackgroundDiv11 = styled.div`
    height: ${height5}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IStyledBackgroundDiv12 {
    select: boolean;
}

export const StyledBackgroundDiv12 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: ${(props: IStyledBackgroundDiv12) => (props.select ? '' : '#ffffff')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv13 = styled.div`
    height: ${height1}px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${external1}px;
`;

export const StyledButton1 = styled.button`
    width: 100%;
    min-width: 70px;
    max-width: 200px;
    height: ${height2}px;
    margin: 0 1rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
`;

export const StyledButton2 = styled.button`
    width: ${externalButton1}px;
    height: ${height2}px;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
`;

export const StyledButton3 = styled.button`
    width: 50%;
    height: ${height2}px;
`;

const ripple1 = keyframes`
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

        animation: ${ripple1} 1.5s;
    }

    &:focus:not(:active)::after {
        display: block;
    }
`;

export const StyledFlex1 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: 0 auto;
`;

export const StyledFlex2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    height: ${height5}px;
    text-align: center;
`;

interface IStyledFlex6 {
    extend: boolean;
}

export const StyledFlex6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${(props: IStyledFlex6) => (props.extend ? 'initial' : height7 + 'px')};
    background-color: green;
    border: 1px solid green;
    opacity: 0.7;
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
    width: 100%;
    height: ${height2}px;
`;

export const StyledGrid1 = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 4fr;
`;

export const StyledGrid2 = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr 10fr;
`;

export const StyledGrid3 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin: 0 2rem;
`;

export const StyledNineDiv1 = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
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
    background-color: #ffffff;
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
    background-color: #ffffff;
`;

export const StyledExternalDiv3 = styled.div`
    width: ${external1}px;
    height: ${height1}px;
    position: absolute;
    right: 1px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledWidthLine1 = styled.div`
    width: 100%;
    height: 0;
    border: 1px solid black;
    opacity: 0.5;
`;

export const StyledNineFixedFooter1 = styled.footer`
    width: 90%;
    position: fixed;
    right 5%;
    bottom: 0;
`;

export const StyledNavUl1 = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
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

interface IStyledNavLi1 {
    checked: boolean;
}

export const StyledNavLi1 = styled.li`
    display: table-cell;
    text-align: center;
    border-bottom: ${(props: IStyledNavLi1) => (props.checked ? '2px solid red' : '')};
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
    background-color: red;
    opacity: 0.6;
    min-width: ${minWidth1}px;
    max-width: ${maxWidth1}px;
    height: ${(props: IStyledCardDiv1) => (props.extend ? 'initial' : height3 + 'px')};
    margin: 4px auto;
`;

export const StyledTabUl1 = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
    position: relative;
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
            background-color: blue;
            opacity: 0.7;
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
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
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
    bottom: ${(props: IStyledFixed1) => (props.open ? '10%' : '-100%')};
    z-index: 3;
`;

export const StyledTextArea1 = styled.textarea`
    width: calc(100% - 0.7rem);
    height: calc(${height5}px - 0.7rem);
    border: none;
`;
