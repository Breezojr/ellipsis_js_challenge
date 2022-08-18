import './Header.css';

function Header() {
    return (
   <div>
         <div className="Header">
            <h1>DEMO Streaming</h1>
            <div className="container-left">
                <span className="Login">Log in</span>
                <span className="Trial">Start your free trial</span>
            </div>


        </div>
        <div className='SubHeader'>
          <h1>
            Popular Titles
          </h1>
        </div>
   </div>
    )
}

export default Header