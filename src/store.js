import createStore from 'redux-zero'

const initialState = {
    successLogin : false,
    
       user : {
          id : null,
          email :  null,
          fullname :  null,
          survey :  null,
          question :  null,
          options :  null            
       },
       boards : null,
       stages : null,
       tasks : null   
//    stages: [ ],
//    tasks: [ ],
//    boards: [ ],
//    successLogin : false,
//    user : {
//       id : null,
//       email :  null,
//       userName :  null,
//       lastName :  null,
//       pass :  null,
//       userStages : [],
//       userTasks: [],
//       boards: []      
//    }  
};

const store = createStore (initialState);
export default store;   