//To write all the city service logic 
//Currently we are only giving crud service over city
const { CityRepository}=require('../repository/city-repository');
class CityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }
    async createCity({name}) {
        try{
            console.log({name},"in cityRepository");
          return  this.cityRepository.create({name:name});
        }
        catch(error){
            console.log("Something went wrong at service layer ",error);
        }
    }
    async getCityById(cityId){
        try { 
            return this.cityRepository.get(id);
          } 
        catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
    
    async updateCity(cityId,updatedData){
        try {
           return this.cityRespository.update(id,updatedData);
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
       
    }
    async deleteCity(id){
        try {
             return this.cityRepository.delete(id);
        }
        catch (error) {
            console.log("Something went wrong at service layer");
        }
       
        
    }
    
}
module.exports={
    CityService
}