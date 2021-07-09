import styled, {css} from 'styled-components'

const buttonStyles = css`
    background-color: rgb(221, 166, 150);
    color: black;
    border: none;

    &:hover {
        background-color:rgb(238, 236, 147);
        color: rgb(68, 3, 3);
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover {
        background-color: black;
        color: white;
        border: none; 
    }
`;

const googleSignInStyles = css`
    
    background-color: rgb(163, 212, 245);
    color: black;

    &:hover {
        background-color: rgb(238, 236, 147);
        color: red;
        border: none;
    }
`
const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles; 
}

export const CustomButtonContainer = styled.button`
    min-width: 150px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 1px rgb(185, 80, 80);
    outline: none;
    display: flex;
    justify-content: center;  

    ${getButtonStyles}
`