import { ReactComponent as GithubIcon } from 'assets/img/git.svg';
import './styles.css'
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-cotent">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Rodrigo-Menezes">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Rodrigo-Menezes</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}
export default Navbar;