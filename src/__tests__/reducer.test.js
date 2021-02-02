import rootReducer, {initialState} from '../redux/rootReducer'
import * as types from '../redux/rootTypes'


describe('Reducer tabs', () => {
  test('should return initital state', () => {
    expect(rootReducer(undefined, {})).toEqual(
      {...initialState}
    )
  })

  test('should handle TOGGLE_TABS', () => {
    expect(rootReducer([], {
      type: types.TOGGLE_TABS,
      payload: {id:'test'}
    })).toEqual(
      {
        tabs: {
          active: 'test'
        }
      }
    )
  })
})