import React from 'react'

class App extends React.Component {

	state = {
		posts: null
	}

	componentDidMount() {
		const promise = fetch('http://localhost:7777/posts')
		promise.then((response) => {
			return response.json()
		}).then((posts) => {
			this.setState({
				posts: posts
			})
		})
	}

	render() {
		if (this.state.posts === null) {
			return <h2>Loading...</h2>
		}
		else {
			const postElements = this.state.posts.map((post) => {
				return (
					<div>
						<p>{post.body}</p>
						<h6>{post.date}</h6>
					</div>
				)
			})

			return (
				<div>{postElements}</div>
			)
		}
	}

}

export default App
