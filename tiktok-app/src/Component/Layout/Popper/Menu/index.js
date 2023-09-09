import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "../../Popper";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) =>
      <MenuItem key={index} data={item} />
    );
  };
  return (
    <Tippy
      interactive // cho phep select
      delay={[0,700]}
        placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
