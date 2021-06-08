import React, {  useState } from "react";
import { useHttp } from "../hooks/http.hook";


export const Change = (props) => {
    const  {  request } = useHttp(); 
    console.log('props:', props.location.propState)
  const {
    name,
    stateTxt,
    teaT,
    teaSt
  } = props.location.propState

  const [form,setForm] = useState(
      {
          stateName:name,
          stateText:stateTxt,
          teaType:teaT,
          teaStruct:teaSt
      }
  )

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const changeNew = async () => {
    try {
      console.log ("Client send:",{...form} )
      const data = await request("/api/info//modyfi", 'PUT', {...form });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="card brown lighten-1">
          <div class="card-content white-text">
            <span class="card-title">Изменение заметки</span>
          </div>

          <div class="card-content ">
            <label>
              <h6>Вид чая</h6>
            </label>
            <select class="  browser-default"
            disabled
            name = "teaType"
            type = "text" 
            defaultValue ={teaT}
            >
              <option value="">
            
                Вид чая
              </option>
              <option value="Чёрный"  name="stateVidBlack">
                Чёрный
              </option>
              <option value="Зелёный"  name="stateVidGreen">
                Зелёный
              </option>
            </select>
          </div>

          <div class="card-content ">
            <label>
              <h6>Cостав чая</h6>
            </label>
            <select class="  browser-default"
            disabled
            name = "teaSt"
            type = "text" 
            defaultValue ={teaSt}
            >
              <option value="">
            
               Состав
              </option>
              <option value="Кофеин" name="stateVidBlack">
                Кофеин
              </option>
              <option value="Теобромин" name="stateVidGreen">
               Теобромин 
              </option>
            </select>
          </div>

          <div class="card-content">
            <label>
              <h6>Название статьи</h6>
            </label>
            <input
              disabled
              placeholder="Введите название статьи"
              id="stateName"
              type="text"
              name="stateName"
              defaultValue ={name}
            />
          </div>

          <div class="card-content row">
            <form class="col s12">
              <label>
                <h6>Текст статьи</h6>
              </label>
              <div class=" input-field">
                <textarea
                  placeholder="Введите текст статьи"
                  id="stateText"
                  type="text"
                  class="materialize-textarea"
                  name="stateText"
                  defaultValue ={stateTxt}
                  onChange={changeHandler}
                ></textarea>
              </div>
            </form>
          </div>

          <div class="card-action">
            <button
              className="btn   light-green accent-4"
              onClick={changeNew}
            >
           
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
