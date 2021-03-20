import * as React from "react";
import { Admin, Resource } from 'react-admin';
import Dashboard from './dashboard/dashboard';
import { PostList, PostEdit, PostCreate } from "./posts/posts";
import { UserList } from "./users/users";
// import dataProvider  from "./services/dataProvider"
import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
