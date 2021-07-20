import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { clockSelector } from './clockSlice'
import { start, stop } from './clockSlice'
import classes from './Clock.module.css'

export default function Clock() {
  const { time, running } = useAppSelector(clockSelector)
  const hours = new Date(time).getHours() % 12
  const minutes = new Date(time).getMinutes()
  const seconds = new Date(time).getSeconds()

  console.log(hours, minutes, seconds)
  const hoursStyle = {
    animationDelay: `-${hours * 60 * 60 + minutes * 60}s`,
  }
  const minutesStyle = {
    animationDelay: `-${minutes * 60}s`,
  }
  const secondsStyle = {
    animationDelay: -seconds + 's',
  }
  const dispatch = useAppDispatch()
  return (
    <div>
      <div
        className={[!running ? classes.stopped : '', classes.clockWrap].join(
          ' '
        )}
      >
        <div className={classes.handHour} style={hoursStyle}></div>
        <div className={classes.handMinute} style={minutesStyle}></div>
        <div className={classes.handSecond} style={secondsStyle}></div>
      </div>
      <div className={classes.controlsWrap}>
        <button onClick={() => dispatch(start())}>Start</button>
        <button onClick={() => dispatch(stop())}>Stop</button>
      </div>
    </div>
  )
}
