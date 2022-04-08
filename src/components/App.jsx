import Profile from './Profile/Profile';
import user from 'User/user.json';
import data from 'Data/data.json';
import Statistics from './Statistic/Statistics';
import Friends from 'components/Friends/Friends';
import friends from 'Friends/friends.json';
import transactions from 'Transactions/transactions.json';
import TransactionHistory from 'components/Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
