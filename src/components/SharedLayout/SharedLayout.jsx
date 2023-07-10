import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css';


const SharedLayout = () => {
    return ( <>
      <div className={css.container}>
      <nav className={css.navigation}>
      <NavLink className={css.navigationLink} to="/" end>Home</NavLink>
      <NavLink className={css.navigationLink} to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      
     </div>
     </>
    )
}

export default SharedLayout