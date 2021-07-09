import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubTitle } from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>  
        <BackgroundImageContainer className="hover_effect_background-image" imageUrl={imageUrl} /> 
        <ContentContainer className="hover_effect_content">
            <ContentTitle> {title.toUpperCase()} </ContentTitle>
            <ContentSubTitle> SHOP NOWS </ContentSubTitle>
        </ContentContainer>
    </MenuItemContainer>)

export default withRouter(MenuItem);