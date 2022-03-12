import React from 'react';

import { SidebarWrapper, StyledUl } from './styled';

function Sidebar({ setSelectedCategory, categories, setInputText, setShowFavorites, favorites, showFavorites }) {

  return (
    <SidebarWrapper>
      <input type="text" placeholder='Type to search' onChange={(e) => setInputText(e.target.value)} />
      <StyledUl>
        {categories?.map(value => {
          return <li onClick={() => setSelectedCategory(value)} key={value.nameKey}>{value.nameKey}</li>;
        })}
      </StyledUl>
      <p onClick={() => setShowFavorites(!showFavorites)}>{`Favorites ${favorites.length}`}</p>
    </SidebarWrapper>
  );
}

export default Sidebar;
