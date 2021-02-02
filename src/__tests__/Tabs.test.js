import { render, fireEvent, screen, getByPlaceholderText } from '../utils/test.utils'
import Tabs from '../components/Tabs';
import { initialState } from '../redux/rootReducer';



const createTab = (title, id) => ({
  title, id
})

const firstTab = {
  id: 'testID-1',
  title: 'test-title-1'
}

const secondTab = {
  id: 'testID-2',
  title: 'test-title-2'
}


const testInitialState = {
  tabs: {
    route: 'tabs',
    current: [firstTab.id, secondTab.id],
    newTabText:'Добавить новую вкладку',
    active: firstTab.id,
    [firstTab.id]: 
      {
        title: firstTab.title,
        categories: ['testCat1']
      },
    [secondTab.id]: 
      {
        title: secondTab.title,
        categories: ['testCat2']
      }
  }
}

let tabOne, tabTwo

beforeEach(() => {
  render(<Tabs />, {initialState: {...testInitialState}})
  tabOne = screen.getByText(firstTab.title)
  tabTwo = screen.getByText(secondTab.title)
})


describe('Tabs: ', () => {
  test('should show placeholder when has not any tabs', () => {
    render(<Tabs />, {initialState: {...initialState}})
    const placeholder = screen.getByText(initialState.tabs.placeholder)
    expect(placeholder).toBeInTheDocument
  })

  test('should show button for creating a new tab when amount of tabs < max tabs', () => {
    render(<Tabs />)
    const button = screen.getAllByText(testInitialState.tabs.newTabText)
    expect(button).toBeInTheDocument
  })

  test('should renders tabs with amount equals num of current tabs', () => {
    expect(tabOne).toBeInTheDocument
    expect(tabTwo).toBeInTheDocument
  })

  test('should change active state when toggled', () => {
    expect(tabOne).toHaveClass('active')
    expect(tabTwo).not.toHaveClass('active')

    fireEvent.click(tabTwo)

    expect(tabTwo).toHaveClass('active')
    expect(tabOne).not.toHaveClass('active')
  })
})
