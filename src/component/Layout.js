import { Link, Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
        <>
            <header>
                <Link to='/'>Users</Link>
                <Link to='/groups'>Groups</Link>
            </header>

            <Outlet />

            <footer className="container">Users Managment 2022</footer>
        </>
        
    )
}


