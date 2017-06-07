import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	console.log(video.snippet);

	return (
		<a href="#" className="list-group-item list-group-item-action flex-column" onClick={() => onVideoSelect(video)}>
			<div className="d-flex w-100">
				<div className="media-object">
					<img src={imageUrl} />
				</div>
				<div>
					<strong className="mb-1">{video.snippet.title}</strong>
				</div>
			</div>
		</a>
	);
};

export default VideoListItem;