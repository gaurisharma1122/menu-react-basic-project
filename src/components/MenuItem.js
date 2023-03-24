const MenuItem = ({ title, price, img, desc }) => {
    console.log(title)
    return (
        <article className="menu-item">
            <div className="menu-img">
                <img src={img} alt={title} />
            </div>
            <div className="menu-info">
                <div className="heading">
                    <h3>{title}</h3>
                    <h5>{price}</h5>
                </div>
                <p>{desc}</p>
            </div>
        </article>
    );
};
export default MenuItem;