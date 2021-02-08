import React from "react";
import IUserResponsePayload from "../../api/IUserResponsePayload";

interface LogonscriptProps {
  User: IUserResponsePayload | undefined;
}

function Logonscript(props: LogonscriptProps) {
  return (
    <div className="card">
      <div className="card-header">Logonscript</div>
      <div className="card-body">
        <p className="card-text">
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" defaultValue= {"Logonscript for " + props.User?.email}>
             
            </textarea>
          </div>
        </p>
        <a href="#" className="btn btn-primary">
          Save
        </a>
      </div>
    </div>
  );
}

export default Logonscript;
