import "./Header.css"
export default function Header({ isLoggedIn }) {
    
    return( 
        <header>
            <nav className="header-nav">
                <div className="header-logo">Logo</div>
                    <a className="header-link">Posts</a>
                    <a className="header-link">Link 3</a>
                    <a className="header-link">Link 4</a>
                <div className="header-account">
                    {isLoggedIn && <button>Profile</button>}
                    {!isLoggedIn && 
                        <div>
                            <button>Sign up</button>
                            <button>Sign in</button>
                        </div>
                    }
                </div>
            </nav>
        </header>
)
}
