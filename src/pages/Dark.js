import React from 'react'
import VPL_STATUS from '../components/VerticalStepsList/status'
import VerticalProgressList from '../components/VerticalStepsList'

function Dark () {
  const items = [{
    text: 'Progress 1',
    status: VPL_STATUS.DONE,
    time: '12:00'
  }, {
    text: 'Progress 2',
    time: '12:30',
    status: VPL_STATUS.DONE,
    children: [{
      text: 'Children 1'
    }, {
      text: 'Children 2'
    }]
  }, {
    text: 'Progress 3',
    status: VPL_STATUS.PENDING,
    callback () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })
    }
  }, {
    text: 'Progress 4',
    status: VPL_STATUS.COMING
  }, {
    text: 'Progress 5',
    status: VPL_STATUS.COMING,
    callback () {
      return new Promise(resolve => {
        setTimeout(() => {
          alert('checked error.')
          resolve(false)
        }, 1000)
      })
    }
  }]
  return (
    <div style={{ background: '#000' }}>
      <VerticalProgressList
        items={items}
        darkTheme={true}
      />
    </div>
  )
}

export default Dark
