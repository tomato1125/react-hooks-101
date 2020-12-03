// action = {
//   type: 'CREATE_EVENT',
//   title: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては、、、、、'
// }

// before
// state = []
// after
// state = [
//   {
//     id: 1,
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては、、、、、'
    
//   }
// ]

// state = []
// state = [
//   { id: 1, title: 'タイトル１', body: 'ボディー１'},
//   { id: 1, title: 'タイトル１', body: 'ボディー１'},
//   { id: 1, title: 'タイトル１', body: 'ボディー１'},
// ]

const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : id = state[length - 1].id + 1
      return [...state, { id, ...event }]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events