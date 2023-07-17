import { Outlet, NavLink } from 'react-router-dom';


export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Moovies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
