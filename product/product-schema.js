import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    
    foodId : String,
    otherCollectionIds: [String] 
});

export default productschema;





