import { AsynchStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendar'

export function submitEntry ({ entry, key }) {
  return AsynchStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsynchStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsynchStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}