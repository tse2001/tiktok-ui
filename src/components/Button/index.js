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
  onClick,
  ...passsProps
}) {
  let Compo = 'button';
  const props = {
    onClick,
    ...passsProps,
  };

  const classes = cx('wrapper', {
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

export default Button;
