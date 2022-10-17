import History from "../models/History"; 

const history = async() => {
  return Promise.resolve(History.find());
}

export default history;
