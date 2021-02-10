import React from "react";
import AccountManagementPage from "./AccountManagementPage";
import CopyUserPage from "./CopyUserPage";
import CreateUserPage from "./CreateUserPage";
import DeleteUserPage from "./DeleteUserPage";
import EditUserPage from "./EditUserPage";
import Tab from "./Pages";
import IUserResponsePayload from '../../api/IUserResponsePayload';


interface ContentProps {
    activeTab: Tab;
    users: IUserResponsePayload[];
}

function Content(props:ContentProps) {
    return (
        <>
            {(() => {
                switch (props.activeTab) {
                    case Tab.Accountmanagment:
                        return (
                            <>
                                <AccountManagementPage users={props.users}/>
                            </>
                        );
                    case Tab.Edit:
                        return (
                            <EditUserPage users={props.users}/>
                        );
                        case Tab.Delete:
                            return (
                                <DeleteUserPage  users={props.users}/>
                            );
                            case Tab.Create:
                                return (
                                    <CreateUserPage  users={props.users}/>
                                );
                                case Tab.Copy:
                                    return (
                                        <CopyUserPage  users={props.users}/>
                                    );
                    
                    default: throw new Error('unsupported active tab.');
                }
            })()}
        </>
    );
}


export default Content;