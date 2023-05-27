const express = require('express');
const router = express.Router();
const Specialite = require('../models/Specialite');
const SpecialiteService = require('../services/SpecialiteService');
const specialiteService = new SpecialiteService(Specialite);



router.get('/',async (req,res)=>{
    
        const data=await specialiteService.getAllSpecialites();
        res.json(data);
  
});
// Get specialites by zone Id
router.get('/zone/:zoneId', async (req, res) => {
        try {
          const specialites = await specialiteService.getSpecialitesByZonesId(req.params.zoneId);
          res.json(specialites);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      });

// POST a new specialite
router.post('/', async (req, res) => {
        try {
          const specialite = new Specialite(req.body);
          await specialiteService.saveSpecialite(specialite);
          res.json(specialite);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      });

module.exports=router;