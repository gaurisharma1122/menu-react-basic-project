const Categories=({category, filterMenu})=>{

    const data= ['all', ...Array.from(category)];

    return(
        <nav className="navbar">
            <ul>
            {
                data.map((item)=>{
                    return(
                        <li>
                            <button onClick={()=> filterMenu(item)}>
                                {item}
                            </button>
                        </li>
                    )
                })
            }
            </ul>
            
        </nav>
    );
};
export default Categories;