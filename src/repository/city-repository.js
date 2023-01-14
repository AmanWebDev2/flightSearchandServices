//repositry are for intracting with models
const {City} =require('../models/index');
class cityRepository{
    //CRUD operation on city
     async createCity({cityName}) {
        try{
            //We have used await becase we making changes in server which out side the code and will take some time ,that is why we used asny promise based syntax
           await City.create({name:cityName});//same as named argument in flutter
        }
        catch(error){
            console.log("Something went wrong");
        }
    }
    async getCityById(cityId){
        try {
            //model.find one find the instances where your passed queries are meet 
           const requiredCity= await City.findOne({
                where:{
                    id:cityId
                }
            });
            console.log(requiredCity);
          } 
        catch (error) {
            console.log("Something went wrong");
        }
    }
    
    async updateCity(cityId,updatedData){
        //model.update takes two parameter first is updatedData,second is query to tell where to update the data
        try {
            await City.update(updatedData,{
                where:{
                    id:cityId
                },
                returning:true
            })
        } catch (error) {
            console.log("Something went wrong");
        }
       
    }
    async deleteCity(cityId){
        try {
             await City.destroy({
            where:{
                id:cityId
            }
        })
        } catch (error) {
            console.log("Something went wrong");
        }
       
        
    }
}
module.exports=cityRepository;