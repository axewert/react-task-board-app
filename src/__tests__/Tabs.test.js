import { render, fireEvent, screen, getByPlaceholderText } from '../utils/test.utils'
import Tabs from '../components/Tabs';

let tab, addTabBtn, mockClickHandler

const initialState = {}

const numOfTabs = 3

const testState = {}
const testText = 'test'
Array(numOfTabs).fill('').map((_,i) => {
  testState[i] = {title: testText}
})

beforeEach (() => {
  render(<Tabs initialState={initialState}/>)
})

afterEach(() => {

})

describe('Tabs: ', () => {
  test('should renders \'new tab\' button when number of tabs < max tabs amount', () => {
    addTabBtn = screen.getByText(/Добавить вкладку/i)
    expect(addTabBtn).toBeInTheDocument()
  });

  test('should renders tabs', () => {
    render(<Tabs />, {initialState: {tabs: {items: testState}}})
    tab = screen.getAllByText(testText)
    expect(tab.length).toBe(numOfTabs)
  });

  test('should handle click on a button', () => {
    addTabBtn = screen.getByText(/Добавить вкладку/i)
    const container = screen.getByTestId('input-container')
    expect(container).toHaveClass('invisible')
    fireEvent.click(addTabBtn)
    expect(container).toHaveClass('visible')
  })
})
