import React from 'react'
import VPL_STATUS from '../components/VerticalStepsList/status'
import VerticalProgressList from '../components/VerticalStepsList'

function Custom () {
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
    status: VPL_STATUS.PENDING,
    children: [{
      text: 'Children 1'
    }, {
      text: 'Children 2'
    }],
    meta () {
      return this.children.length
    }
  }]

  return <VerticalProgressList
    items={items}
    hideLastLine={true}
    lineColor={'#39f'}
    defaultMarkerColor={'#a9f'}
    defaultCheckboxColor={'#39f'}
    metaStyle={{
      fontWeight: 900,
      color: '#aaaa'
    }}
    textStyle={{
      color: 'blue',
      fontSize: 18
    }}
    childStyle={{
      color: '#fa9'
    }}
  />
}

export default Custom
