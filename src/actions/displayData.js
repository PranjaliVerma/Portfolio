import axios from "axios"
 const myCase = (data) => {
return { type: 'REQUEST' ,  url: data}
};

  

const  displayUsers = () => {

return (dispatch) => {

axios.get('https://gitconnected.com/v1/portfolio/pranjaliverma').then(res => {
const data=res.data
dispatch(myCase(data)) 
})
}
};
export default displayUsers;