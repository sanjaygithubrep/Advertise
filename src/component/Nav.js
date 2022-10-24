import React from 'react'
 import { Link} from 'react-router-dom';

const Nav = () => {
  
  return (
    <div className="container-fluid abd">
        <div className="row">
            <div className="col-sm-3 abc">
            <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
          <h1>Item 1</h1>
          <h1>Item 2</h1>
            </div>
            <div className="col-sm-4 abd">
                <div className="box">
                <img src="images/dairy milk.jpg" />

                <h6>Title:Dairy Milk</h6>
                <h6>Price:30Rs</h6>
               
               <li><Link to="/Home">Next Page</Link></li>
              
                </div>
                <div className="box">
                <img src="images/dairy milk.jpg" />

                <h6>Title:Dairy Milk</h6>
                <h6>Price:30Rs</h6>
               
               <li><Link to="/Home">Next Page</Link></li>
              
                </div>
                
                
               
               
                <div className="cbox">
                <img src="images/dairy milk.jpg" />
                <h6>Title:Diary Milk</h6>
                <h6>Price:30Rs</h6>
                </div>
                
                <div className="cbox">
                <img src="images/dairy milk.jpg" />
                <h6>Title:Diary Milk</h6>
                <h6>Price:30Rs</h6>
                </div>
                <div className="cbox">
                <img src="images/dairy milk.jpg" />
                <h6>Title:Diary Milk</h6>
                <h6>Price:30Rs</h6>
                </div>
                <div className="cbox">
                <img src="images/dairy milk.jpg" />
                <h6>Title:Diary Milk</h6>
                <h6>Price:30Rs</h6>
                </div>
            
        </div>
        <div className="col-sm-4 abd">
                <div className="box">
                <img src="images/gems.jpg" />
                <h6>Title:Gems</h6>
                <h6>Price:20Rs</h6>
               
               <li><Link to="/Home">Next Page</Link></li>

                </div>
                <div className="box">
                <img src="images/gems.jpg" />
                <h6>Title:Gems</h6>
                <h6>Price:20Rs</h6>
                <li><Link to="/Home">Next Page</Link></li>
                </div>
                <div className="box">
                <img src="images/gems.jpg" />
                <h6>Title:Gems</h6>
                <h6>Price:20Rs</h6>
                </div>
               
                <div className="cbox">
                <img src="images/fivestar.png" />
                <h6>Title:Five Star</h6>
                <h6>Price:30Rs</h6>
                </div>
                
                <div className="cbox">
                <img src="images/fivestar.png" />
                <h6>Title:Five Star</h6>
                <h6>Price:30Rs</h6>
                </div>
                <div className="cbox">
                <img src="images/fivestar.png" />
                <h6>Title:Five Star</h6>
                <h6>Price:30Rs</h6>
                </div>
            
        </div>

    </div>
    </div>
  )
}

export default Nav