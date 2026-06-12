import { useState, useEffect } from 'react'
import styles from './Clock.module.scss'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const hh = time.getHours().toString().padStart(2, '0')
  const mm = time.getMinutes().toString().padStart(2, '0')
  const ss = time.getSeconds().toString().padStart(2, '0')

  return (
    <div className={styles.clock}>
      <span className={styles.clock__time}>
        {hh}:{mm}:
        <span className={styles['clock__time--seconds']}>{ss}</span>
      </span>
    </div>
  )
}

export default Clock