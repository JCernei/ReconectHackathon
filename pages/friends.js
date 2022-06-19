import axios from 'axios'
import Wrapper from '../components/Wrapper';
import { useEffect, useState } from 'react';
import {getCurrentUser} from '../utils';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
export default function Friends(){
  const [users, setUsers] = useState([])
  useEffect(() => {
      (async () => {
      const user = getCurrentUser();
      const res = await axios.post(`/friends.php`, { user });

      // const res = {
      //   status: 200,
      //   data: [
      //     { tip: 0, title: 'test-1', start: '2022-06-18 14:00', end: '2022-06-18 14:30' },
      //     { tip: 1, title: 'test-2', start: '2022-06-18 19:00', end: '2022-06-18 20:30' }
      //   ]
      // }

      if (res.status == 200) {
        setUsers(res.data)
        console.log('[x] asd', res.data)
      }
        
      })()
        
  }, [])

    return(
      <Wrapper>
        
        <div> 
          <br/>
          <br/>
          <div className="usr">
            <h1 className='text-xl'>&emsp;&emsp; Add friend </h1>&emsp;&emsp; <input type="text" name="username" className="rounded border bg-gray-100 p-4 text-lg" placeholder="username"/>
            <button className=''>
            <AddBoxRoundedIcon style={{fontSize: '62px'}}/>
            </button>
          </div>
        <br/>
        <h1 className='text-xl'>&emsp;&emsp; Your Friends: </h1>{users.map(user => <div  className="card text-xl	"><AccountCircleRoundedIcon/>&emsp;{ user.nume}:&emsp;@{user.username}</div>)}
        </div>    

      </Wrapper>
    )
}
  