const authProvider = {
    login: ({ username, password }) => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('username', username);
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    },
    logout: () => {
      localStorage.removeItem('username');
      return Promise.resolve();
    },
    checkError: ({ status }) => {
      if (status === 401 || status === 403){
        localStorage.removeItem('username');
        return Promise.reject();
      }
      return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(),
  };
  
  export default authProvider;
  