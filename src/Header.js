import './Header.css';
import { Link } from "react-router-dom";


function Header(props) {
    return (
   <div>
         <div className="Header">
            <h1><Link to="/" className="link">DEMO Streaming</Link></h1>
            <div className="container-right">
                <a href='' className="Login">Log in</a>
                <a href="" className="Trial">Start your free trial</a>
            </div>


        </div>
        <div className='SubHeader'>
          <h1>
          {props.data}
          </h1>
        </div>
   </div>
    )
}

export default Header