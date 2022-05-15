import React from "react";
import style from './../NavBar.module.css';

const RecFriends = (props) => {
 

      
      let idRec = props.data.map ( (id) => id.id )
        let listRec = props.data.map ((name) => <div > <div className={style.recAva}></div> {name.name} </div>)

            
           return ( <div>
           <div className={style.title}> FRIENDS</div>
            <div>{listRec}</div>
            
      {/*  <div className={style.recomendationOfFriends}>
            <div className={style.title}> FRIENDS</div>
            <div className={style.first}> <div className={style.recAva}></div> Andrey </div>
            <div className={style.second}> <div className={style.recAva}></div> Max</div>
            <div className={style.third}> <div className={style.recAva}></div> Ivan </div>
     </div> */}
     </div>
    )
}

export default RecFriends



