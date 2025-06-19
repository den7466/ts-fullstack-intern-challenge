import clsx from "clsx";
import styles from "./App.module.scss";
import { HTMLAttributes, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import { TImage } from "../../types/types";
import { mockImages } from "./mock";

function App(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;
  const [appState, setAppState] = useState<TImage[]>([]);

  const favourites: TImage[] = [];
  appState.forEach(item => {
    if (item.favourite)
      favourites.push(item);
  });

  const onFavouriteHandler = (id: string) => {
    const tempData = appState;
    const result = tempData.find((item) => item.id === id);
    if (result) {
      const index = tempData.indexOf(result);
      result.favourite = !result.favourite;
      tempData.splice(index, 1, result);
      setAppState([...tempData]);
    }
  };

  useEffect(() => {
    setAppState(mockImages);
  }, []);

  return (
    <BrowserRouter>
      <div className={clsx(styles.app, className)}>
        <Header />
        <Routes>
          <Route
            path={'/'}
            element={
              <Gallery data={appState} onClickHandler={onFavouriteHandler} />
            }
          />
          <Route
            path={'/favourites'}
            element={
              <Gallery
                data={favourites}
                onClickHandler={onFavouriteHandler}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
