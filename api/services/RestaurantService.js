
class RestaurantService {
  constructor(restaurantModel) {
    this.restaurantModel = restaurantModel;
  }

  // Get all restaurants
  async getAllRestaurants() {
    try {
      const restaus = await this.restaurantModel.find();
      return restaus;
    } catch (error) {
      throw new Error(`Unable to fetch restaus: ${error}`);
    }
  }

  async getRestaurantsBySpecialiteId(specialiteId) {
    try {
      const restaurants = await this.restaurantModel.find({ specialite: specialiteId });
      return restaurants;
    } catch (error) {
      throw new Error(`Unable to fetch restaurants for specialite ${specialiteId}: ${error}`);
    }
  }
 
  // get restaurants with some criteria : filter = {specialite:'Italienne'}
  async getRestaurants(filter) {
    try {

        if(filter && filter.id)
            return this.getRestautyById(filter.id);

      const restaus = await this.restaurantModel.find(filter);
      return restaus;
    } catch (error) {
      throw new Error(`Unable to fetch restaus: ${error}`);
    }
  }

  // Get a restaut by ID
  async getRestautyById(id) {
    try {
      const restau = await this.restaurantModel.findById(id);
      return restau;
    } catch (error) {
      throw new Error(`Unable to fetch restaut with ID ${id}: ${error}`);
    }
  }


  // Save a new restaut
  async saveRestaurant(restaut) {
    try {
      const newRestaut = new this.restaurantModel(restaut);
      const savedRestaut = await newRestaut.save();
      return savedRestaut;
    } catch (error) {
      throw new Error(`Unable to save restaut: ${error}`);
    }
  }



}

module.exports = RestaurantService;
