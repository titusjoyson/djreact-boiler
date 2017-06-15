import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import { IndexRoute, Router, Route, browserHistory } from 'react-router';

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, document.getElementById('root'));

export class Test extends React.Component{
	render(){
		return(
			<div>
				<div>
					<Link to="/app">
						<p> Go to app component</p>
					</Link>
				</div>
			</div>

		)
	}
}

ReactDOM.render((
   	<BrowserRouter>
   		<div>
          <Route path="/app" component={App}/>
          <Route path="/" component={Test}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'))






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom'
// import App from './components/App';

// ReactDOM.render((
//      <BrowserRouter>
//           <Route path="/" component={App}/>
//      </BrowserRouter>
//      ),
//      document.getElementById('root')
// );