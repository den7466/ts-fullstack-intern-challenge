import clsx from 'clsx';
import styles from './Header.module.scss';
import { HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props: HTMLAttributes<HTMLElement>) {
  const { className } = props;

  return (
    <>
      <div className={clsx(styles.menu, className)}>
        <div className={'container'}>
          <ul className={clsx(styles.menu__list)}>
            <li className={clsx(styles.menu__item)}>
              <NavLink to={'/'} className={({isActive}) => isActive ?  clsx(styles.menu__link, styles.menu__link_active) : clsx(styles.menu__link)}>Все котики</NavLink>
            </li>
            <li className={clsx(styles.menu__item)}>
              <NavLink to={'/favourites'} className={({isActive}) => isActive ?  clsx(styles.menu__link, styles.menu__link_active) : clsx(styles.menu__link)}>
                Любимые котики
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
