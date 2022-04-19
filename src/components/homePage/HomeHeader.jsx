import logo from '../imgs/ofs.png';

export const HomeHeader = () =>{
    return (
        <nav className = "navbar navbar-expand-sm headerDiv">
        <ul className = "navbar-nav headerDiv ">
            <li className = "nav-item">
               <img src = {logo} className="logo"/>
            </li>
            <li className = "nav-item fun-friday-mrgn">
                Fun Friday
            </li>
        </ul>
    </nav>
    )
}