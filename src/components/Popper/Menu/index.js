import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ children, items = [], onChange = defaultFunc }) {
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

    return (
        <Tippy
            interactive //active element
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-proper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        {/* call func handle */}
                        <div className={cx('menu-scroll')}>{renderItems()}</div>
                    </PoperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            hideOnClick={false}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
