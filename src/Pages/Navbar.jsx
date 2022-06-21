import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-slate-200  ">
        <div className="navnar_logo flex justify-between">
          <div className="flex  ">
          <img className=" ml-8 " src="https://www.akscivilacademy.com/wp-content/uploads/2022/03/001gfhjhj-1.jpg" width="80px" height="80px" alt="Error" />
            <h3 className="  font-bold text-red-600 px-4 py-4 text-2xl ">
                <a href="https://akscivilacademy.com/wp-content">AKS CIVIL ACADEMY</a>
                

            </h3>
          </div>
          <ul className=" flex space-x-6 p-6 text-xl  ">
            <li>Home</li>
            <li>Course</li>
            <li>About Us</li>
            <li> Contact Us</li>
           <li><button className="btn  bg-red-600 ml-2 w-44 text-white rounded-md">Call Me</button></li>
         
        </ul>
        </div>
      
      
    
   
    </div>
  )
}

export default Navbar