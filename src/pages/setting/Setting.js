import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
export default function Setting() {
  return (
    <>
    <div className="setting">
        <div className="settingWarpper">
            <div className="settingTittle">
            <span className="settingUpdateAccount">Update your Account</span>
            <span className="settingDeleteTittle">Delete Account</span>
            </div>
            <form className='settingForm'>
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://wallpapers.com/images/hd/cool-black-themed-background-image-6fbtqhjfm6vzn1ym.jpg" alt="Profile" className="settingImg" />
                    <label htmlFor="fileInput"><i className="fa-regular fa-circle-user settingPPIcon"></i></label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                </div>
                <label> Username</label>
                <input type="text" placeholder='Albatross' />
                <label> Email</label>
                <input type="email" placeholder='albatross@gmail.com'/>
                <label>Password</label>
                <input type="password"/>
                <button type='submit' className='UpdateBtn'>Update</button>
            </form>

        </div>
        <Sidebar/>
    </div>
      
    </>
  )
}
