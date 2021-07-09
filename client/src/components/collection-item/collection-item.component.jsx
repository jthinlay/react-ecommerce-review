import React from 'react'
// import './collection-item.styles.scss';
import {CollectionItemContainer, BackgroundImage, CollectionFooterContainer, AddButton, NameContainer, PriceContainer  } from './collection-item.styles';
// import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const  {name, imageUrl, price} = item
    return (
        <CollectionItemContainer>
                <BackgroundImage className="image" imageUrl={imageUrl} />
                    <CollectionFooterContainer>
                        <NameContainer>{name}</NameContainer>
                        <PriceContainer>${price}</PriceContainer>
                    </CollectionFooterContainer>
                <AddButton onClick={()=> addItem(item)} inverted> Add to cart </AddButton>
        </CollectionItemContainer>


        // ******* Below Does Not Apply Styled-Components; But Appying With SCSS ******
    // <div className="collection-item">
    //     <div className="image" style = {{ backgroundImage: `url(${imageUrl})` }} />
    //         <div className="collection-footer">
    //             <span className="name">{name}</span>
    //             <span className="price">{price}</span>
    //         </div>
    //     <CustomButton className="custom-button" onClick={()=>addItem(item)} inverted> Add to cart </CustomButton>
    // </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)