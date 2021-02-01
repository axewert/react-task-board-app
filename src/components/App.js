import {connect} from 'react-redux'
import { addNewCategory } from "../redux/categories/categoryActions";
import Category from "./Category";
import Form from "./Form";
import Tabs from "./Tabs";


function App({categories}) {
  const {items, maxAmount} = categories

  const addCatBtn = () => {
    if(Object.keys(items).length < maxAmount) {
      return (
        <div className="container d-flex justify-content-center mt-5">
          <button 
            className="btn btn-primary" 
            type="submit"
          >Добавить категорию</button>
        </div>
      )
    }
  }

  const renderCategories = (category) => {
    return (
      <>     
        <Category title = {category.title}/>
      </>
    )
  }

  return (
    <div className="App">      
      <Tabs />
      <Form />
      <div className="container-fluid d-flex mt-5">
        {Object.keys(items).map(id => {
          return renderCategories(items[id])
        })}
      </div>
      {addCatBtn()}
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  form: state.form
})

const mapDispatchToProps = {
  addNewCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
