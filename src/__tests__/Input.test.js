import { render, fireEvent, screen } from '../utils/test.utils'
import Input from '../components/Input';

let inputElement, buttonElement, mockSubmitHandler

beforeEach (() => {
  mockSubmitHandler = jest.fn()
  render(<Input submitHandler={mockSubmitHandler}/>)
  inputElement = screen.getByPlaceholderText(/Введите название вкладки/i);
  buttonElement = screen.getByText(/Готово/i);
})

afterEach(() => {
  mockSubmitHandler = null
  inputElement = null
  buttonElement = null
})
const expValue = 'test'



describe('Input: ', () => {
  test('should renders input with button and empty input', () => {
    expect(inputElement.value).toBe('')
    expect(buttonElement).toBeInTheDocument()
  });

  test('should NOT submit click with empty input value', () => {
    fireEvent.click(buttonElement)
    expect(mockSubmitHandler).toBeCalledTimes(0)
  });

  test('should submit click with correct value', () => {
    fireEvent.change(inputElement, {
      target: {value: expValue}
    })

    mockSubmitHandler.mockReturnValue(inputElement.value)
     
    fireEvent.click(buttonElement)

    expect(mockSubmitHandler).toBeCalledTimes(1)
    expect(mockSubmitHandler.mock.results[0].value).toBe(expValue)
  }); 

  it('shoud hide input after click on a button', () => {
    fireEvent.change(inputElement, {
      target: {value: expValue}
    })
    fireEvent.click(buttonElement)
    buttonElement = screen.getByText(/Готово/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
