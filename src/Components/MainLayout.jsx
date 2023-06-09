import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="layout">
            <Outlet />
            <aside>
                ASIDE
            </aside>
        </div>
    );
};

export default MainLayout;