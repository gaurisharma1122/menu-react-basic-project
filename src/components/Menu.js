import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
    console.log("menuItems", menuItems);

    return (
        <section className="menu-container">
            {
                menuItems.map((item) => {
                    return (
                        <MenuItem key={item.id}
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            desc={item.desc} />
                    )
                })
            }

        </section>
    );
};
export default Menu;