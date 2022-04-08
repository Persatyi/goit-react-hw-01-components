import s from './Friends.module.css';
import PropTypes from 'prop-types';

const Friends = ({ friends = [] }) => {
  const list = friends.map(el => {
    const { avatar, name, isOnline, id } = el;
    return (
      <li className={s.item} key={id} id={id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    );
  });
  return <ul className={s.list}>{list}</ul>;
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};

export default Friends;
