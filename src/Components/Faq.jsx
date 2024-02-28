import { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/style.css';

const FAQ = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/src/utils/database.json');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    // <div className="g-layout g-layout--auto-fit-columns j-items-center g-md" id="categories"> 
    //   {data.map((element) => ( 
        // <div className="card card--flip" key={element.id}>
        //   <div className=" card__body--flip">
        //     <img src={element.image} width="48px" height="80px" className="img img--category" alt=""/>
        //   </div>
        //   <div className="card__body2 card__body--flip">
        //     <h1 className="card__title2">{element.title}</h1>
        //     <p className="card__text2">{element.text}</p>
        //     <img src={element.avatar} width="30px" height="30px" className="avatar" alt=""/>
        //     {/* <a href={element.slug} target="_blank" className="button button--primary">Hacer Pedido</a> */}
        //   </div>
        // </div>
    //     <div key={element.id}>
    //         </div>
    //   ))}
    // </div>

    <div className="g-layout g-layout--auto-fit-columns j-items-center g-md" id="categories" > 
    <div style={{width: "100%" }}>
        {data.map((element) => (

            <div className="card card--flip" key={element.id}>
                <div>
                <img  style={{ width: "48px", height: "80px" }}  className="img img--category"  src={element.image}/>
                </div>
                <div className="card__body2 card__body--flip">
                <h1 className="card__title2" style={{color:"white"}}>{element.title}</h1>
                <h2 className="card__text2" style={{color:"white"}}>{element.text}</h2>
                <img src={element.avatar} width="30px" height="30px" className="avatar" alt=""/>
                </div>   
            </div> 
           
        ))}
       
    </div>
    </div>
  


  );
};

export default FAQ;