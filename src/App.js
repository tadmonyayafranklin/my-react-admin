   import React, { useState, useEffect } from 'react';
   import { Admin, Resource, ThemeProvider, Button } from 'react-admin';
   import jsonServerProvider from 'ra-data-json-server';
   import { UserList, UserEdit, UserCreate, UserShow } from './users';
   import { PostList, PostEdit, PostCreate, PostShow } from './posts';
   import theme from './theme'; 
   import darkTheme from './darkTheme'; 
   import PersonIcon from '@mui/icons-material/Person';
   import ArticleIcon from '@mui/icons-material/Article';
   import Dashboard from './Dashboard';
   import authProvider from './authProvider';

   const dataProvider = jsonServerProvider('http://localhost:5000');

   function App() {
        const [isDarkMode, setIsDarkMode] = useState(() => {
            return localStorage.getItem('theme') === 'dark';
        });

        useEffect(() => {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }, [isDarkMode]);

        return (
            <div className="App">
                <ThemeProvider>
                    < Admin
                        theme={isDarkMode ? darkTheme : theme}
                        dashboard={Dashboard} 
                        dataProvider={dataProvider} 
                        authProvider={authProvider}
                    >
                        <Resource
                            icon={PersonIcon}
                            name="users" 
                            list={UserList} 
                            edit={UserEdit} 
                            create={UserCreate} 
                            show={UserShow} 
                        />
                        <Resource 
                            icon={ArticleIcon}
                            name="posts" 
                            list={PostList} 
                            edit={PostEdit} 
                            create={PostCreate} 
                            show={PostShow} 
                        />
                    </Admin>
                    <Button
                        label="O/1"
                        onClick={() => {setIsDarkMode(!isDarkMode)}}
                    />
                </ThemeProvider>
            </div>
        );
   }

   export default App;
   

