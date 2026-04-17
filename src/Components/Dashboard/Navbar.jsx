import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate(); // Hook for navigation

    const handleSignOut = () => {
        // Navigate to the root page
        navigate('/');
    };
    const handleAnalysis = () => {
        navigate('/tablepage');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f4f4f4' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className='bx bx-menu' style={{ fontSize: '24px', marginRight: '10px' }}></i>
                <h4 style={{ margin: 0 }}>Menu</h4>
            </div>
            <form action="#" style={{ flex: 1, marginLeft: '20px' }}>
                <div className="form-input"></div>
            </form>
            <button
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleAnalysis}
            >
                Analysis
            </button>
            <button
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleSignOut}
            >
                Sign Out
            </button>
        </nav>
    );
}

export default Navbar;
