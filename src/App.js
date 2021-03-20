import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from "./users/users";
import { PostList, PostEdit, PostCreate } from "./posts/posts";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    </Admin>
);

export default App;
