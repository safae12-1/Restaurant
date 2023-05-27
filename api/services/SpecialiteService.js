
class SpecialiteService {
    constructor(specModel) {
      this.specModel = specModel;
    }
  
    // Get all specialites
    async getAllSpecialites() {
      try {
        const specialites = await this.specModel.find();
        return specialites;
      } catch (error) {
        throw new Error(`Unable to fetch specialites: ${error}`);
      }
    }

    async getSpecialitesByZonesId(zoneId) {
      try {
        const specialites = await this.specModel.find({ zone: zoneId });
        return specialites;
      } catch (error) {
        throw new Error(`Unable to fetch specialités for zone ${zoneId}: ${error}`);
      }
    }
  
    // Get a specialite by ID
    async getSpecialiteById(id) {
      try {
        const specialite = await this.specModel.findById(id);
        return specialite;
      } catch (error) {
        throw new Error(`Unable to fetch specialite with ID ${id}: ${error}`);
      }
    }

    // Save a new specialite
  async saveSpecialite(specialite) {
    try {
      const newSpecialite = new this.specModel(specialite);
      const savedSpecialite = await newSpecialite.save();
      return savedSpecialite;
    } catch (error) {
      throw new Error(`Unable to save specialite: ${error}`);
    }
  }
  
  }
  
  module.exports = SpecialiteService;
  