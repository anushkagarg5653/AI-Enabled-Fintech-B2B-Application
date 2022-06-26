import axios from "axios";
export const getData = async () => {
  let response = await axios.get("http://localhost:8080/LetsStartBaby/RecieveData");
  return response.data.datas;
}
getData();