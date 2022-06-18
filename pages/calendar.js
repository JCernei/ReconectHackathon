import axios from 'axios'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { getCurrentUser, setCurrentUser } from '../utils';

export default function Calendar(){
  const [events, setEvents] = useState([]);
  
  useEffect(() => {  
    (async () => {
      const user = getCurrentUser();
      const response = await axios.post(`${process.env.API_URL}/calendar.php`, { user });
      if (response.status == 200) {
        setEvents(response.data)
      }
      console.log(response.data);
    })()
  }, [])

  return(
    <div>
      <table>
        <thead>
          <tr>
            {[1, 2, 3, 4, 5, 6, 7].map(day => <th>{day}</th>)}
            {/* <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th> */}

          </tr>
        </thead>
        <tbody>
          {Array.apply(null, Array(96)).map((v, index) => (
            <tr key={index}>
              {Array.apply(null, Array(7)).map((x, index1) => <td key={index1}>{index}:{index1}</td>)}
            </tr>
          ))}
        
        {/* <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr> */}
        </tbody>
    </table>
    </div>
    )


}

export async function getServerSideProps(context) {
  // date: moment().format(); 
  // username: 'alpha';
  // const response = await axios.post(`${process.env.API_URL}/calendar.php`, {username}, {date});
  // console.log(response.data);
  return {
    props: {
      events: [
        {
          title: 'test',
          type: 0,
          start: '2022-06-19 15:00',
          end: '2022-06-19 15:30',
        },
        {
          title: 'test2',
          type: 0,
          start: '2022-06-19 16:00',
          end: '2022-06-19 18:30',
        },
      ]
    }
  }
}

async function getUser() {
  try {
    const response = await axios.get('http://192.168.1.5/tms/calendar.php');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}