import { NavLink } from 'react-router-dom';

function MenuButton({ url, icon, text }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? 'btn btn-primary normal-case text-lg flex gap-2'
          : 'btn btn-ghost normal-case text-lg flex gap-2'
      }
    >
      {icon}
      {text}
    </NavLink>
  );
}
export default MenuButton;
