import axios from "axios";

 const AppAxios = axios.create({
         baseURL:"https://api.github.com"
});
console.log("Appaxios")

export default AppAxios;
