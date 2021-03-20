import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users/users";
import { PostList } from "./posts/posts";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;
