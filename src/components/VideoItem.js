import './VideoItem.css';
import React from 'react';

const VideoItem = ({ videoItem, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(videoItem)} className="video-item item" key={videoItem.id.videoId}>
            <img alt={videoItem.snippet.description} className="ui image" src={videoItem.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {videoItem.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;