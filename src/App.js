
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//components
import UserList from './components/UserList.jsx'
import Profile from './components/Profile.jsx'
//context
import UserState from './context/users/UserState.jsx'

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
            <div className="col-md-7">
              <UserList/>
            </div>
            <div className="col-md-5">
              <Profile/>
            </div>
        </div>
      </div>
    </UserState>
    
  );
}

export default App;
