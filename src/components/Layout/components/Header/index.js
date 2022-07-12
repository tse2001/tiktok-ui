import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

//can use '-' define class name: post-item
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          {/* import from assets/images */}
          <img src={images.logo} alt="logo-tiktok" />
        </div>

        {/* Search */}
        <div className={cx('search')}>
          <input placeholder="Search account and video" spellCheck={false} />
          <button className={cx('clear-btn')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* actions */}
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
