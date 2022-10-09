const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/rentals/?_expand=rentalCategory`);
  const items = await response.json();

  return items;
};

const fetchById = async (id: string) => {
  const response = await fetch(`${domain}/rentals/${id}?_expand=rentalCategory`);
  const item = await response.json();

  return item;
};

const RentalsService = { fetchAll, fetchById };

export default RentalsService;
