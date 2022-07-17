import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    //handle logic
    //render menuItem
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // !! is convert boolean

            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    //reset to first menu
    const handleBackMenu = (prev) => {
        prev.slice(0, prev.length - 1);
    };

    const handleRender = (attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PoperWrapper className={cx('menu-proper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={() => {
                            setHistory(handleBackMenu);
                        }}
                    />
                )}

                {/* call func handle */}
                <div className={cx('menu-scroll')}>{renderItems()}</div>
            </PoperWrapper>
        </div>
    );

    const hanldeResetMenuOnClickOutsite = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive //active element
            delay={[0, 600]}
            placement="bottom-end"
            render={handleRender}
            onHide={hanldeResetMenuOnClickOutsite}
            hideOnClick={false}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.array,
};

export default Menu;
