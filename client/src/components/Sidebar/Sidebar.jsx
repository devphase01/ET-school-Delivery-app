import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../../app/reducers/ProductMenu';
import './Sidebar.scss';

const Sidebar = () => {
  const activeMenu = useSelector(state => state.ProductMenuReducer.activeMenu);
  const dispatch = useDispatch();

  const menuItems = ["McDonnald's", "CMD", "Crabbsburg", "LaCoffee"];

  return (
    <div className="app__sidebar">
      <div className="app__sidebar-menu">
        <h2>Shops:</h2>
        <ul>
          {menuItems.map(item => (
            <li
              key={item}
              className={`app__sidebar-menu-link ${activeMenu === item ? "active" : ""}`}
              onClick={() => dispatch(setActiveMenu(item))}
            >
              <span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar