import React from 'react';

const List = ({state}) => {
// console.log(props)  deconstruct props obj right away
  return (
    <>
{state.map((item)=>{
  const {name:fullName,id,image,age} = item
  return  <div className ="d-flex py-3 " key=
      {id}>
        <div className="col-5">
<img src={image} alt={fullName} className="img-fluid rounded-circle img"/>
        </div>

 <div className="col-7">
<div className ="details">
<h5>{fullName}</h5>
<p>{age}</p>
</div>
        </div>



      </div>


})}
     
    </>
  );
};

export default List;
