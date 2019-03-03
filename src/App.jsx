import React from 'react'

class App extends React.Component {

	state = {
		posts: null,
		loading: true
	}

	componentDidMount() {
		this.load()
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
				<div>
					{this.state.loading ? <div className='loading' /> : null}
					<button onClick={this.onAddPost}>Add post</button>
					{postElements}
				</div>
			)
		}
	}

	onAddPost = () => {
		const promise = fetch('http://localhost:7777/add-post')
		this.setState({ loading: true })
		promise.then(() => {
			this.load()
		})
	}

	load() {
		const promise = fetch('http://localhost:7777/posts')
		promise.then((response) => {
			return response.json()
		}).then((posts) => {
			this.setState({
				posts: posts,
				loading: false
			})
		})
	}

}

export default App
