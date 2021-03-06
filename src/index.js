import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDWWCP10Ej8qMYPTGrCOHieGsUC5YR062k';


// Create a new component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Winter in the Alps');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos} 
					/>
				</div>
			</div>
		);
	}
}

// Render it
ReactDOM.render(<App />, document.querySelector('.container'));
