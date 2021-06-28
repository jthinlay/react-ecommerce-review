import React from 'react';
import {DirectoryMenuContainer} from './directory.styles';
import {connect} from 'react-redux';
import {selectDirectorySelections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    {
      sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}  /> ))
    }
    
  </DirectoryMenuContainer> )
  
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})
export default connect(mapStateToProps)(Directory)