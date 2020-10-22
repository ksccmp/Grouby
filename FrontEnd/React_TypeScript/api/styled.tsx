import styled from 'styled-components';

const minWidth1 = '300px';
const maxWidth1 = '600px';
const height1 = '40px';
const height2 = '30px';
const external1 = '50px';
const externalButton1 = '42px';

export const StyledText1 = styled.input.attrs((props) => ({
    type: 'text',
}))`
    width: 90%;
    height: ${height2};
    border-width: 0;
`;

export const StyledPassword1 = styled.input.attrs((props) => ({
    type: 'password',
}))`
    width: 90%;
    height: ${height2};
    border-width: 0;
`;

export const StyledDiv1 = styled.div`
    width: 100%;
    min-width: ${minWidth1};
    max-width: ${maxWidth1};
    margin: 0 auto;
`;

export const StyledBorderDiv1 = styled.div`
    width: 100%;
    background: red;
    min-width: ${minWidth1};
    max-width: ${maxWidth1};
    height: ${height1};
    padding: 1px;
    margin: 4px auto;
`;

export const StyledBorderDiv2 = styled.div`
    width: 100%;
    background: red;
    min-width: ${minWidth1};
    max-width: ${maxWidth1};
    height: ${height1};
    padding: 1px;
    margin: 4px auto;
    position: relative;
`;

export const StyledBackgroundDiv1 = styled.div`
    height: ${height1};
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledBackgroundDiv2 = styled.div`
    height: ${height1};
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${external1};
`;

export const StyledButton1 = styled.button`
    width: 100%;
    min-width: 70px;
    max-width: 200px;
    height: ${height2};
    margin: 0 1rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
`;

export const StyledButton2 = styled.button`
    width: ${externalButton1};
    height: ${height2};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    outline: none;
`;

export const StyledFlex1 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const StyledFlex2 = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const StyledMaxDiv1 = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export const StyledMaxDiv2 = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const StyledExternalDiv1 = styled.div`
    width: ${external1};
    height: ${height1};
    position: absolute;
    right: 1px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
