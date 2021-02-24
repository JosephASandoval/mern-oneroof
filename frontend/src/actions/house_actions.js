import { getHouses, getUserHouses, makeHouse } from '../util/house_api_util';

export const RECEIVE_HOUSES = "RECEIVE_HOUSES";
export const RECEIVE_USER_HOUSES = "RECEIVE_USER_HOUSES";
export const RECEIVE_NEW_HOUSE = "RECEIVE_NEW_HOUSE";

export const receiveHouses = houses => ({
  type: RECEIVE_HOUSES,
  houses
});

export const receiveUserHouses = houses => ({
  type: RECEIVE_USER_HOUSES,
  houses
});

export const receiveNewHouse = house => ({
  type: RECEIVE_NEW_HOUSE,
  house
})

export const fetchHouses = () => dispatch => (
  getHouses()
    .then(houses => dispatch(receiveHouses(houses)))
    .catch(err => console.log(err))
);

export const fetchUserHouses = id => dispatch => (
  getUserHouses(id)
    .then(houses => dispatch(receiveUserHouses(houses)))
    .catch(err => console.log(err))
);

export const createHouse = data => dispatch => {
    debugger;
  return makeHouse(data)
    .then(house => dispatch(receiveNewHouse(house)))
    .catch(err => console.log(err))
};