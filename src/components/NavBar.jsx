import { NavLink } from "react-router-dom"


function NavBar() {

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home Page</NavLink></li>
                    <li><NavLink to='/random'>What do We eat?</NavLink></li>
                    <li><NavLink to='/complete'>Food List</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar