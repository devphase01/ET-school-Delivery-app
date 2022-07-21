import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../../app/reducers/ProductMenu';
import { resetCart } from '../../app/reducers/Cart';
import { productApi } from '../../app/service/ProductService';
import './Sidebar.scss';

const Sidebar = () => {
  const { activeMenu } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  const {data: shops, isLoading, error} = productApi.useGetShopsQuery();

  const menuActivateHandler = (name) => {
    // if(activeMenu !== name) {
    //   dispatch(setActiveMenu(name));
    //   dispatch(resetCart());
    // }

    dispatch(setActiveMenu(name));
  }

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
              onClick={() => menuActivateHandler(shop.name)}
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