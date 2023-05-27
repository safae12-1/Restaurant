const express = require('express');
const mongoose = require('mongoose'); // Importer le module mongoose
const cors=require('cors')
const app = express();


const cityController = require('./controllers/CityController');
const zoneController = require('./controllers/ZoneController');
const specialiteController = require('./controllers/SpecialiteController');
const restaurantController = require('./controllers/RestaurantController');


mongoose.connect('mongodb://localhost:27017/dbRestauts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/api/cities', cityController);
app.use('/api/zones', zoneController);
app.use('/api/specialites', specialiteController);
app.use('/api/restaurants', restaurantController);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
