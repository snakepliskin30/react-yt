import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
    if(!selectedVideo) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div className="ui segment">
            <div className="ui embed">
                <iframe title={selectedVideo.snippet.title} src={videoSrc}/>
            </div>
            <div className="ui header">{ selectedVideo.snippet.title }</div>
            <p>{ selectedVideo.snippet.description }</p>
        </div>
    );
};

export default VideoDetail;