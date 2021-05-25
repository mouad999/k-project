import {useState,useEffect} from 'react' 
import './app.css'
import fire from './fire';
import Home from './Home';
import Login from './Login';


function App() {
  
const [user, setUser] = useState(null);

  useEffect(()=>{
    authListener();
  },[]);
  function authListener(){
    fire.auth().onAuthStateChanged(user=>{
      if(user){ 
      setUser(user);
      console.log(user);
      }else{
        setUser(null);
      }
    })
  }
  return (
    <div className="App">
      
  <table id="customers">
    <tbody>
  <tr>
    <th>image</th>
    <th>name</th>
    <th>caracteristique</th>
  </tr>
  <tr>
    <td><img src={require('./mikoto.jpg').default} alt="pic"/></td>
    <td>suoh mikoto</td>
    <td>red fire</td>
  </tr>
  </tbody>
  </table>
  <div className="user">
  {user ? (<Home />) : (<Login />)}
  </div>
    </div>
  );
}

export default App;
