import React from 'react'
import cx from 'classnames'
import s from './styles.css'


/*
  Shows Item Type - employee, vehicle, or client
  Vehicle - input location to delivery to


  Employee:
    1. Filler Icon of Person
    2. Name

  Vehicle:
    1. Icon of type of vehicle
    2. MPG
    3.

  Client:
    1. Icon?
    2. Happiness level
    3. Name
    4. Deliveries button to see their delivery schedule
*/
class DashItem extends React.Component {
  render() {
    return (
      <div className={s.itemContainer}>

        <i className={cx("fa fa-bicycle", s.icon)}></i>

        <div className={s.name}>Bicycle</div>

        <div className={s.milesPerGallon}>mpg: unlimited</div>

      </div>
    )
  }
}

export default DashItem;
