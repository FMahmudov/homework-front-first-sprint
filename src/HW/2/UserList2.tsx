import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

export type FilterValues = 'Los Angeles' | 'All'

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: (filter: FilterValues) => void
};

export const UserList2 = ({filterUsers, users}: UserList2PropsType) => {
	const {myFriends} = users

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} 
				onClick={() => filterUsers('Los Angeles')}>SHOW ME FRIENDS FROM LA
			</button>

			<button id={'hw03-filter-button'} 
				onClick={() => filterUsers('All')}>SHOW ME ALL FRIENDS
			</button>

			<ul>
			  {myFriends.map((user) => (
			    <CurrentUser key={user.id} user={user} />
			  ))}
			</ul>
		</div>
	);
};
