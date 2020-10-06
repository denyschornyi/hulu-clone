import React from 'react'
import './VideoCard.css'

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/W2pXHVDTyOQzYuLpj7pT_Profitable-Programmer.jpg" alt="movie"/>
            <p>This film about coding</p>
            <h2>Movie title</h2>
            <p>Numbers of likes...</p>
        </div>
    )
}

export default VideoCard
