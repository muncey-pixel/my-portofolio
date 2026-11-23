import { useState, useEffect } from "react"

function MyNavbar() {

    const menus = [
        {id : 1, name : "Home", link : "#home"},
        {id : 2, name : "Tools", link : "#tools"},
        {id : 3, name : "Contact", link : "#contact"},
    ]

    return (
        <nav className="navbar">
            <h1>PORTOFOLIO</h1>

            <ul className="nav-menu">
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <a href={menu.link}>
                            {menu.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MyNavbar;