import React from 'react';
import Gallery from './components/gallery/Gallery'
import Grid from './components/grid/Grid'
import Clock from './components/clock/Clock'
import SlidingMenuContainer from  './components/slidingmenu/SlidingMenuContainer'
import Navbar from './components/navbar/Navbar';
import NavbarItem from './components/navbar/NavItem';
import SlidingMenuButton from './components/slidingmenu/SlidingMenuButton';




function App() {

  const images = [
    { src: "https://public-media.si-cdn.com/filer/21/d5/21d52f51-bb0a-457f-8669-4afd346e85a8/brjx5m.jpg", caption: "Żyrafy tańcujące na sawannie" },
    { src: "https://images.wallpaperscraft.com/image/cat_view_brown_151880_800x600.jpg", caption: "" },
    { src: "https://www.euractiv.pl/wp-content/uploads/sites/6/2020/07/aj-robbie-BuQ1RZckYW4-unsplash-800x600.jpg", caption: "" },
    { src: "https://download.komputerswiat.pl/media/2019/199/9142762/zoo-tycoon-ultimate-animal-collection-symulator-strategia-s.jpg", caption: "" },
    { src: "https://eurofoto.com.pl/wp-content/uploads/2020/07/fotografia-kon.jpg", caption: "" }
  ]

  const data = [
    { name: "Adam", surname: "Kot", age: 20 },
    { name: "Karol", surname: "Pies", age: 22 },
    { name: "Andrzej", surname: "Sowa", age: 23 },
    { name: "Kamil", surname: "Ucho", age: 30 },
    { name: "Piotr", surname: "Łącki", age: 30 }
  ]

  return (
    <div>
      <h1>Galeria</h1>
      <p>Źródło: praca własna</p>
      <Gallery images={images} />
      <hr />
      <h1>Grid</h1>
      <p>Źródło: praca własna</p>
      <Grid data={data}/>
      <hr />
      <h1>Zegar</h1>
      <p>Źródło: praca własna</p>
      <Clock />
      <hr />
      <h1>Wysuwane menu</h1>
      <p>Źródło: "React i Redux"</p>
      <SlidingMenuContainer>
        <ul>
          <li><a href="" style={{color:"white"}}>Opcja 1</a></li>
          <li><a href="" style={{color:"white"}}>Opcja 2</a></li>
          <li><a href="" style={{color:"white"}}>Opcja 3</a></li>
          <li><a href="" style={{color:"white"}}>Opcja 4</a></li>
        </ul>
      </SlidingMenuContainer>
      <hr />
      <h1>Navbar</h1>
      <p>Źródło: https://www.youtube.com/watch?v=IF6k0uZuypA</p>
      <Navbar>
        <NavbarItem icon=""></NavbarItem>
      </Navbar>
    </div>
  );
}

export default App