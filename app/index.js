var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// React.createClass()

class App extends React.Component{
	// state
	// life cycles (hooks for events of components)
	// UI
	render(){
		return (
			<div>
			 Hello a!
			 </div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);