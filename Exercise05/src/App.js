import './App.css';
import  Menu  from './component/Menu';
import uuid from 'react-uuid';


const food = [{
    type: "อาหารคาว",
    name: "ข้าวผัด",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    img: "https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
},
{
    type: "อาหารหวาน",
    name: "บัวลอย",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    img: "http://lamphuonline.com/images/00-2022/bua-loi-kaiwan.jpg"
}]

function App() {
  return (
    <div className="App">
      <header className='head'>โหวตอาหาร</header>
      {food.map( data=>{
        return <Menu {...data} key={uuid()}/>
      } )}
    </div>
  );
}

export default App;
