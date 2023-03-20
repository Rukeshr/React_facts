import logo from './logo.svg';

function Header(){
    return (
        <header>
            <nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
                <h1>React</h1>
                <ul className="nav-items">
                   <a href="https://react.dev" className="nav-items"><li>More Info</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header