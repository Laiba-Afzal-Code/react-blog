import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Setting() {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const hendleprofileUpdate = async (e) => {
    e.preventDefault();
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.img = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    await axios.put("/user/" + user._id, updateUser);
    setSuccess(true);
  };
  return (
    <>
      <div className="setting">
        <div className="settingWarpper">
          <div className="settingTittle">
            <span className="settingUpdateAccount">Update your Account</span>
            <span className="settingDeleteTittle">Delete Account</span>
          </div>
          <form className="settingForm" onSubmit={hendleprofileUpdate}>
            <label>Profile Picture</label>
            <div className="settingPP">
              <img
                src={file ? URL.createObjectURL(file) : user.profilePicture}
                alt="Profile"
                className="settingImg"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="fileInput">
                <i className="fa-regular fa-circle-user settingPPIcon"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label> Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label> Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="UpdateBtn">
              Update
            </button>
            {success && (
              <span className="text-success fw-bold text-center mt-3">
                Profile has been Updated
              </span>
            )}
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
