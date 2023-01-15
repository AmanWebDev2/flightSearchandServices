//To write all the city service logic 
//Currently we are only giving crud service over city
const { CityRepository, cityRepository }=require('../repository/index');
class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }
    async createCity({cityName}) {
        try{
           await cityRepository.create({name:cityName});
           return true;
        }
        catch(error){
            console.log("Something went wrong at service layer ");
        }
    }
    async getCityById(cityId){
        try { 
           const requiredCity= await cityRepository.findOne({
                where:{
                    id:cityId
                }
            });
            return requiredCity;
          } 
        catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
    
    async updateCity(cityId,updatedData){
        try {
            await cityRepository.update(updatedData,{
                where:{
                    id:cityId
                },
                return:true
            })
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
       
    }
    async deleteCity(cityId){
        try {
             await cityRepository.destroy({
            where:{
                id:cityId
            },
            return :true
        })
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
       
        
    }
    
}