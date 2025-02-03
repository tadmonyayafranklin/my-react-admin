    const authProvider = {
        login: ({ username }) => {
            localStorage.setItem('username', username);
            return Promise.resolve();
        },
        logout: () => {
            localStorage.removeItem('username');
            return Promise.resolve();
        },
        checkAuth: () => {
            return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
        },
        checkError: (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('username');
                return Promise.reject();
            }
            return Promise.resolve();
        },
        getPermissions: () => Promise.resolve(),
    };

    export default authProvider;
    
