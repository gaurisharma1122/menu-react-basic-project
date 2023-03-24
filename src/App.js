import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import { menuData } from "./data";

const category= new Set(menuData.map((item)=> item.category));

function App() {
  
  const [menuItems, setMenuItem]= useState( menuData );
  const [categories, setCategories]= useState(category);

  const filterMenu=(category)=>{
    if(category=== 'all'){
      setMenuItem(menuData);
    }
    else{
      const newData= menuData.filter((item)=> item.category===category)
      setMenuItem(newData);
    }
  }
  return (
    <div className="menu">
      <div className="title">
        <h1>Our Menu</h1>
      </div>
      <Categories category={category} filterMenu={filterMenu}/>
      <Menu menuItems={menuItems} filterMenu={filterMenu}/>

    </div>
  );
}

export default App;
