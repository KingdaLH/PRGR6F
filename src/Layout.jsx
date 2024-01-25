import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import './transitions.css';
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
    const location = useLocation();
    console.log("Layout Component Rendering:", location.pathname);
    
    return (
        <div>
            <Navbar />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                    <Routes location={location}>
                        <Route path="/*" element={children} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default Layout;