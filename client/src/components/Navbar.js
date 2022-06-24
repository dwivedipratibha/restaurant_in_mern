import React,{useState} from 'react'
import { Link } from "react-router-dom";
function Navbar(props) {
    const [page, setPage] = useState(props.page);
    const [username, setUsername] = useState(props.username);
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <h3 style={{color:"white", paddingTop:"5px"}}>Prabhusha</h3>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
    {(page=='home')?(<li class=" nav-item active"><Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
            </li>):(<li class="nav-item"><Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
            </li>)}   
            {(page=='menu')?(<li class=" nav-item active">  <Link class="nav-link" to="/menu">Menu</Link>
            </li>):(<li class="nav-item">  <Link class="nav-link" to="/menu">Menu</Link>
            </li>)} 

            {(page=='login')?(<li class=" nav-item active"><Link class="nav-link" to="/user/login">Login</Link>
                </li>):(<li class="nav-item"><Link class="nav-link" to="/user/login">Login</Link>
                </li>)} 
                
                        {(page=='helpme')?(<li class=" nav-item active"><Link class="nav-link " to="/helpme">Contact Us</Link>
                        </li>):(<li class="nav-item"><Link class="nav-link " to="/helpme">Contact Us</Link>
                        </li>)} 
                                    
        </ul>

    </div>
</nav>
        </>
    )
}

export default Navbar
