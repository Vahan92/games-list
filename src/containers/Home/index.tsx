// @ts-nocheck
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Active } from '../../assets/icons/icon-favorites-active.svg';
import { ReactComponent as NoActive } from '../../assets/icons/icon-favorites-noactive.svg';
import largePlaceholder from '../../assets/placeholder/large/placeholder.jpg';
import smallPlaceholder from '../../assets/placeholder/small/placeholder.jpg';
import { attemptToGetGames } from '../../store/actions/games';
import Sidebar from '../Sidebar';
import { checkImg, importAll } from './../../utils/imgLoader';
import { Heart, ImgContainer, Wrapper } from './styled';


function Home() {
  const dispatch = useDispatch();
  const { gamesReducer: { gamesList: { games } } } = useSelector((state: any) => state);
  const { gamesReducer: { gamesList: { categories } } } = useSelector((state: any) => state);

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [favorites, setFavorite] = useState<Array<number>>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    dispatch(attemptToGetGames());
  }, []);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const smallimagesList = importAll((require as any).context('../../assets/imgs/small', false, /\.(png|jpe?g|svg)$/));
  const bigImagesList = importAll((require as any).context('../../assets/imgs/large', false, /\.(png|jpe?g|svg)$/));


  const filteredByCategory = games && selectedCategory && games.filter(game => {
    return selectedCategory.games.some(category => {
      return category.id === game.id;
    });
  })?.map((data, i) =>({ ...data, top: selectedCategory.games[i].top }));

  const filteredByInput = filteredByCategory?.filter((game) =>
    game.name.toUpperCase().includes(inputText.toUpperCase())
  );

  const filteredByFavorite = showFavorites
    ? filteredByInput?.filter(({ id }) => favorites.indexOf(id) > -1)
    : filteredByInput;

  const bigImg = filteredByFavorite?.filter(data => data.top);
  const smallImg = filteredByFavorite?.filter(data => !data.top);

  const addFavorite = (id: number) => {
    if (favorites.indexOf(id) > - 1) {
      const updatedFavorites = favorites.filter(index => index !== id);
      setFavorite(updatedFavorites);
    } else {
      setFavorite([...favorites, id]);
    }
  };

  const showHeart = (id: number) => {
    if (favorites.indexOf(id) > - 1) {
      return <Active />;
    } else {
      return <NoActive />;
    }
  };

  return (
    <Wrapper>
      <Sidebar
        setInputText={setInputText}
        categories={categories}
        showFavorites={showFavorites}
        setSelectedCategory={setSelectedCategory}
        setShowFavorites={setShowFavorites}
        favorites={favorites}
      />
      <ImgContainer>
        {bigImg?.length > 0 && (
          <div>
            {bigImg.map(({ id, name, img }) => {
              return <div key={name}>
                <img
                  src={checkImg(bigImagesList, img) || largePlaceholder}
                  alt={name}
                />
                {!checkImg(bigImagesList, img) && <span>{name}</span>}
                <Heart onClick={() => addFavorite(id)}>
                  {showHeart(id)}
                </Heart>
              </div>;
            })}
          </div>
        )}
        {smallImg?.length > 0 && (
          <div>
            {smallImg.map(({ id, name, img }) => {
              return <div key={name}>
                <img
                  src={checkImg(smallimagesList, img) || smallPlaceholder}
                  alt={name}
                />
                {!checkImg(smallimagesList, img) && <span>{name}</span>}
                <Heart onClick={() => addFavorite(id)}>
                  {showHeart(id)}
                </Heart>
              </div>;
            })}
          </div>
        )}
      </ImgContainer>
    </Wrapper>
  );
}

export default Home;
