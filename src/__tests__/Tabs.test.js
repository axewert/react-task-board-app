import { render, fireEvent, screen, getByPlaceholderText } from '../utils/test.utils'
import Tabs from '../components/Tabs';

const firstTab = {
  id: 'testID-1',
  title: 'test-title-1'
}

const secondTab = {
  id: 'testID-2',
  title: 'test-title-2'
}


const tabs = {
  route: 'tabs',
  current: [firstTab.id, secondTab.id],
  active: firstTab.id,
  [firstTab.id]: 
    {
      title: firstTab.title,
    },
  [secondTab.id]: 
    {
      title: secondTab.title
    }
}

let tabOne, tabTwo

beforeEach(() => {
  render(<Tabs/>, {initialState: {tabs}})
  tabOne = screen.getByText(firstTab.title)
  tabTwo = screen.getByText(secondTab.title)
})


describe('Tabs: ', () => {
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
