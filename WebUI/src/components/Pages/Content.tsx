import React from "react";
import AccountManagementPage from "./AccountManagementPage";
import CopyUserPage from "./CopyUserPage";
import CreateUserPage from "./CreateUserPage";
import DeleteUserPage from "./DeleteUserPage";
import EditUserPage from "./EditUserPage";
import Tab from "./Pages";


interface ContentProps {
    activeTab: Tab;
}

function Content(props:ContentProps) {
    return (
        <>
            {(() => {
                switch (props.activeTab) {
                    case Tab.Accountmanagment:
                        return (
                            <>
                                <AccountManagementPage/>
                            </>
                        );
                    case Tab.Edit:
                        return (
                            <EditUserPage/>
                        );
                        case Tab.Delete:
                            return (
                                <DeleteUserPage/>
                            );
                            case Tab.Create:
                                return (
                                    <CreateUserPage/>
                                );
                                case Tab.Copy:
                                    return (
                                        <CopyUserPage/>
                                    );
                    
                    default: throw new Error('unsupported active tab.');
                }
            })()}
        </>
    );
}


export default Content;