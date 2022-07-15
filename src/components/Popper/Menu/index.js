import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem data={item} key={index} />);
  };

  return (
    <Tippy
      interactive //active element
      delay={[0, 600]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PoperWrapper className={cx('menu-proper')}>{renderItems()}</PoperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
