# React Vertical Steps List

[DEMO](https://laijunbin.github.io/react-vertical-steps-list/index.html)

![demo.png](./demo.png)

# Install
```
$ npm i react-vertical-steps-list
```

## Example
jsx:
```jsx
  <VerticalStepsList items={items} />
```


items:
```js
const items = [{
  text: 'Progress 1',
  status: VSL_STATUS.DONE,
  time: '12:00'
}, {
  text: 'Progress 2',
  time: '12:30',
  status: VSL_STATUS.DONE,
  children: [{
    text: 'Children 1'
  }, {
    text: 'Children 2'
  }]
}, {
  text: 'Progress 3',
  status: VSL_STATUS.PENDING,
  callback () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })
  }
}, {
  text: 'Progress 4',
  status: VSL_STATUS.COMING
}, {
  text: 'Progress 5',
  status: VSL_STATUS.COMING,
  callback () {
    return new Promise(resolve => {
      setTimeout(() => {
        alert('checked error.')
        resolve(false)
      }, 1000)
    })
  }
}]
```

## Advanced Example

jsx:
```jsx
const itemFilterHandler = item => {
  if (item.text === 'Progress 1') {
    item.text = 'Filtered Progress 1'
    item.marker = <Marker />
  }

  return item
}

<VerticalStepsList
  items={items}
  textFilter={text => text + '!'}
  childFilter={text => `Filtered ${text}`}
  itemFilter={itemFilterHandler}
/>
```

items:
```js
const items = [{
  text: 'Progress 1',
  status: VSL_STATUS.DONE,
  time: '12:00',
  meta () {
    return this.time
  }
}, {
  text: 'Progress 2',
  time: '12:30',
  status: VSL_STATUS.DONE,
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
  status: VSL_STATUS.PENDING,
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
  status: VSL_STATUS.COMING,
  marker: <Marker />,
  checkbox: <Checkbox />
}, {
  text: 'Progress 5',
  status: VSL_STATUS.COMING,
  callback () {
    return error().catch(err => {
      console.error(err)
      alert('checked error.')
      return false
    })
  }
}]
```

## Run example
```
$ git clone https://github.com/LaiJunBin/react-vertical-steps-list.git
$ cd react-vertical-steps-list
$ npm i
$ npm run start
```

The server will run at http://localhost:3000