import './App.css';
import briyani from './assets/images/briyani.jpg';
import burger from './assets/images/burger.jpg';
import caake from './assets/images/caake.jpg';
import chinese from './assets/images/chinese.jpg';
import coffee from './assets/images/coffee.jpg';
import dosa from './assets/images/dosa.jpg';
import litti from './assets/images/litti.jpg';
import north from './assets/images/north.jpg';
import pizza from './assets/images/pizza.jpeg';
import salad from './assets/images/salad.jpg';
import sea from './assets/images/sea.jpg';
import south from './assets/images/south.jpg';
import wraps from './assets/images/wraps.jpeg';

function App() {
  return (
    <div>
      {/* <!--sidebar--> */}
      <div className="sidebar">
        {/* <!--logo--> */}
        <h1 className="logo">FoodTime</h1>
        {/* <!--list of menu--> */}
        <div className="sidebar-menus">
          <a href="/"><ion-icon name="storefront-outline"></ion-icon>Home</a>
          <a href="/"><ion-icon name="receipt-outline"></ion-icon>Bills</a>
          <a href="/"><ion-icon name="wallet-outline"></ion-icon>Wallet</a>
          <a href="/"><ion-icon name="notifications-outline"></ion-icon>Notifications</a>
          <a href="/"><ion-icon name="storefront-outline"></ion-icon>Settings</a>
        </div>
        {/* <!--logout--> */}
        <div className="sidebar-logout">
          <a href="/"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
        </div>
      </div>
      {/* <!--main--> */}
      <div className="main">
        {/* <!--main-navbar--> */}
        <div className="main-navbar">
          {/* <!--menu appers on mobile--> */}
          {/* <ion-icon className="menu-toggle" name="menu-outline"></ion-icon> */}
          {/* <!--search-bar--> */}
          <div className="search">
            <input type="text" placeholder="What You Want to eat?" />
            <button className="search-btn">Search</button>
          </div>
          {/* <!--profilr icon on left--> */}
          <div className="profile">
            <a className="cart" href="/"><ion-icon name="cart-outline"></ion-icon></a>
            <a className="user" href="/"><ion-icon name="person-outline"></ion-icon></a>
          </div>
        </div>
        {/* <!--main highlights--> */}
        <div className="main-highlight">
          <div className="main-header">
            <h2 className="main-title">Recommendations</h2>
            <div className="min-arrow">
              <ion-icon className="back" name="chevron-back-circle-outline"></ion-icon>
              <ion-icon className="next" name="chevron-forward-circle-outline"></ion-icon>
            </div>
            <div>
              <div className="highlight-wrapper">
                {/* <div className="highlight-card">
                        <img alt="ERROR" className="highlight-img" src={salad}/>
                        <div clas="highlight-desc">
                            <h4>Fresh Salad</h4>
                            <p>₹250</p>
                        </div>
                    </div> */}
                <div className="highlight-card">
                  <img alt="ERROR" className="highlight-img" src={coffee}/>
                    <div clas="highlight-desc">
                      <h4>Coffee</h4>
                      <p>₹150</p>

                    </div>
                </div>
                <div className="highlight-card">
                  <img alt="ERROR" className="highlight-img" src={pizza}/>
                    <div clas="highlight-desc">
                      <h4>Pizza</h4>
                      <p>₹300</p>
                    </div>
                </div>
                <div className="highlight-card">
                  <img alt="ERROR" className="highlight-img" src={burger}/>
                    <div clas="highlight-desc">
                      <h4>Burger</h4>
                      <p>₹250</p>
                    </div>
                </div>
                <div className="highlight-card">
                  <img alt="ERROR" className="highlight-img" src={dosa}/>
                    <div clas="highlight-desc">
                      <h4>Dosa</h4>
                      <p>₹100</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menus">
          <div className="main-filter">
            <div>
              <h2 className="main-title">Menu <br/>Category</h2>
              <div className="main-arrow">
                <ion-icon className="back-menus" name="chevron-back-circle-outline"></ion-icon>
                <ion-icon className="next-menus" name="chevron-forward-circle-outline"></ion-icon>
              </div>
            </div>

            <div className="filter-wrapper">
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="restaurant-outline"></ion-icon>
                </div>
                <p>All Menus</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="fast-food-outline"></ion-icon>
                </div>
                <p>Burger</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="pizza-outline"></ion-icon>
                </div>
                <p>Pizza</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="wine-outline"></ion-icon>
                </div>
                <p>Wine</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="ice-cream-outline"></ion-icon>
                </div>
                <p>Ice Cream</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="cafe-outline"></ion-icon>
                </div>
                <p>Coffee</p>
              </div>
              <div className="filter-card">
                <div className="filter-icon">
                  <ion-icon name="nutrition-outline"></ion-icon>
                </div>
                <p>Vegetarion</p>
              </div>


            </div>
          </div>
          <hr className="divider"/>
            <div className="main-detial">
              <h2 className="main-title" Choose Order></h2>
              <div className="detail-wrapper">
                <div className="detail-card">

                  <img alt="ERROR" className="detail-img" src={south}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>South Indian</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹1200</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={briyani}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Briyani</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹500</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={north}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>North Indian</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹1000</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={litti}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Litti Chokha</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹250</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={caake}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Cakes</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹250</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={pizza}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Pizza</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹250</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={chinese}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Chinese</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹250</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="detail-card">
                  <img alt="ERROR" className="detail-img" src={wraps}/>
                    <div className="detail-desc">
                      <div className="detail-name">
                        <h4>Wraps</h4>
                        <p className="detail-sub">Lorem ipsum dolor s</p>
                        <p className="price">₹250</p>
                      </div>
                      <ion-icon className="detail-favorites" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
