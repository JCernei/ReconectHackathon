import axios from 'axios'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { garr, getCurrentUser, setCurrentUser } from '../utils';
import styles from '../styles/Calendar.module.css'

// moment(days[index1]).add(index * 15, 'minutes').format('DD HH:mm')


export default function Calendar() {
  const [cells, setCells] = useState([]);
  const [date, setDate] = useState('2022-06-18');
  const [days, setDays] = useState({});
  const [titles, setTitles] = useState({});

  useEffect(() => {
    setCurrentUser({ username: 'alpha', password: '1111' })
    let ds = {}
    garr(7).map((el, index) => ds[index] = moment(date).add(index, 'days').format());
    setDays(ds);

    (async () => {
      const user = getCurrentUser();
      const date = moment().format();
      const res = await axios.post(`/calendar.php`, { user, date });

      if (res.status == 200) {
        const envts = {};
        const ttles = {};

        res.data.map(event => {
          let startMinute = moment(event.start).minute();

          if (![0, 15, 30, 45].includes(startMinute)) {
            if (startMinute < 15) startMinute = 0
            else if (startMinute < 30) startMinute = 15
            else if (startMinute < 45) startMinute = 30
            else startMinute = 45
          }

          let dt = moment(event.start).minute(startMinute).format();
          let dtEnd = moment(event.end).format();
          let limit = 4
          ttles[dt] = event.title
          
          do {
            envts[dt] = event;
            dt = moment(dt).add(15, 'minutes').format();

          } while (dt < dtEnd);
        })

        setCells(envts)
        setTitles(ttles)
      }
    })()
  }, [])

  return(
    <div>
      <table>
        <thead>
          <tr>
            {[1, 2, 3, 4, 5, 6, 7].map(day => <th>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {Array.apply(null, Array(96)).map((v, index) => (
            <tr key={index}>
              {Array.apply(null, Array(7)).map((x, index1) => {
                let time = moment(days[index1]).add(index * 15, 'minutes').format();

                return (
                  <td
                    className={cells[time] ? ( cells[time].tip == 0 ? styles.marked0 : ( cells[time].tip == 1 ? styles.marked1 : styles.marked2 ) ) : ''}
                    key={index1}
                  >
                    {titles[time] ? (
                      <div className={styles.titleContainer}>
                        <div className={styles.title}>
                          {titles[time]}
                        </div>
                      </div>
                    ) : ''}
                    {/* {moment(days[index1]).add(index * 15, 'minutes').format('DD HH:mm')} */}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
