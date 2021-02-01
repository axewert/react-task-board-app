import {connect} from 'react-redux'
import { showCategoryForm } from '../redux/form/formActions';
import Category from "./Category";
import Form from "./Form";
import Tabs from "./Tabs";


function App({categories, showCategoryForm}) {
  const {items, maxAmount, placeholder} = categories
  console.log(placeholder)
  const addCatBtn = () => {
    if(Object.keys(items).length < maxAmount) {
      return (
        <div className="container d-flex justify-content-center mt-5">
          <button 
            className="btn btn-primary" 
            type="submit"
            onClick={showCategoryForm}
          >Добавить категорию</button>
        </div>
      )
    }
  }

  const renderCategories = (category, id) => {
    return (
      <>     
        <Category 
          title = {category.title}
          categoryID={id}
        />
      </>
    )
  }

  return (
    <div className="App">      
      <Tabs />
      <Form />
      {placeholder && <h2>HELLO</h2>}
      <div className="container-fluid d-flex mt-5">
        {Object.keys(items).map(id => {
          return renderCategories(items[id], id)
        })}
      </div>
      {addCatBtn()}
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  form: state.form,
})

const mapDispatchToProps = {
  showCategoryForm
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
