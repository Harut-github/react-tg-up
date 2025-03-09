
import { Link, useLocation  } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation(); 

  return (
    <aside className="sidebar">

      {location.pathname === "/" ? (
        <>
          <div className="sidebar__pagination">
            <div className="sidebar__pagination-box">
              <div className="sidebar__lines">
                <div className="sidebar__lines-active"></div><div></div><div></div>
              </div>
              <h3>Оформление заказа</h3>
              <h2>Выберите платформу</h2>
            </div>
          </div>

          <div className="sidebar__cheating">
            <div className="sidebar__cheating-box">
              <h2>Виды накрутки</h2>
              <p>Выберите площадку что бы определить вид накрутки</p>
            </div>
          </div>
        </>
      ) : location.pathname === "/platform" ? (
        <>
        <div className="sidebar__pagination">
          <div className="sidebar__pagination-box">
            <div className="sidebar__lines">
              <div className="sidebar__lines-active"></div><div className="sidebar__lines-active"></div><div></div>
            </div>
            <h3>Оформление заказа</h3>
            <h2>Выберите вид накрутки</h2>
          </div>
        </div>

        <div className="sidebar__cheating">
          <div className="sidebar__cheating-box">
            <h2>Виды накрутки VK</h2>
            <ul>
              <li><Link className="sidebar__tag" to="/payment">Подписчики в группу</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Друзья</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Лайки</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Прослушивания</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Просмотры видео</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Комментарии</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Ответы на комментарии</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Репосты</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Опросы</Link></li>
              <li><Link className="sidebar__tag" to="/payment">Жалобы</Link></li>
            </ul> 
          </div>       
        </div>
        </>
      ) : (
        <>
          <div className="sidebar__pagination">
            <div className="sidebar__pagination-box">
              <div className="sidebar__lines">
                <div className="sidebar__lines-active"></div><div className="sidebar__lines-active"></div><div className="sidebar__lines-active"></div>
              </div>
              <h3>Оформление заказа</h3>
              <h2>Выберите платформу</h2>
            </div>
          </div>
        
          <div className="sidebar__cheating">
            <div className="sidebar__cheating-box">
              <h2>Виды накрутки VK</h2>
              <ul>
                <li><Link className="sidebar__tag" to="/payment">Подписчики в группу</Link></li>
                <li><Link className="sidebar__tag sidebar__tag-active" to="/payment">Друзья</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Лайки</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Прослушивания</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Просмотры видео</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Комментарии</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Ответы на комментарии</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Репосты</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Опросы</Link></li>
                <li><Link className="sidebar__tag" to="/payment">Жалобы</Link></li>
              </ul> 
            </div>       
          </div>
        </>
      )}
    </aside>
  );
}
