import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from '../hooks/message.hook';


export const SortPage = () => {
    
    const message = useMessage()
    const {  request, error, clearError } = useHttp(); 
    const [states, setStates] = useState([])

    
    const [form, setSort] = useState({
        sortField:'sortAlph'
    });
  
    useEffect(() => {
      message(error)
      clearError()
    }, [error, message, clearError])
  
    const changeHandler = (event) => {
        setSort({ ...form, [event.target.name]: event.target.value });
    };
   
    const sortHandler = async () => {
    try {
      console.log("Client send:", { ...form })
      const fetched = await request("/api/info/show", 'GET', null);
      console.log("Data", fetched);
      const tempArr =[]
      //console.log(form.sortField)
     // console.log(fetched.length)
        if(form.sortField == "Зелёный"){
            for(var i=0; i<fetched.length;i++){
                if(fetched[i].teaType == "Зелёный"){
                    tempArr.push(fetched[i])
                }
            }
           setStates(tempArr) 
        }
        if(form.sortField == "Чёрный"){
            for(var i=0; i<fetched.length;i++){
                if(fetched[i].teaType == "Чёрный"){
                    tempArr.push(fetched[i])
                }
            }
           setStates(tempArr) 
        }

        if(form.sortField == "Теобромин"){       
            for(var i=0; i<fetched.length;i++){
                console.log(fetched[i].teaStruct)
                if(fetched[i].teaStruct == "Теобромин"){
                    tempArr.push(fetched[i])
                }
            }
           setStates(tempArr) 
        }

        if(form.sortField == "Кофеин"){       
            for(var i=0; i<fetched.length;i++){
                console.log(fetched[i].teaStruct)
                if(fetched[i].teaStruct == "Кофеин"){
                    tempArr.push(fetched[i])
                }
            }
           setStates(tempArr) 
        }

        if(form.sortField == "sortAlph"){
           fetched.sort (function(a,b){
            if(a.stateName < b.stateName) { return -1; }
            if(a.stateName > b.stateName) { return 1; }
            return 0;
           })
           setStates(fetched) 
        }

    } catch (e) { }
  };
 
  if (!states.length) {
    return   (  <div class=" row">
    <div class=" col s6 ">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="center card-title">Сортирока заметок о чае  </span>
            </div>
        </div>
        <button
            style={{ position: 'relative', left: '50%', transform: 'translate(-50%, 0)' }}
            class="btn center blue darken-1"
            onClick={sortHandler}
        >
            Сортировать
         </button>
        <select class="browser-default"
            name="sortField"
            type="text"
            onChange={changeHandler}
        >
            <option value="" disabled selected>
                Сортировка заметок
            </option>
            <option value="Чёрный" >
                Все заметки о чёрном чае
             </option>
            <option value="Зелёный" >
                Все заметки о зелёном чае
            </option>
            <option value="Теобромин" >
                Все с Теобромином в составе
            </option>
            <option value="Кофеин" >
                Все с  Кофеинном в составе
            </option>
            <option value="sortAlph" >
                Все заметки в алфавитном порядке
            </option>
        </select>
    </div>
 </div>
 );
    }
    return (
        <div class=" row">
            <div class=" col s6 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="center card-title">Сортирока заметок о чае  </span>
                    </div>
                </div>
                <button
                    style={{ position: 'relative', left: '50%', transform: 'translate(-50%, 0)' }}
                    class="btn center blue darken-1"
                    onClick={sortHandler}
                >
                    Сортировать
                 </button>
                <select class="browser-default"
                    name="sortField"
                    type="text"
                    onChange={changeHandler}
                >
                    <option value="" disabled selected>
                        Сортировка заметок
                    </option>
                    <option value="Чёрный" >
                        Все заметки о чёрном чае
                     </option>
                    <option value="Зелёный" >
                        Все заметки о зелёном чае
                    </option>
                    <option value="Теобромин" >
                        Все с Теобромином в составе
                     </option>
                    <option value="Кофеин" >
                        Все с  Кофеинном в составе
                     </option>
                    <option value="sortAlph" >
                        Все заметки в алфавитном порядке
                    </option>
                </select>
            </div>
            <table class="striped">
          <thead>
            <tr>
              <th class>№</th>
              <th class>Имя</th>
              <th class>Состав чая</th>
              <th class>Вид чая</th>
              <th class>Заметка</th>
            </tr>
          </thead>

          <tbody>
            {
              states.map((state, index) => {
                return (
                  <tr>
                    <td >{index + 1}</td>
                    <td >{state.stateName}</td>
                    <td >{state.teaStruct}</td>
                    <td >{state.teaType}</td>
                    <td>{state.stateText}</td>
                  </tr>)
              })}
          </tbody>
        </table>
        </div>
    );
};
