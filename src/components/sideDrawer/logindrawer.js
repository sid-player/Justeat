import React, { useState } from "react";
import "./drawer.css";
import { Icon } from "@material-ui/core";
import IconAnimation from "../iconAnimation/iconAnimation";

const LoginDrawer = ({ showDrawer, closeDrawer }) => {
  let side_drawer_state = "side_drawer";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  if (showDrawer) side_drawer_state = "side_drawer open";

  return (
    <div className={side_drawer_state}>
      <IconAnimation className="icon_animation_bg" />
      <div className="row" onClick={() => closeDrawer()}>
        <Icon className="fa fa-times offset-1 mt-3 set_hover" />
      </div>
      <h4 className="heading offset-1 mt-3">Login</h4>
      <div className="form_group">
        <div className="form">
          <input
            type="text"
            name="Name"
            required
            autoCapitalize={false}
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="Name" className="label">
            <span className="content">Name</span>
          </label>
        </div>
        <div className="form">
          <input
            type="tel"
            name="Phone"
            required
            autoCapitalize={false}
            maxLength="10"
            minLength="10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="Phone" className="label">
            <span className="content">Phone</span>
          </label>
        </div>
        <button className="button">Login</button>
      </div>
    </div>
  );
};

export default LoginDrawer;
