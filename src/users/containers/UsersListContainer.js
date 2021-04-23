import { connect } from 'react-redux';

import { userFetch } from '../actions';
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
