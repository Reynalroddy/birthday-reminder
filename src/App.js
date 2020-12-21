import React from 'react';
import data from './data';
import List from './List';
function App() {

  const [state, setState] = React.useState(data);

  const len = state.length;
const clearList = ()=>{
setState(()=>{
return [];


})


}

  return (
    <main>
      <section className="peeps py-5">
        <div className="container">
          <div className="row justify-content-center">
            <h4><span>{len}</span> people's birthday</h4>
            </div>

              <div className="row text-center">
             <div className="col-7 mx-auto text-center text-danger">
              <List  state = {state}></List>
            </div>
            </div>
           <button className ="button" type="button" onClick ={()=>clearList()}> clear list</button>
          </div>



      </section>


    </main>



  );
}

export default App;
