import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon,
    className,
    onClick,
    ...passsProps
}) {
    let Compo = 'button';
    const props = {
        onClick,
        ...passsProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
    });

    if (to) {
        props.to = to;
        Compo = Link;
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }

    return (
        <Compo className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Compo>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.string,
    leftIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
