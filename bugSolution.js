```javascript
// Use $max operator to ensure the value does not go below zero
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{count:-1},$max:{count:0}});
//Alternatively, check before updating
let count = db.collection.findOne({"_id":ObjectId("someId")}).count;
if(count>0){
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{count:-1}});
}
```