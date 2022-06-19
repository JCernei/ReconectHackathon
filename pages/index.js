import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import LoginForm from './LoginForm'

export default function Home() {

  useEffect(() => {
    axios.post('/calendar', { test: 'test' });
  }, [])

  // console.log(process.env.API_URL)
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
