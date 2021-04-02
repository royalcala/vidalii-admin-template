import React from "react";
import { Route } from "components/core/routes/Routes.many.rcontext";
import AccountIcon from 'template-icons/AccountCircle';
import { Tab } from "../admin/Admin.Doc.Tabs";
import { Doc } from "../admin/Admin.Doc_";
const route: Route = {
    name: 'Users',
    parent: 'System',
    sidebar: true,
    Icon: AccountIcon,
    Component: Users
}
export default route

const getTabs = require.context(
    'components',
    true,
    /users\.route\.tab\..+\.(tsx|js)$/
)

const Tabs = getTabs.keys().map(dir => {
    return getTabs(dir).default as Tab
})

function Users() {    
    return <Doc
        breadcrum={route}
        tabs={Tabs}
    />
}



