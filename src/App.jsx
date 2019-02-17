import React from 'react'

class App extends React.Component {

	state = {
		data: null
	}

	componentDidMount() {
		const promise = fetch('http://localhost:7777/')
		promise.then((response) => {
			return response.text()
		}).then((data) => {
			this.setState({
				data: data
			})
		})
	}

	render() {
		if (this.state.data === null) {
			return <h2>Loading...</h2>
		}
		else {
			return <h2>{this.state.data}</h2>
		}
	}

}

export default App
