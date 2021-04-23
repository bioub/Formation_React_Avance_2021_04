import { connect } from 'react-redux';

import { userFetch, userFetchSuccess } from '../actions';
import { getAll } from '../api/users';
import UsersList from '../components/UsersList/UsersList';
import { selectUsersItems, selectUsersLoading } from '../selectors';

function mapStateToProps(state) {
  return {
    users: selectUsersItems(state),
    loading: selectUsersLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad() {
      dispatch(userFetch());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
