import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={style.navcontainer}>
            <div className={style.logo}>
                <img src="/logo.jpg" alt="logo" />
            </div>
            <div className={style.navlink}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Search 🔍</a></li>
                    <li><a href="#">Cart ⬛</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
