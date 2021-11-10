import classNames from 'classnames'
import React, { isValidElement, useState } from 'react'
import VSL_STATUS from './status'
import './index.scss'
import produce from 'immer'

function VerticalStepsList ({ items: initItems, ...props }) {
  const [items, setItems] = useState(initItems)
  const [called, setCalled] = useState(false)

  const checkedHandler = async (i) => {
    if (items[i].callback instanceof Function) {
      if (called) {
        return
      }

      setCalled(true)
      const callbackResponse = items[i].callback()
      if (callbackResponse instanceof Promise) {
        setItems(produce(items, draft => {
          draft[i].disabled = true
        }))
        try {
          const promiseResponse = await callbackResponse
          setCalled(false)
          setItems(produce(items, draft => {
            draft[i].disabled = false
          }))
          if (promiseResponse === false) {
            return
          }
        } catch (err) {
          setCalled(false)
          setItems(produce(items, draft => {
            draft[i].disabled = false
          }))
          console.error(err)
          return
        }
      }

      setCalled(false)
      if (callbackResponse === false) {
        return
      }
    }

    setItems(produce(items, draft => {
      draft[i].status = VSL_STATUS.DONE

      if (draft[i + 1]) {
        draft[i + 1].status = VSL_STATUS.PENDING
      }

      if (draft[i].update instanceof Function) {
        draft[i] = draft[i].update()
      }
    }))
  }

  const availableProps = {}
  for (const key in props) {
    if ((props[key] instanceof Function || isValidElement(props[key])) === false) {
      availableProps[key] = props[key]
    }
  }

  const preventCheckboxHandler = e => {
    e.target.checked = false
  }

  return (
        <div {...availableProps} className={classNames('vsl-list', props.className)}>
            {items.map((item, i) => {
              item = (props.itemFilter instanceof Function && props.itemFilter(item)) || item

              return (
                    <React.Fragment key={i}>
                        <div className={classNames('node', {
                          coming: item.status === VSL_STATUS.COMING
                        })} >
                            <label>
                              { item.status === VSL_STATUS.PENDING
                                ? (
                                  <>
                                    <input
                                      type="checkbox"
                                      onClick={() => checkedHandler(i)}
                                      onChange={e => preventCheckboxHandler(e)}
                                      style={{ display: 'none' }}
                                    />
                                    <div className={classNames({ disabled: item.disabled })}>
                                    {
                                      isValidElement(item.checkbox)
                                        ? <>{item.checkbox}</>
                                        : <div className="default-checkbox"></div>
                                    }
                                    </div>
                                  </>
                                  )
                                : <div className="marker">
                                  <>
                                  {
                                    isValidElement(item.marker)
                                      ? <>{item.marker}</>
                                      : <div className="circle-marker"></div>
                                  }
                                  </>
                                </div>
                              }
                              <span>
                                {(props.textFilter instanceof Function && props.textFilter(item.text)) || item.text}
                              </span>
                            </label>
                            { item.meta instanceof Function
                              ? <>
                                  <div className="meta">{item.meta()}</div>
                                </>
                              : ''}
                        </div>

                        { items.length - 1 > i && !item.children && <div className={classNames('line', {
                          coming: items[i + 1].status === VSL_STATUS.COMING
                        })}></div>}

                        { item.children && (
                            <div className={classNames('children', {
                              coming: items[i].status === VSL_STATUS.COMING,
                              done: items[i].status === VSL_STATUS.DONE
                            })}>
                                <div className="line"></div>
                                <div>
                                  {item.children.map((child, j) => (
                                    <div key={j}>
                                        {(props.childFilter instanceof Function && props.childFilter(child.text)) || child.text}
                                      </div>
                                  ))}
                                </div>
                            </div>
                        )}
                    </React.Fragment>
              )
            })}
        </div>
  )
}

export default VerticalStepsList
