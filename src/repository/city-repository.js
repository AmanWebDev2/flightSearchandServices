//repositry are for intracting with models
const {City} =require('../models/city');
class CityRepository{
    //CRUD operation on city
     async create({name}) {
        try{
            //We have used await becase we making changes in server which out side the code and will take some time ,that is why we used asny promise based syntax
           const city=await City.create({name:name});
           //same as named argument in flutter
           return city;
        }
        catch(error){
            console.log("Something went wrong",error);
        }
    }
    async get(cityId){
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
    
    async update(cityId,updatedData){
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
    async delete(cityId){
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
module.exports={
    CityRepository
};