import classNames from "classnames/bind";
import styles from './Account.module.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const cx = classNames.bind(styles);

function AccountItem(){
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1608859818568705.jpeg?x-expires=1694401200&x-signature=PBCje9KbdcTaGt2RiiB3vk71IpQ%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <BsFillCheckCircleFill className={cx('check_icon')}></BsFillCheckCircleFill>
                </h4>
                <span className={cx('username')}>nguynevana</span>
            </div>
        </div>
    )
}

export default AccountItem;