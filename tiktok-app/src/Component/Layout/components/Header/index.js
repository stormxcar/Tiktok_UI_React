import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assets/images";
import { BsSearch , BsQuestionCircle } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiOutlineLoading3Quarters,
  AiOutlinePlus,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {TbMessageLanguage} from 'react-icons/tb'
import {LuKeyboard} from 'react-icons/lu'
import Button from "../../../Button";
import {Wrapper as PopperWrapper} from '../../Popper'
 
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import AccountItem from "../../../SearchAccountItem";
import Menu from "../../Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon : <TbMessageLanguage></TbMessageLanguage>,
    title: "English",
  },
  {
    icon : <BsQuestionCircle></BsQuestionCircle>,
    title: "Feedback and Help",
    to : "/feedback"
  },
  {
    icon : <LuKeyboard></LuKeyboard>,
    title: "Keyboard Shortcut",
  }
]

function Header() {

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      
    },0)
  },[])

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo_tiktok" />
        </div>

        <Tippy
          interactive // cho phep select
          visible={searchResult.length > 0}
          render={attrs => (
            
                <div className={cx('search_result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search_title')}>Accounts</h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search_box")}>
            <input
              type="text"
              placeholder="Search accounts and video"
              spellcheck={false}
            />
            <button className={cx("close_btn")}>
              <AiFillCloseCircle></AiFillCloseCircle>
            </button>
            <AiOutlineLoading3Quarters
              className={cx("loading")}
            ></AiOutlineLoading3Quarters>
            <Tippy content="Tim kiem">
              <button className={cx("search_btn")}>
                <BsSearch></BsSearch>
              </button>
            </Tippy>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <Button text LeftIcon={<AiOutlinePlus></AiOutlinePlus>}>
            Upload
          </Button>
          <Button primary RightIcon={<FiLogIn></FiLogIn>}>
            Log in
          </Button>
          
          <Menu items={MENU_ITEM}>
          <button className={cx("btn_more")}>
            <BsThreeDotsVertical></BsThreeDotsVertical>
          </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
