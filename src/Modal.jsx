import { useNavigate } from 'react-router-dom';

export function Modal() {
    const navigate = useNavigate();
    return (
        <div
            className="modal-wrapper"
            onClick={() => navigate('/')}
        >
            <div
                className="modal"
                onClick={e => e.stopPropagation()}
            >
                <p>a
                    details
                </p>
            </div>
        </div>
    );
}