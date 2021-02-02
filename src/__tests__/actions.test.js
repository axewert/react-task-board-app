import * as actions from '../redux/rootActions'
import * as types from '../redux/rootTypes'

describe('actions', () => {
  it('should create an action to toggle tab', () => {
    const id = 'test-ID'
    const expectedAction = {
      type: types.TOGGLE_TABS,
      payload: {id}
    }
    expect(actions.toggleTabs(id)).toEqual(expectedAction)
  })
})