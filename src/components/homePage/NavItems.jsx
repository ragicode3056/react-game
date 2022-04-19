import {Link} from 'react-router-dom';
export const NavItems = () =>{
    return (
        <nav className = "navbar navbar-expand-sm flex-end-nav headerDiv">
        <ul className = "navbar-nav">
            <li className = "nav-item nav-mrg-rt">
                <Link to='/'>  Home </Link>
            </li>
            <li className = "nav-item nav-mrg-rt">
                <Link to ='/r1'> R1 </Link>
            </li>
            <li className = "nav-item nav-mrg-rt">
                <Link to ='/r2'> R2 </Link>
            </li>
            <li className = "nav-item nav-mrg-rt">
                <Link to ='/r3'> R3 </Link>
            </li>
            <li className = "nav-item nav-mrg-rt">
                <Link to ='/r4'> R4 </Link>
            </li>
            <li className = "nav-item nav-mrg-rt">
                 <Link to ='/r5'> R5 </Link> 
            </li>
            <li className = "nav-item nav-mrg-rt">
                 <Link to ='/r6'> R6 </Link>
            </li>
        </ul>
    </nav>
    )
}