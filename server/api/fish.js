const FishModel = require('../models/fish.ent')

async function getFishes(req, res) {
    
    // ============ validate ============

    // ============ business ===========

    // ============ database ==========
    // const fishes = await FishModel.find()
    // if (fishes.length <= 0){
    //     return res.status(400).json({
    //         message: 'cannot find fish',
    //         data: null
    //     })
    // }
    // const countFish = await FishModel.count()

    // paralell
    const [fishes, countFish] = await Promise.all([
        FishModel.find(),
        FishModel.count()
      ]);

    // // ตรวจสอบจำนวนปลาในarray 
    // if (fishes.length <= 0){
    //     return res.status(400).json({
    //         message: 'cannot find fish',
    //         data: null
    //     })
    // }

    return res.status(200).json({
        message: 'success',
        data: fishes,
        count: countFish
    })
}

async function getSingleFish(req, res) {
    // ============= validate =============
    const { fishId } = req.params
    if (!fishId.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({
            message: 'invalid fishid',
            data: null
        })
    } 

    // ============= business =============
    const fish = await FishModel.findById(fishId)
    if (!fish){
        return res.status(400).json({
            message: 'cannot find fish',
            data: null
        })
    }

    // ============= database ==============

    console.log("res fishes")
    return res.status(200).json({
        message: "success",
        data: fish
    })
}

async function reciveFish(req, res) {
    const { name, type, weight } = req.body;

    // ============ validate ===================

    if (!name || !type || !weight) {
        return res.status(400).json(
            {
                message: "invalid input!",
                data: null
            }
        )
    }

    if (!Number.isInteger(weight)) {
        return res.status(400).json(
            {
                message: "weight should be an Integer!",
                data: null
            }
        )
    }

    const fishType = ['sea', 'river'];
    if (!fishType.includes(type)) {
        return res.status(400).json(
            {
                message: "worg type of Fish!",
                data: null
            }
        )
    }

    // ================= business ===================
    // if type sea ; 1kg = 50
    // if type river ; 1kg = 70
    // cannot send the same name of fish

    // check dup name
    const duplicateFish = await FishModel.findOne({name: name})
    if (duplicateFish){
        return res.status(400).json(
            {
                message: "name of fish has already taken!",
                data: null
            }
        )
    }

    // cal price
    let price = 0;

    if (type == "sea") {
        price = weight * 50
    } else {
        price = weight * 70
    }

    // database
    const fish = new FishModel({
        ...req.body,
        price: price
    })
    const savedFish = await fish.save();

    return res.json({
        message: "success",
        data: savedFish
    }).status(201);

}

async function killFish(req, res) {
    // ========== validate ===============
    const { fishId } = req.params
    if (!fishId.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({
            message: 'invalid fishid',
            data: null
        })
    }

    // ========== business ===============
    await FishModel.findByIdAndDelete(fishId)
    
    return res.status(200).json({
        message: "delete sucess",
        data: null
    })
    
}

async function updateFishWeight(req, res){
    // ========== validate ===============
    const { fishId } = req.params
    const { weight } = req.body
    if (!fishId.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({
            message: 'invalid fishid',
            data: null
        })
    }

    if (!weight || !Number.isInteger(weight)){
        return res.status(400).json({
            message: 'invalid weight',
            data: null
        })
    }
    // ========== business ===============
    const fish = await FishModel.findById(fishId)
    if (!fish){
        return res.status(400).json({
            message: 'connot find fish',
            data: null
        })
    }

    // cal fish weight price
    let price = 0;
    
    if (fish.type == "sea"){
        price = weight*50
    } else {
        price = weight*70
    }

    // ============== database ==============
    const updatedFish = await FishModel.findByIdAndUpdate({_id: fishId},
    { $set: {
        price: price,
        weight: weight
    }});

    return res.status(201).json({
        message: 'success',
        data: {
            _id: fishId,
            name: updatedFish.name,
            type: updatedFish.type,
            weight: weight,
            price: price
        }
    })
}

function promotion(_, res){

    var delayInMilliseconds = 1; //3 second

    setTimeout(function() {
    //your code to be executed after 3 second
        return res.status(200).json({
            message:"sucess",
            data: {
                promotion: "asdasdhaohd ahsdiohasiod haiosdahsdhiouashdioahiosdioasdhioashdihiaosdoihhi asiodhioasdhioahiosdhioasdhoiaoisudhioashdi asiohd ohiasdhioasdhasiodhio ahsd ioasdhioaisohdihoashdiasod hasod",
                startDate: "12/12/1212",
                endDate: "22/22/2222"
            }
        })
    }, delayInMilliseconds);

    
}

module.exports = {
    getFishes,
    getSingleFish,
    reciveFish,
    killFish,
    updateFishWeight,
    promotion
}