import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
    /*
    const NavLinkData = [
        {id: 1, path: '/profile', title: 'Profile'},
        {id: 2, path: '/dialogs', title: 'Messages'},
        {id: 3, path: '/news', title: 'News'},
        {id: 4, path: '/music', title: 'Music'},
        {id: 5, path: '/settings', title: 'Settings'},
    ]
    */

    return (
        <nav className={s.nav}>
            {props.NavLinkData.map(n => {
                return (
                    <div key={n.id} className={s.item}>
                        <NavLink to={n.path}
                                 className={navData => navData.isActive ? s.active : s.item}>
                            {n.title}
                        </NavLink>
                    </div>
                )
            })}
        </nav>
    );
}

export default Navbar;

{/*<div className={s.item}>
                <NavLink to="/profile" className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>*/
}

/*
let s = {
        'nav': 'Navbar_nav_...',
        'item': 'Navbar_item_...'
        }

        let c1 = "item";
        let c2 = "active";
             "item active"  - 2 класса css у одного элемента
        let classes = c1 + " " + c2;
        let classesNew = `${c1} ${c2}`;

        `${s.item} ${s.active}` - конкатенация строк
*/