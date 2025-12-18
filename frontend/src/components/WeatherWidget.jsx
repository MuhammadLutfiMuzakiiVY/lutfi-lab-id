import { useState, useEffect } from 'react'

// Weather Widget - Real-time weather display
function WeatherWidget() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState('Jakarta')
    const [searchInput, setSearchInput] = useState('')

    const WEATHER_ICONS = {
        Clear: '☀️',
        Clouds: '☁️',
        Rain: '🌧️',
        Drizzle: '🌦️',
        Thunderstorm: '⛈️',
        Snow: '❄️',
        Mist: '🌫️',
        Fog: '🌫️',
        Haze: '🌫️'
    }

    const fetchWeather = async (city) => {
        setLoading(true)
        setError(null)

        try {
            // Using wttr.in free weather API (no API key needed)
            const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
            if (!response.ok) throw new Error('City not found')

            const data = await response.json()
            const current = data.current_condition[0]
            const area = data.nearest_area[0]

            setWeather({
                city: area.areaName[0].value,
                country: area.country[0].value,
                temp: current.temp_C,
                feelsLike: current.FeelsLikeC,
                humidity: current.humidity,
                windSpeed: current.windspeedKmph,
                description: current.weatherDesc[0].value,
                icon: getWeatherIcon(current.weatherDesc[0].value),
                visibility: current.visibility,
                uvIndex: current.uvIndex,
                pressure: current.pressure,
                forecast: data.weather.slice(0, 3).map(day => ({
                    date: day.date,
                    maxTemp: day.maxtempC,
                    minTemp: day.mintempC,
                    description: day.hourly[4]?.weatherDesc[0]?.value || 'Clear'
                }))
            })
        } catch (err) {
            setError('Tidak dapat memuat data cuaca. Coba lagi.')
            console.error('Weather fetch error:', err)
        } finally {
            setLoading(false)
        }
    }

    const getWeatherIcon = (description) => {
        const desc = description.toLowerCase()
        if (desc.includes('clear') || desc.includes('sunny')) return '☀️'
        if (desc.includes('cloud') || desc.includes('overcast')) return '☁️'
        if (desc.includes('rain') || desc.includes('shower')) return '🌧️'
        if (desc.includes('thunder')) return '⛈️'
        if (desc.includes('snow')) return '❄️'
        if (desc.includes('fog') || desc.includes('mist') || desc.includes('haze')) return '🌫️'
        if (desc.includes('partly')) return '⛅'
        return '🌤️'
    }

    useEffect(() => {
        fetchWeather(location)
    }, [location])

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchInput.trim()) {
            setLocation(searchInput.trim())
            setSearchInput('')
        }
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric' })
    }

    return (
        <div className="weather-widget">
            <div className="weather-header">
                <h2>🌤️ Weather Widget</h2>
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search city..."
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">🔍</button>
                </form>
            </div>

            {loading ? (
                <div className="weather-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading weather data...</p>
                </div>
            ) : error ? (
                <div className="weather-error">
                    <p>❌ {error}</p>
                    <button onClick={() => fetchWeather(location)} className="retry-btn">
                        🔄 Retry
                    </button>
                </div>
            ) : weather && (
                <>
                    <div className="current-weather">
                        <div className="weather-main">
                            <span className="weather-icon">{weather.icon}</span>
                            <div className="temp-container">
                                <span className="temperature">{weather.temp}°C</span>
                                <span className="feels-like">Feels like {weather.feelsLike}°C</span>
                            </div>
                        </div>
                        <div className="weather-info">
                            <h3>{weather.city}</h3>
                            <p className="country">{weather.country}</p>
                            <p className="description">{weather.description}</p>
                        </div>
                    </div>

                    <div className="weather-details">
                        <div className="detail-item">
                            <span className="detail-icon">💧</span>
                            <div className="detail-text">
                                <span className="detail-label">Humidity</span>
                                <span className="detail-value">{weather.humidity}%</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-icon">💨</span>
                            <div className="detail-text">
                                <span className="detail-label">Wind</span>
                                <span className="detail-value">{weather.windSpeed} km/h</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-icon">👁️</span>
                            <div className="detail-text">
                                <span className="detail-label">Visibility</span>
                                <span className="detail-value">{weather.visibility} km</span>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="detail-icon">☀️</span>
                            <div className="detail-text">
                                <span className="detail-label">UV Index</span>
                                <span className="detail-value">{weather.uvIndex}</span>
                            </div>
                        </div>
                    </div>

                    <div className="forecast">
                        <h4>3-Day Forecast</h4>
                        <div className="forecast-cards">
                            {weather.forecast.map((day, i) => (
                                <div key={i} className="forecast-card">
                                    <span className="forecast-date">{formatDate(day.date)}</span>
                                    <span className="forecast-icon">{getWeatherIcon(day.description)}</span>
                                    <div className="forecast-temps">
                                        <span className="max">{day.maxTemp}°</span>
                                        <span className="min">{day.minTemp}°</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <style>{`
                .weather-widget {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .weather-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .weather-header h2 {
                    margin: 0;
                    font-size: 1.25rem;
                }

                .search-form {
                    display: flex;
                    gap: 0.5rem;
                }

                .search-input {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    width: 150px;
                }

                .search-input::placeholder {
                    color: var(--text-muted);
                }

                .search-btn {
                    padding: 0.5rem 0.75rem;
                    background: #6366f1;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .weather-loading, .weather-error {
                    text-align: center;
                    padding: 3rem;
                    color: var(--text-secondary);
                }

                .loading-spinner {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(255, 255, 255, 0.1);
                    border-top-color: #6366f1;
                    border-radius: 50%;
                    margin: 0 auto 1rem;
                    animation: spin 1s linear infinite;
                }

                .retry-btn {
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #6366f1;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }

                .current-weather {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .weather-main {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .weather-icon {
                    font-size: 4rem;
                }

                .temp-container {
                    display: flex;
                    flex-direction: column;
                }

                .temperature {
                    font-size: 2.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .feels-like {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .weather-info h3 {
                    margin: 0;
                    font-size: 1.25rem;
                }

                .weather-info .country {
                    margin: 0.25rem 0;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .weather-info .description {
                    margin: 0;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    text-transform: capitalize;
                }

                .weather-details {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    margin-bottom: 1.5rem;
                }

                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .detail-icon {
                    font-size: 1.25rem;
                }

                .detail-text {
                    display: flex;
                    flex-direction: column;
                }

                .detail-label {
                    font-size: 0.7rem;
                    color: var(--text-muted);
                }

                .detail-value {
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .forecast h4 {
                    margin: 0 0 1rem;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }

                .forecast-cards {
                    display: flex;
                    gap: 0.75rem;
                }

                .forecast-card {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    transition: all 0.2s;
                }

                .forecast-card:hover {
                    background: rgba(255, 255, 255, 0.08);
                }

                .forecast-date {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .forecast-icon {
                    font-size: 1.75rem;
                }

                .forecast-temps {
                    display: flex;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                }

                .forecast-temps .max {
                    font-weight: 600;
                }

                .forecast-temps .min {
                    color: var(--text-muted);
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 480px) {
                    .current-weather {
                        flex-direction: column;
                        text-align: center;
                    }

                    .weather-details {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>
        </div>
    )
}

export default WeatherWidget
