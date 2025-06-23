import clsx from 'clsx';
import styles from './Gallery.module.scss';
import { HTMLAttributes } from 'react';
import Card from '../Card/Card';
import { TImage, TLike } from '../../types/types';

type TGalleryProps = {
  data: TImage[];
  likes: TLike[];
  onLikesHandler: (id: string) => void;
} & HTMLAttributes<HTMLElement>;

function Gallery(props: TGalleryProps) {
  const { data, likes, onLikesHandler, className } = props;

  return (
    <>
      <div className={'container'}>
        <div className={clsx(styles.gallery, className)}>
          {data.map((item) =>{
            const isFavourite = likes.some(element => element.cat_id === item.id);
            return <Card url={item.url} description={item.breads ? item.breads[0].name : ''} favourite={isFavourite} onClick={() => onLikesHandler(item.id)} key={item.id} />
          }
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;