//header

//sidebar
import classNames from 'classnames/bind';
import Header from "/Component/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from './DefautLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({children}){
    return(
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
//content (change)