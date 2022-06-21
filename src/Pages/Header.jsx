import React from 'react'
import CallIcon from '@material-ui/icons/Call';

function Header() {
  return (
    <div className="flex justify-between bg-slate-800">

        <div className="left p-4  font-bold text-red-800 ">
        OUR YOUTUBE CHANNEL <span className="text-white" > CLICK HERE</span>
        </div>
        <div className="right p-4 font-bold text-white px-10 "><CallIcon className="text-red-800 justify-center flex  align-center " />9691316857</div>
    </div>
  )
}

export default Header