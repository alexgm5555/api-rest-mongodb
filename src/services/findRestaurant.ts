interface bodyRestaurant {
  city: string;
  token:string;
}

const restaurant = async(_req: bodyRestaurant) => {
  const { city } = _req;
  console.log(city);
  return Promise.resolve('usuario buscando rutas');
}

export default restaurant;
