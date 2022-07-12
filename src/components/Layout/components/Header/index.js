import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//can use '-' define class name: post-item
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        {/* Search */}
      </div>
    </header>
  );
}

export default Header;
