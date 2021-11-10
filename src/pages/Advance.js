import React from 'react'
import VPL_STATUS from '../components/VerticalStepsList/status'
import VerticalProgressList from '../components/VerticalStepsList'
import { error, save } from 'api'
import Marker from 'items/Marker'
import Checkbox from 'items/Checkbox'

function Advance () {
  const items = [{
    text: 'Progress 1',
    status: VPL_STATUS.DONE,
    time: '12:00',
    meta () {
      return this.time
    }
  }, {
    text: 'Progress 2',
    time: '12:30',
    status: VPL_STATUS.DONE,
    children: [{
      text: 'Children 1'
    }, {
      text: 'Children 2'
    }],
    meta () {
      return this.children.length
    }
  }, {
    text: 'Progress 3',
    status: VPL_STATUS.PENDING,
    callback () {
      return save().then(res => {
        this.time = res.time
      })
    },
    update () {
      this.children = [{
        text: 'New Children'
      }]
      this.text = 'Progress3 Done!'
      return this
    },
    meta () {
      return this.time
    }
  }, {
    text: 'Progress 4',
    status: VPL_STATUS.COMING,
    marker: <Marker />,
    checkbox: <Checkbox />
  }, {
    text: 'Progress 5',
    status: VPL_STATUS.COMING,
    callback () {
      return error().catch(err => {
        console.error(err)
        alert('checked error.')
        return false
      })
    }
  }]

  const itemFilterHandler = item => {
    if (item.text === 'Progress 1') {
      item.text = 'Filtered Progress 1'
      item.marker = <Marker />
    }

    return item
  }

  return <VerticalProgressList
    items={items}
    textFilter={text => text + '!'}
    childFilter={text => `Filtered ${text}`}
    itemFilter={itemFilterHandler}
  />
}

export default Advance
