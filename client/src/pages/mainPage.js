import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from '../hooks/message.hook'
import { Loader } from '../components/loader'

export const CostomTeaManager = () => {
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({
    stateName: '',
    stateText: '',
    teaType: 'Чёрный',
    teaStruct: ''
  });

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addHandler = async () => {
    try {
      console.log("Client send:", { ...form })
      const data = await request("/api/addState/new", 'POST', { ...form });

      console.log("Data", data);
    } catch (e) { }
  };
  if (loading) {
    return (<Loader />)
  }


  return (
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="card brown lighten-1">
          <div class="card-content white-text">
            <span class="card-title">Добавление статьи о чае </span>
          </div>

          <div class="card-content ">
            <label>
              <h6>Выберите вид чая</h6>
            </label>
            <select class="browser-default"
              name="teaType"
              type="text"
              onChange={changeHandler}
            >
              <option value="" disabled selected>
                Вид чая
              </option>
              <option value="Чёрный" name="stateVidBlack">
                Чёрный
              </option>
              <option value="Зелёный" name="stateVidGreen">
                Зелёный
              </option>
            </select>
          </div>


          <div class="card-content ">
            <label>
              <h6>Выберите состав</h6>
            </label>
            <select class="browser-default"
              name="teaStruct"
              type="text"
              onChange={changeHandler}
            >
              <option value="" disabled selected>
                Састав чая
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
              placeholder="Введите название статьи"
              id="stateName"
              type="text"
              name="stateName"
              onChange={changeHandler}
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
                  onChange={changeHandler}
                ></textarea>
              </div>
            </form>
          </div>

          <div class="card-action">
            <button
              className="btn   light-green accent-4"
              onClick={addHandler}
              disabled={loading}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
