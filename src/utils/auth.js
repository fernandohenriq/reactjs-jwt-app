const isLogged = () => !!localStorage.getItem('app-token');
const login = token => localStorage.setItem('app-token', token);
const logout = () => localStorage.removeItem('app-token');
const getToken = () => localStorage.getItem('app-token');

export { isLogged, login, logout, getToken };
