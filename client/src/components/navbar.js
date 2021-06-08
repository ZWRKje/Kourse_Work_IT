import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper center teal accent-4" style={{ padding: "0 2rem" }}>
        <a href="/CostomTeaManager" class="brand-logo center ">
          Заметки о чае
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <NavLink to="/Info">Заметки</NavLink>
          </li>
          <li>
            <NavLink to="/CostomTeaManager">Добавление заметок</NavLink>
          </li>
          <li>
            <NavLink to="/SortPage">Поиск заметок о чае</NavLink>
          </li>
          <li>
            <NavLink to="/AboutCreator">Обо мне, создателе</NavLink>
          </li>

          <p class="center">t</p>
        </ul>
      </div>
    </nav>
  );
};
