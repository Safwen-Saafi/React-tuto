import { useNavigate } from 'react-router-dom';

function NavigationComponent() {
    const navigate = useNavigate();

    const handleNavigation = (path, state) => {
        // Navigate to the specified path and pass some state data
        navigate(path, {
            state: { message: state }
        });
    };

    return (
        <div>
            <h2>Navigation Demo</h2>
            <button onClick={() => handleNavigation('/location', 'Hello from Navigation!')}>
                Go to Location Page
            </button>
            <button onClick={() => handleNavigation('/location', 'Different message')}>
                Go with Different Message
            </button>
            <button onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}

export default NavigationComponent;
