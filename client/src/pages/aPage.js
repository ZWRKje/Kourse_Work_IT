import React from "react";
import logo  from "../img/hello.jpg"
export const AboutCreator = () => {
  return (
    <div class="col ">
      <h2 class="header">Автор сайта </h2>
      <div class="card horizontal">
        <div class="card-image">
           <img  src={logo}></img> 
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>Сайт сделан Гусевым Андреем Геннадьвичем</p>
            <p>Это пробный проект</p>
          </div>
          <div class="card-action">
            <a href="https://vk.com/id232875076" target="block">
              Ссылка на мою страничку
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
