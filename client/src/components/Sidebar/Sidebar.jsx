import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../../app/reducers/ProductMenu';
import { productApi } from '../../app/service/ProductService';
import './Sidebar.scss';

const Sidebar = () => {
  const activeMenu = useSelector(state => state.menu.activeMenu);
  const dispatch = useDispatch();

  const {data: shops, isLoading, error} = productApi.useGetShopsQuery();

  return (
    <div className="app__sidebar">
      <div className="app__sidebar-menu">
        <h2>Shops:</h2>
        {isLoading && <div>Loading...</div>}

        {shops && <ul>
          {shops.map(shop => (
            <li
              key={shop.name}
              className={`app__sidebar-menu-link ${activeMenu === shop.name ? "active" : ""}`}
              onClick={() => dispatch(setActiveMenu(shop.name))}
            >
              <span>
                {shop.name}
              </span>
            </li>
          ))}
        </ul>}

        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Sidebar