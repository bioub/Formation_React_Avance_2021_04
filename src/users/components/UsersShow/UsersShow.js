import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';

export default function UsersShow({ user, loading }) {
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate si user change');
    console.log(user);
    return () => {
      console.log('componentWillUnmount + entre 2 refresh si user change');
      console.log(user);
    }
  }, [user]);

  return (
    <div className="UsersShow">
      {loading && <CircularProgress />}
      {!loading && user && (
        <>
          <h2>{user.name}</h2>
          <h3>Phone</h3>
          <p>{user.phone}</p>
          <h3>Email</h3>
          <p>{user.email}</p>
          <h3>Address</h3>
          <p>
            {user.address.street}
            <br />
            {user.address.city}
            {user.address.zipcode}
          </p>
        </>
      )}
    </div>
  );
}
