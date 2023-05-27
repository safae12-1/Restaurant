const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const RestaurantService = require('../services/RestaurantService');
const restaurantService = new RestaurantService(Restaurant);


// GET all restaurants
router.get('/', async (req, res) => {
        try {
          const restaus = await restaurantService.getAllRestaurants();
          res.json(restaus);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      });

// Get restaurants by specialite Id
router.get('/specialite/:specialiteId', async (req, res) => {
  try {
    const restaurants = await restaurantService.getRestaurantsBySpecialiteId(req.params.specialiteId);
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurantService.saveRestaurant(restaurant);
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET all restaurants
router.post('/filter', async (req, res) => {
        try {
          console.log(req.body);
          const restaus = await restaurantService.getRestaurants(req.body);
          res.json(restaus);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error xx');
        }
      });


module.exports=router;