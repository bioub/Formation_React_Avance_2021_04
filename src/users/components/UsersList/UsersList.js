import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UsersList({ match, users = [], loading, onLoad }) {
  useEffect(() => {
    // redux-thunk | redux-observable
    onLoad();
  }, [onLoad]);
  return (
    <div className="UsersList">
      {loading ? (
        <CircularProgress />
      ) : (
        <List component="nav">
          {users.map((user) => (
            <ListItem
              key={user.id}
              button
              component={Link}
              to={match.path + '/' + user.id}
            >
              <ListItemText>{user.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}


// class UsersList extends Component {
//   async componentDidMount() {
//     // redux-thunk / redux-saga / redux-promise / redux-observable
//     this.props.dispatch(userFetch());
//     const users = await getAll();
//     this.props.dispatch(userFetchSuccess(users));
//   }
//   render() {
//     const { match, users = [], loading } = this.props;

//     return (
//       <div className="UsersList">
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <List component="nav">
//             {users.map((user) => (
//               <ListItem
//                 key={user.id}
//                 button
//                 component={Link}
//                 to={match.path + '/' + user.id}
//               >
//                 <ListItemText>{user.name}</ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </div>
//     );
//   }
// }

// export default class UsersList extends Component {
//   async componentDidMount() {
//     // redux-thunk / redux-saga / redux-promise / redux-observable
//     this.props.dispatch(userFetch());
//     const users = await getAll();
//     this.props.dispatch(userFetchSuccess(users));
//   }
//   render() {
//     const { match, users = [], loading } = this.props;

//     return (
//       <div className="UsersList">
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <List component="nav">
//             {users.map((user) => (
//               <ListItem
//                 key={user.id}
//                 button
//                 component={Link}
//                 to={match.path + '/' + user.id}
//               >
//                 <ListItemText>{user.name}</ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </div>
//     );
//   }
// }

// export class UsersList extends Component {
//   state = {
//     users: [],
//   };
//   async componentDidMount() {
//     const users = await getAll();
//     this.setState({
//       users,
//     });
//   }
//   render() {
//     const {match} = this.props;

//     return (
//       <div className="UsersList">
//         <List component="nav">
//           {this.state.users.map(user => (
//             <ListItem key={user.id} button component={Link} to={match.path + "/" + user.id}>
//               <ListItemText>{user.name}</ListItemText>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );
//   }
// }
