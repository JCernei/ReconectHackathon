import axios from 'axios'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { garr, getCurrentUser, setCurrentUser } from '../utils';
import styles from '../styles/Calendar.module.css'
import Collapse from '../components/Collapse';
import EventBox from '../components/EventBox';
import Button from '../components/Button';

// moment(days[index1]).add(index * 15, 'minutes').format('DD HH:mm')

// moment.updateLocale('en', {
//   week : {
//       dow : 1,
//       doy : 4
//    }
// });

export default function Calendar() {
  const [cells, setCells] = useState([]);
  const [date, setDate] = useState();
  const [days, setDays] = useState({});
  const [titles, setTitles] = useState({});
  const [loading, setLoading] = useState(true);
  const [rightSideOpen, setRightSideOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [focusedInput, setFocusedInput] = useState('start');

  const sumbit = async () => {
    const user = getCurrentUser()
    await axios.post(`/newevent.php`, { user, event: formData })

    setRightSideOpen(false)
    setFormData({})
  }

  const magic = async () => {
    const user = getCurrentUser();
    const res = await axios.post(`/magic.php`, { user })

    if (res.status == 200) {
      console.log(`[x]`, res.data);
    } else {
      console.log(`[x]`, res.status)
    }
  }

  useEffect(() => {
    // choose first week day
    let d = 0;
    while (moment(date).subtract(d, 'days').format('d') != 1) {
      d++
    }
    // console.log(`[x]`, moment(date).subtract(d, 'days').format('YYYY-MM-DD'), d)
    
    let firstDateOfWeek = moment(date).subtract(d, 'days').format('YYYY-MM-DD')
    setDate(firstDateOfWeek)

    setCurrentUser({ username: 'alpha', password: '1111' })

    // generate days
    let ds = {}
    garr(7).map((el, index) => ds[index] = moment(firstDateOfWeek).add(index, 'days').format());
    setDays(ds);

    setLoading(false);

    (async () => {
      const user = getCurrentUser();
      const date = moment().format();
      const res = await axios.post(`/calendar.php`, { user, date });

      // const res = {
      //   status: 200,
      //   data: [
      //     { tip: 0, title: 'test-1', start: '2022-06-18 14:00', end: '2022-06-18 14:30' },
      //     { tip: 1, title: 'test-2', start: '2022-06-18 19:00', end: '2022-06-18 20:30' }
      //   ]
      // }

      if (res.status == 200) {
        const envts = {};
        const ttles = {};

        [...res.data, ...(formData.start && formData.end ? [formData] : [formData])].map(event => {
          let startMinute = moment(event.start).minute();

          if (![0, 15, 30, 45].includes(startMinute)) {
            if (startMinute < 15) startMinute = 0
            else if (startMinute < 30) startMinute = 15
            else if (startMinute < 45) startMinute = 30
            else startMinute = 45
          }

          let dt = moment(event.start).minute(startMinute).format();
          let dtEnd = event.new && !event.end ? dt : moment(event.end).format();
          let limit = 4
          ttles[dt] = event.title
          
          // console.log(`[x]`, dt, dtEnd)

          do {
            envts[dt] = event;
            dt = moment(dt).add(15, 'minutes').format();
          } while (dt < dtEnd);
        })

        setCells(envts)
        setTitles(ttles)
      }
      
    })()
  }, [date, formData])

  if (loading) {
    return <div style={{ display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div>
            {moment(date).format('MMMM YYYY')}
          </div>
          <div
            onClick={e => setDate(moment(date).subtract(7, 'days').format('YYYY-MM-DD'))}
            className={styles.button}
          >
            {'< Prev'}
          </div>
          <div
            onClick={e => setDate(moment(date).add(7, 'days').format('YYYY-MM-DD'))}
            className={styles.button}
          >
            {'Next >'}
          </div>
        </div>
        <div>
          <Button
            onClick={() => magic()}
          >
            Magic
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  {garr(8).map((day, index) => {
                    return (
                      <th>
                        <div style={{ position: 'relative', height: '100%' }}>
                          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                            <div>{index ? moment(days[index-1]).format('DD') : ''}</div>
                            <div style={{ color: '#00000050' }} >{index ? moment(days[index-1]).format('ddd') : ''}</div>
                          </div>
                        </div>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {Array.apply(null, Array(97)).map((v, index) => (
                  <tr key={index}>
                    {Array.apply(null, Array(8)).map((x, index1) => {
                      if (index1 == 0 && index % 4 == 0) {
                        return (
                          <td key={index1}>
                            <div className={styles.cellRelative}>
                              <div className={styles.hour}>{moment(days[0]).add(index * 15, 'minutes').format('HH')}</div>
                            </div>
                          </td>
                        )
                      }

                      let time = moment(days[index1 - 1]).add(index * 15, 'minutes').format();

                      return (
                        <td
                          className={cells[time] ? cells[time].new ? styles.markedNew : ( cells[time].tip == 0 ? styles.marked0 : ( cells[time].tip == 1 ? styles.marked1 : styles.marked2 ) ) : ''}
                          key={index1}
                          onClick={e => {
                            // console.log(`[x]`, moment(days[index1 - 1]).add(index * 15, 'minutes').format('HH:mm'))
                            setFormData({ ...formData, new: true, [focusedInput]: moment(days[index1 - 1]).add(index * 15, 'minutes').format('YYYY-MM-DD HH:mm:ss') })
                            setRightSideOpen(true)
                            setFocusedInput('end')
                          }}
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
        </div>
        <div className={styles.rightSide}>
          <Collapse open={rightSideOpen}>
            <EventBox
              onClose={e => {
                setRightSideOpen(false)
                setFormData({})
              }}
              event={formData}
              onEventChange={formData => setFormData(formData)}
              focusedInput={focusedInput}
              onInputFocus={input => setFocusedInput(input)}
              onSubmit={e => sumbit()}
            />
          </Collapse>
        </div>
      </div>
    </div>
  )
}
