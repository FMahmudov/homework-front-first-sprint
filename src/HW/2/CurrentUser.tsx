import { UserType } from './HW2';

type CurrentUserPropsType = {
  user: UserType
};

export const CurrentUser = ({user}: CurrentUserPropsType) => {
  return (
    <li key={user.id} id={`hw02-user-${user.id}`}>
      <strong>{user.name}</strong> (Age: {user.age})<strong> Address: </strong>
      {user.address.street}, {user.address.city}
    </li>
  );
};
