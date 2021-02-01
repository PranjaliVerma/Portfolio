const initialState = {
    MyData:[]
    }; 
  const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'REQUEST':
          return {
            MyData: action.url,
          };
        
        default:
          return state;
    }
    };
    
    export default reducer