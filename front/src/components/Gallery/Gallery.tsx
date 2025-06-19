import clsx from 'clsx';
import styles from './Gallery.module.scss';
import { HTMLAttributes, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { TImage } from '../../types/types';

type TGalleryProps = {
  data: TImage[];
  onClickHandler: (id: string) => void;
} & HTMLAttributes<HTMLElement>;

function Gallery(props: TGalleryProps) {
  const { data, onClickHandler, className } = props;

  return (
    <>
      <div className={'container'}>
        <div className={clsx(styles.gallery, className)}>
          {data.map((item) =>
            <Card url={item.url} description={item.description} favourite={item.favourite} onClick={() => onClickHandler(item.id)} key={item.id} />
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;