import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem({ name, imageLink, username }) {
    return (
        <Link to={`@${username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={imageLink} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>{username}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
