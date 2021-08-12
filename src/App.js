import logo from './logo.svg';
import './App.css';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import topics from './topics.js';


function Home(){
    return <h1>HOME</h1>
}

function Resource (){
    const { topicId, subId} = useParams()

    const topic = topics.find(({ id }) => id === topicId)
        .resources.find(({ id }) => id === subId)

    return (
        <div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
            <a href={topic.url}>More info.</a>
        </div>
    )
}

function Topic(){
    const { topicId } = useParams()
    const { url, path } = useRouteMatch()

    const topic = topics.find(({id}) => id === topicId)

    return (
        <div>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>

            <ul>
                {topic.resources.map((sub)=> (
                    <li key={sub.id}>
                        <Link to={`/${url}/${sub.id}`}>{sub.name}</Link>
                    </li>
                ))}
            </ul>

            <Route path={`/${path}/:subID`}>
                <Topic />
            </Route>
        </div>
    )
}

function Topics(){
    const { url, path } = useRouteMatch()

    return (
        <div>
            <h1>Topics</h1>

            <ul>
                {topics.map(({ name, id})=> (
                    <li key={id}>
                        <Link to={`/${url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>

            <Route path={`/${path}/:topicId`}>
                <Topic />
            </Route>
        </div>
    )
}

function App() {
  return (
    <div className="App">
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
