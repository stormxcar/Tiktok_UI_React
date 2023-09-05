import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assets/images";
import {BsSearch} from  'react-icons/bs'
import {AiFillCloseCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'

const cx = classNames.bind(styles);


function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo_tiktok" />
        </div>
        <div className={cx('search_box')}>
            <input type="text" placeholder="Search accounts and video" 
            spellcheck={false}/>
            <button className={cx('close_btn')}>
                <AiFillCloseCircle></AiFillCloseCircle>
            </button>
            <AiOutlineLoading3Quarters className={cx('loading')}></AiOutlineLoading3Quarters>
            <button className={cx('search_btn')}>
                <BsSearch></BsSearch>
            </button>
        </div>
        <div className={cx('actions')}>

        </div>
      </div>
    </header>
  );
}

export default Header;
