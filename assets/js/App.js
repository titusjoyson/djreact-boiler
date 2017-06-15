import React from 'react';
import {Link} from 'react-router-dom';
class App extends React.Component {
    render(){
        return (
        	<div>
        		<Link to="/app">
              		<h1>Hello Django - React Skeleton by Titus Joyson</h1>
              	</Link>
            </div>
        );
    }
}

export default App;