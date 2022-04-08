import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats = [] }) => {
  const listOfStats = stats.map(el => {
    const { id, label, percentage } = el;
    return (
      <li className={s.item} key={id}>
        <span className={s.type}>{label}</span>
        <span className={s.value}>{percentage}%</span>
      </li>
    );
  });
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>{listOfStats}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
