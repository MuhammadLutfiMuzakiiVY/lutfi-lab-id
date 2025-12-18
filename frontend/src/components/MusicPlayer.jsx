import React, { useState, useEffect, useRef } from 'react'

// YouTube video IDs from the provided links
const playlist = [
    { id: '_SCdj9d8SUQ', title: 'Track 1' },
    { id: 'cSLAO7zxS2M', title: 'Track 2' },
    { id: '2tqQcIBhSOE', title: 'Track 3' },
    { id: 'ccu6JuC21rk', title: 'Track 4' },
    { id: '2Vv-BfVoq4g', title: 'Track 5' },
    { id: 'pRfmrE0ToTo', title: 'Track 6' },
    { id: 'RBumgq5yVrA', title: 'Track 7' },
    { id: 'RgKAFK5djSk', title: 'Track 8 - See You Again' },
    { id: 'JGwWNGJdvx8', title: 'Track 9 - Shape of You' },
    { id: '09R8_2nJtjg', title: 'Track 10 - Sugar' },
    { id: 'Il-an3K9pjg', title: 'Track 11' },
    { id: 'WXBHCQYxwr0', title: 'Track 12' },
    { id: 'SxGLPVvNjvY', title: 'Track 13' },
    { id: '89S-RbszwJE', title: 'Track 14' },
    { id: 'fRh_vgS2dFE', title: 'Track 15 - Sorry' },
    { id: 'oyEuk8j8imI', title: 'Track 16' },
]

// Icons
const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
)

const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
)

const NextIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
)

const PrevIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </svg>
)

const VolumeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
)

const MuteIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
)

const ShuffleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
    </svg>
)

const RepeatIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
    </svg>
)

const MusicIcon = () => (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        {/* Diamond shape background - rotated square */}
        <g transform="rotate(45 50 50)">
            {/* Shadow/depth */}
            <rect x="18" y="22" width="64" height="64" rx="8" fill="#e57373" />
            {/* Main diamond */}
            <rect x="18" y="18" width="64" height="64" rx="8" fill="#f8bbd9" />
        </g>
        {/* Double music note */}
        <g transform="translate(25, 28)">
            {/* Left note circle */}
            <ellipse cx="18" cy="48" rx="10" ry="7" fill="#e57373" />
            {/* Right note circle */}
            <ellipse cx="42" cy="44" rx="10" ry="7" fill="#e57373" />
            {/* Left stem */}
            <rect x="26" y="15" width="4" height="35" fill="#e57373" />
            {/* Right stem */}
            <rect x="50" y="11" width="4" height="35" fill="#e57373" />
            {/* Connecting bar */}
            <path d="M26 15 L26 22 L54 15 L54 11 Z" fill="#e57373" />
        </g>
    </svg>
)

const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
)

function MusicPlayer() {
    const [currentTrack, setCurrentTrack] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)
    const [isMuted, setIsMuted] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [showPlaylist, setShowPlaylist] = useState(false)
    const [playerReady, setPlayerReady] = useState(false)
    const playerRef = useRef(null)
    const containerRef = useRef(null)

    // Load YouTube IFrame API
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/iframe_api'
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

            window.onYouTubeIframeAPIReady = () => {
                initPlayer()
            }
        } else {
            initPlayer()
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [])

    const initPlayer = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
            height: '0',
            width: '0',
            videoId: playlist[0].id,
            playerVars: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                rel: 0,
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        })
    }

    const onPlayerReady = (event) => {
        setPlayerReady(true)
        event.target.setVolume(volume)
    }

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            handleNext()
        }
        if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true)
        }
        if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false)
        }
    }

    const togglePlay = () => {
        if (!playerRef.current || !playerReady) return

        if (isPlaying) {
            playerRef.current.pauseVideo()
        } else {
            playerRef.current.playVideo()
        }
    }

    const handlePrev = () => {
        if (!playerRef.current || !playerReady) return

        let newTrack
        if (shuffle) {
            newTrack = Math.floor(Math.random() * playlist.length)
        } else {
            newTrack = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
        }
        setCurrentTrack(newTrack)
        playerRef.current.loadVideoById(playlist[newTrack].id)
    }

    const handleNext = () => {
        if (!playerRef.current || !playerReady) return

        let newTrack
        if (shuffle) {
            newTrack = Math.floor(Math.random() * playlist.length)
        } else if (repeat && currentTrack === playlist.length - 1) {
            newTrack = 0
        } else {
            newTrack = (currentTrack + 1) % playlist.length
        }
        setCurrentTrack(newTrack)
        playerRef.current.loadVideoById(playlist[newTrack].id)
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value)
        setVolume(newVolume)
        if (playerRef.current && playerReady) {
            playerRef.current.setVolume(newVolume)
        }
        if (newVolume === 0) {
            setIsMuted(true)
        } else {
            setIsMuted(false)
        }
    }

    const toggleMute = () => {
        if (!playerRef.current || !playerReady) return

        if (isMuted) {
            playerRef.current.unMute()
            playerRef.current.setVolume(volume || 50)
            setIsMuted(false)
        } else {
            playerRef.current.mute()
            setIsMuted(true)
        }
    }

    const selectTrack = (index) => {
        if (!playerRef.current || !playerReady) return

        setCurrentTrack(index)
        playerRef.current.loadVideoById(playlist[index].id)
        setShowPlaylist(false)
    }

    if (isMinimized) {
        return (
            <div className="music-player-mini" onClick={() => setIsMinimized(false)}>
                <div className="mini-icon">
                    <MusicIcon />
                </div>
                <div className={`mini-visualizer ${isPlaying ? 'playing' : ''}`}>
                    <span></span><span></span><span></span>
                </div>
                <style>{miniStyles}</style>
            </div>
        )
    }

    return (
        <div className="music-player" ref={containerRef}>
            {/* Hidden YouTube Player */}
            <div id="youtube-player" style={{ display: 'none' }}></div>

            {/* Player Header */}
            <div className="player-header">
                <div className="header-left">
                    <MusicIcon />
                    <span>Music Player</span>
                </div>
                <div className="header-actions">
                    <button className="minimize-btn" onClick={() => setIsMinimized(true)}>
                        <span>−</span>
                    </button>
                </div>
            </div>

            {/* Now Playing */}
            <div className="now-playing">
                <div className="album-art">
                    <img
                        src={`https://img.youtube.com/vi/${playlist[currentTrack].id}/mqdefault.jpg`}
                        alt="Album Art"
                    />
                    <div className={`visualizer ${isPlaying ? 'playing' : ''}`}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div className="track-info">
                    <div className="track-title">{playlist[currentTrack].title}</div>
                    <div className="track-number">Track {currentTrack + 1} of {playlist.length}</div>
                </div>
            </div>

            {/* Controls */}
            <div className="player-controls">
                <button
                    className={`control-btn small ${shuffle ? 'active' : ''}`}
                    onClick={() => setShuffle(!shuffle)}
                    title="Shuffle"
                >
                    <ShuffleIcon />
                </button>
                <button className="control-btn" onClick={handlePrev} title="Previous">
                    <PrevIcon />
                </button>
                <button className="control-btn play-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button className="control-btn" onClick={handleNext} title="Next">
                    <NextIcon />
                </button>
                <button
                    className={`control-btn small ${repeat ? 'active' : ''}`}
                    onClick={() => setRepeat(!repeat)}
                    title="Repeat"
                >
                    <RepeatIcon />
                </button>
            </div>

            {/* Volume Control */}
            <div className="volume-control">
                <button className="volume-btn" onClick={toggleMute}>
                    {isMuted || volume === 0 ? <MuteIcon /> : <VolumeIcon />}
                </button>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                />
                <span className="volume-value">{isMuted ? 0 : volume}%</span>
            </div>

            {/* Playlist Toggle */}
            <button className="playlist-toggle" onClick={() => setShowPlaylist(!showPlaylist)}>
                {showPlaylist ? 'Hide Playlist' : 'Show Playlist'} ({playlist.length} tracks)
            </button>

            {/* Playlist */}
            {showPlaylist && (
                <div className="playlist">
                    {playlist.map((track, index) => (
                        <div
                            key={track.id}
                            className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                            onClick={() => selectTrack(index)}
                        >
                            <span className="track-num">{index + 1}</span>
                            <img
                                src={`https://img.youtube.com/vi/${track.id}/default.jpg`}
                                alt=""
                                className="thumb"
                            />
                            <span className="track-name">{track.title}</span>
                            {index === currentTrack && isPlaying && (
                                <div className="playing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <style>{playerStyles}</style>
        </div>
    )
}

const miniStyles = `
    .music-player-mini {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #f8bbd9, #f48fb1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(244, 143, 177, 0.5);
        z-index: 1000;
        transition: all 0.3s ease;
        animation: pulse-glow-pink 2s ease-in-out infinite;
        border: 3px solid rgba(255, 255, 255, 0.3);
    }

    .music-player-mini:hover {
        transform: scale(1.15);
        box-shadow: 0 8px 35px rgba(244, 143, 177, 0.7);
    }

    .mini-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mini-icon svg {
        width: 40px;
        height: 40px;
    }

    .mini-visualizer {
        position: absolute;
        bottom: -10px;
        display: flex;
        gap: 3px;
        align-items: flex-end;
        height: 14px;
    }

    .mini-visualizer span {
        width: 4px;
        background: linear-gradient(to top, #e57373, #f48fb1);
        border-radius: 2px;
        height: 4px;
    }

    .mini-visualizer.playing span {
        animation: miniBar 0.5s ease-in-out infinite alternate;
    }

    .mini-visualizer.playing span:nth-child(2) { animation-delay: 0.1s; }
    .mini-visualizer.playing span:nth-child(3) { animation-delay: 0.2s; }

    @keyframes miniBar {
        to { height: 14px; }
    }

    @keyframes pulse-glow-pink {
        0%, 100% { 
            box-shadow: 0 4px 20px rgba(244, 143, 177, 0.5);
            transform: scale(1);
        }
        50% { 
            box-shadow: 0 6px 30px rgba(229, 115, 115, 0.6);
            transform: scale(1.05);
        }
    }
`

const playerStyles = `
    .music-player {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 320px;
        background: rgba(15, 15, 30, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        border: 1px solid rgba(99, 102, 241, 0.2);
        padding: 1rem;
        z-index: 1000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }

    .player-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #a78bfa;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .header-actions {
        display: flex;
        gap: 0.5rem;
    }

    .minimize-btn {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        line-height: 1;
        transition: all 0.2s;
    }

    .minimize-btn:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .now-playing {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .album-art {
        width: 80px;
        height: 80px;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    .album-art img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .visualizer {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 3px;
        align-items: flex-end;
        height: 20px;
    }

    .visualizer span {
        width: 4px;
        background: linear-gradient(to top, #22d3ee, #a78bfa);
        border-radius: 2px;
        height: 4px;
    }

    .visualizer.playing span {
        animation: bar 0.4s ease-in-out infinite alternate;
    }

    .visualizer.playing span:nth-child(1) { animation-delay: 0s; }
    .visualizer.playing span:nth-child(2) { animation-delay: 0.1s; }
    .visualizer.playing span:nth-child(3) { animation-delay: 0.2s; }
    .visualizer.playing span:nth-child(4) { animation-delay: 0.3s; }
    .visualizer.playing span:nth-child(5) { animation-delay: 0.4s; }

    @keyframes bar {
        to { height: 20px; }
    }

    .track-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
    }

    .track-title {
        font-weight: 600;
        color: white;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.25rem;
    }

    .track-number {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .player-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .control-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }

    .control-btn.small {
        width: 32px;
        height: 32px;
    }

    .control-btn.small.active {
        color: #22d3ee;
        background: rgba(34, 211, 238, 0.2);
    }

    .control-btn.play-btn {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }

    .control-btn.play-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
    }

    .volume-control {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .volume-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        padding: 0;
        display: flex;
    }

    .volume-btn:hover {
        color: white;
    }

    .volume-slider {
        flex: 1;
        height: 4px;
        -webkit-appearance: none;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        outline: none;
    }

    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        background: #6366f1;
        border-radius: 50%;
        cursor: pointer;
    }

    .volume-value {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.5);
        min-width: 32px;
        text-align: right;
    }

    .playlist-toggle {
        width: 100%;
        padding: 0.625rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .playlist-toggle:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    .playlist {
        margin-top: 0.75rem;
        max-height: 200px;
        overflow-y: auto;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.2);
    }

    .playlist::-webkit-scrollbar {
        width: 4px;
    }

    .playlist::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
    }

    .playlist-item {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 6px;
    }

    .playlist-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .playlist-item.active {
        background: rgba(99, 102, 241, 0.2);
    }

    .track-num {
        width: 20px;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
    }

    .thumb {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        object-fit: cover;
    }

    .track-name {
        flex: 1;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.8);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .playlist-item.active .track-name {
        color: #a78bfa;
    }

    .playing-indicator {
        display: flex;
        gap: 2px;
        align-items: flex-end;
        height: 14px;
    }

    .playing-indicator span {
        width: 3px;
        background: #22d3ee;
        border-radius: 1px;
        animation: bar 0.4s ease-in-out infinite alternate;
    }

    .playing-indicator span:nth-child(2) { animation-delay: 0.1s; }
    .playing-indicator span:nth-child(3) { animation-delay: 0.2s; }

    @media (max-width: 400px) {
        .music-player {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
        }
    }
`

export default MusicPlayer
