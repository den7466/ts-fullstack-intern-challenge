import clsx from 'clsx';
import styles from './Card.module.scss';
import { HTMLAttributes } from 'react';

type CardProps = {
  url: string;
  description: string;
  favourite: boolean;
  onClick: () => void;
} & HTMLAttributes<HTMLElement>;

function Card(props: CardProps) {
  const { url, description, favourite, className, onClick } = props;
  return (
    <>
      <div className={clsx(styles.card, className)}>
        <img className={clsx(styles.card__image)} src={url} alt={description} />
        <span className={clsx(styles.card__substrate)}></span>
        <button className={clsx(styles.card__heart, favourite && styles.card__heart_active)} onClick={onClick}></button>
      </div>
    </>
  );
}

export default Card;