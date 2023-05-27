
class SerieService {
    constructor(serieModel) {
      this.serieModel = serieModel;
    }
  
    // Get all series
    async getAllSeries() {
      try {
        const series = await this.serieModel.find();
        return series;
      } catch (error) {
        throw new Error(`Unable to fetch series: ${error}`);
      }
    }

    async getSeriesBySpecialId(specialId) {
      try {
        const series = await this.serieModel.find({ specialite: specialId });
        return series;
      } catch (error) {
        throw new Error(`Unable to fetch series for speciality ${sepcialId}: ${error}`);
      }
    }
  
    // Get a serie by ID
    async getSerisById(id) {
      try {
        const serie = await this.serieModel.findById(id);
        return serie;
      } catch (error) {
        throw new Error(`Unable to fetch serie with ID ${id}: ${error}`);
      }
    }

    // Save a new serie
  async saveSerie(serie) {
    try {
      const newSerie = new this.serieModel(serie);
      const savedSerie = await newSerie.save();
      return savedSerie;
    } catch (error) {
      throw new Error(`Unable to save serie: ${error}`);
    }
  }
  
  }
  
  module.exports = SerieService;