import clsx from 'clsx';
import styles from './Header.module.scss';
import { HTMLAttributes } from 'react';

function Header(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <>
      <div className={clsx(styles.menu, className)}>
        <div className={'container'}>
          <ul className={clsx(styles.menu__list)}>
            <li className={clsx(styles.menu__item)}>
              <a
                className={clsx(styles.menu__link, styles.menu__link_active)}
                href="/"
              >
                Все котики
              </a>
            </li>
            <li className={clsx(styles.menu__item)}>
              <a className={clsx(styles.menu__link)} href="/favourites">
                Любимые котики
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
