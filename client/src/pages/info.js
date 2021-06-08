import React, { useState, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Bt } from '../components/comp'
import { Link } from 'react-router-dom'
import { Loader } from '../components/loader'

export const Info = () => {
  const { loading } = useHttp();
  const [states, setStates] = useState([])
  const { request } = useHttp()

  const pressHandler = async (event) => {
    try {
      const unicName = event.target.name

      const data = await request("/api/info/del", 'DELETE', { unicName });
      console.log("Data", data);
      const fetched = await request('/api/info/show', 'GET', null)
      console.log(fetched)
      setStates(fetched)
    } catch (e) { }
  };

  const fetchStates = useCallback(async () => {
    try {
      console.log("fetch")
      const fetched = await request('/api/info/show', 'GET', null)

      setStates(fetched)
    } catch (e) { }
  }, [request])
  useEffect(() => {
    fetchStates()
  }, [fetchStates])

  if (loading) {
    return (<Loader />)
  } else if (!states.length) {
    return (
      <div>
    <Bt />
    <p className="center">Заметок пока нет</p>
    </div>);
  } else {


    return (

      <div>
        <Bt />
        <table class="striped">
          <thead>
            <tr>
              <th class="center">№</th>
              <th class="center">Имя</th>
              <th class="center">Сотсав чая</th>
              <th class="center">Вид чая</th>
              <th class="center">Заметка</th>
              
            </tr>
          </thead>

          <tbody>
            {
              states.map((state, index) => {
                return (
                  <tr>
                    <td class="center">{index + 1}</td>
                    <td class="center">{state.stateName}</td>
                    <td class="center">{state.teaStruct}</td>
                    <td class="center">{state.teaType}</td>
                    <td>{state.stateText}</td>
                    <td>
                      <button
                        className="btn  deep-orange darken-3 "
                        name={state.stateName}
                        onClick={pressHandler}
                      >
                        Удалить
                  </button>
                    </td>
                    <td>

                      <Link to={{
                        pathname: '/change',
                        propState: {
                          name: state.stateName,
                          stateTxt: state.stateText,
                          teaT: state.teaType
                        }
                      }}>
                        <button class="waves-effect waves-light btn light-blue darken-1" > Изменение заметки </button >
                      </Link>
                    </td>
                  </tr>)
              })}
          </tbody>
        </table>
      </div>
    );
  };
}
