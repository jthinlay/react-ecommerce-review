import styled from 'styled-components';

export const MenuItemContainer = styled.div`

    height: ${({size}) => (size ? '480px' : '240px')};
    min-width: 30%;
    height: 440px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    
    &:hover{
      cursor: pointer;

      & .hover_effect_background-image {
        transform: scale(1.5);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      & .hover_effect_content {
        opacity: 0.9;
      }
    }

    &:first-child {
        margin-right: 7.5px;
      }

    &:last-child {
    margin-left: 7.5px;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: black;
    opacity: 0.5;
    color: white;
    position: absolute;
`;

export const ContentTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: white;
`;

export const ContentSubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;