import logo from './Logo.svg';
import './App.css';
import logo2 from './Logo.png';
import mail from './Mail.png';
import call from './Call.png';
import meeting from './Place.png';
import inst from './instagram.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import burger from './Group 1.png';
import rectangle from './Rectangle.png';

function App() {
  return (
    <div>
<div className="navbar">
  <div className="nav-right">
  <img className="logo" src={logo}></img>
  <div className="btn">
  <a>Як це працює</a>
  <a>Про нас</a>
  <div class="dropdown">
        <button class="dropbtn">My Profile
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Patronus</a>
            <a href="#">Boggard</a>
            <a href="#">My Spells</a>
            <a href="#">Hause News</a>
        </div>
    </div>
    <a>Індустріальна експертиза</a>
    <a>Портфоліо</a>
    <a>Кар'єра</a>
    </div>
    </div>
    <div className="navright">
          <div className="lang">
    <select>
      <option> ENG</option>
      <option> UA</option>
      <option> Rus</option>
    </select>
    <button className="last-child">Сконтактувати</button>
    
    </div>
    <button className="menu-open">
<img src={burger}></img>
    </button>
</div>
 </div>
 <div></div>
 <div className="main">
<div className="rectangel"></div>
<div className="main-text">
Розробка адаптивних інтерфейсів під мобільну версію
</div>
<div className="main-text2">Мобільна версія — це спеціальна версія сайту, яка робить його більш зручним для використання на мобільних пристроях. Користувачі працюють з сайтами на мобільних пристроях зовсім інакше, ніж на десктопних ПК або ноутбуках.</div>
 <div className="img"></div>
 </div>

 
<div className="low">
  <div className="txt0">
  <div className="txt">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </div>
  <button className="low-btn">Зв’яжіться з нами</button>
  </div>
  <img className="img2" src={rectangle}></img>
 </div>
 <div className="footer">
<div className="footer-img"></div>
<div className="footer-rise">
  <div className="foter1">
  <img src={logo2}></img>
  <div className="right-footer">
  <div>
    <ul>
      <li>Як це працює</li>
      <li>Про нас</li>
      <li>Послуги</li>
      <li>Кар'єра</li>
    </ul>
  </div>
  <div>
    <ul>
  <li>Індустріальна експертиза</li>
      <li>Портфоліо</li>
      <li>Контакти</li>
      </ul>
  </div>
  </div>
</div>
<div className="footer2">
 <img src={meeting}></img> 
  <img src={call}></img>
  <img src={mail}></img>
  
</div>
  <div className="social">
<img src={inst}></img>
<img src={facebook}></img>
<img src={linkedin}></img>
<img src={twitter}></img>
  </div>
</div>
</div>

 </div>
 

 
  );

}

export default App;
