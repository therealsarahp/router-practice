import logo from './logo.svg';
import './App.css';
import { Link, Route} from 'react-router-dom';
import topics from './topics.js';

function Home(){
    return <h1>HOME</h1>
}

function Topics(){
    return (
        <div>
            <h1>TOPICS</h1>
            <ul>
                {topics.map(({ name, id})=> (
                    <li key={id}>
                        <Link to={`/topics/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Some words here</h2>
      </header>

        <div>
            <ul >
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='topics'>TOPICS</Link></li>
            </ul>

            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/topics'>
                <Topics />
            </Route>

        </div>

    </div>
  );
}

export default App;
