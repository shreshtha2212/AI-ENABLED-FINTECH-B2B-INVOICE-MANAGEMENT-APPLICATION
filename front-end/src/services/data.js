import axios from "axios";
export const getData = async () => {
let response =  await axios.get("http://localhost:8088/first/DataLoading");
return response.data.wt;

}