//Controller are function which has acces to both respose and request object ,It works a connection between model and view
//it need city service object




const {CityService}=require('../services/city-services');


//you can you class well as function as your wish


const cityService =new CityService();
//create a city ,PUT ->/city

const create= async function createCity(req,res){
    try {
        const city=cityService.createCity({name:req.body.name});
        console.log(req.body.name,"in controller");
        console.log(city);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Succesfully created a city",
            err:{}

        })
    } catch (error) {

        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to created a city",
            err:error,
        })
    }
}

//Get ->/city/:id

const get= async function getCity(req,res){
    try {
        const response =await cityService.getCityById(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:"Succesfully fetch the city",
            err:{}

        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to  fetch the city",
            err:error
        })
    }
}

//PATCh ->city/id:


const update=async function updateCity(req,res){
    try {
        const response =await cityService.updateCity(req.param.id,res.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"Succesfully updated the city",
            err:{}

        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to  update the city",
            err:error
        })
    }
}


//DELETE-> city/:id


const destroy = async function deleteCity(req,res){
    try {
        await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success:true,
            message:"Succesfully deleted the data",
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to  delete the city",
            err:error
        })
    }
}
module.exports = {
    create,
    get,
    update,
    destroy
  }
  