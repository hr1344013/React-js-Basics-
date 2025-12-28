import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGretting from './UserGretting.jsx'
import List from './List.jsx'
import Buton from './Buton.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MypersonalComponent from './MypersonalComponent.jsx'

function App() {

    /*const fruits = [{id: 1, name: "apple", calories:95},
        {id:2, name:"orange",calories: 45},
        {id:3, name:"banana",calories:105},
        {id:4, name:"coconut",calories:159},
        {id:5, name:"pinapple",calories:37}];

     const vegetables = [{id: 1, name: "potatoes", calories:110},
        {id:2, name:"celery",calories: 15},
        {id:3, name:"carrots",calories:25},
        {id:4, name:"corn",calories:63},
        {id:5, name:"brocoli",calories:50}];   */ 


  return(
    <>
      {/*fruits.length > 0 && <List items={fruits} category="Fruits"/>*/}
      {/*fruits.length > 0 && <List items={vegetables} category="Vegetables"/>*/}
      <MypersonalComponent/>
    </>
  );
}

export default App
