import clsx from 'clsx';
import styles from './App.module.scss';
import { HTMLAttributes, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import { addLikeThunk, deleteLikeThunk, getLikesSelector, getLikesThunk } from '../../services/slices/likesSlice';
import { useDispatch, useSelector } from '../../services/store';
import { getImagesSelector, getImagesThunk } from '../../services/slices/imagesSlice';

function App(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;
  const likesItems = useSelector(getLikesSelector);
  const imagesItems = useSelector(getImagesSelector);
  const favouritesData = imagesItems.filter(item => likesItems.some(element => element.cat_id === item.id));
  const dispatch = useDispatch();

  const onLikesHandler = (id: string) => {
    const nowDate = new Date();
    const result = imagesItems.find((item) => item.id === id);
    if (result) {
      if (likesItems.some(item => item.cat_id === result.id)) {
        dispatch(deleteLikeThunk(result.id));
      } else {
        dispatch(addLikeThunk({ cat_id: result.id, created_at: nowDate }));
      }
    }
  };

  useEffect(() => {
    dispatch(getLikesThunk());
    dispatch(getImagesThunk());
  }, []);

  return (
    <BrowserRouter>
      <div className={clsx(styles.app, className)}>
        <Header />
        <Routes>
          <Route
            path={'/'}
            element={
              <Gallery data={imagesItems} likes={likesItems} onLikesHandler={onLikesHandler} />
            }
          />
          <Route
            path={'/favourites'}
            element={
              <Gallery
                data={favouritesData}
                likes={likesItems}
                onLikesHandler={onLikesHandler}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
