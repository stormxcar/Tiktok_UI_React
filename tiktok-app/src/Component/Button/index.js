import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

// to : open link internal / href : open link external
function Button({
  to,
  primary = false,
  outline = false,
  href,
  children,
  disabled = false,
  small = false,
  large = false,
  rounded = false,
  className,
  onClick,
  LeftIcon,
  RightIcon,
  text = false,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    // đẩy thêm các prop mới truyền vào
    ...passProps,
  };
  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  // thêm primary , outline , ... và có thể scss chúng
  // mik có thể thêm tên className={cx('..')} để scss riêng ở file đó
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    RightIcon,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
        {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
    </Comp>
  );
}

export default Button;
