import { useLocation } from 'react-router-dom';

function LocationComponent() {
    const location = useLocation();
    return (
        <div>
            <h2>Location Demo</h2>
            <div>
                <h3>Current Path: {location.pathname}</h3>
                {location.state && (
                    <p>Message from Navigation: {location.state.message}</p>
                )}
                <h3>Location Details:</h3>
                <ul>
                    <li>Search: {location.search}</li>
                    <li>Hash: {location.hash}</li>
                </ul>
            </div>
        </div>
    );
}

export default LocationComponent;
