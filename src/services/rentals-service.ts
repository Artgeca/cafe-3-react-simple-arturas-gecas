import { RentalItemFetch } from '../pages/store-page/types';

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

const create = async (data: RentalItemFetch) => {
  const response = await fetch(`${domain}/rentals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};

const remove = async (id: string) => {
  const response = await fetch(`${domain}/rentals/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};

const RentalsService = {
  fetchAll, fetchById, create, remove,
};

export default RentalsService;
