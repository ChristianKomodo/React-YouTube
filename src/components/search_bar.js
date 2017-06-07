import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="form-group row mt-4">
				<h4 className="col-3 col-form-label main-title">YouTube Player</h4>
				<div className="col-5">
					<input 
						className="form-control" 
						type="text"
						placeholder="Enter a search term"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
					/>
				</div>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;