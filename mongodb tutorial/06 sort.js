db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])


 db.inventory.find().limit(1)  // Limits the no of documents in the output 1
 db.inventory.find().limit(2)  // Limits the no of documents in the output 2

 db.inventory.find().skip(1)  // Skips first document
 db.inventory.find().skip(2)  // Skips firsrt two document

 db.inventory.find().sort({qty:1}) // Increasing order of qty
 db.inventory.find().sort({qty:-1}) // Descending order of qty

 // Achieving pegivation using MongoDB find and limit

 no = 8 
 db.blogs.find().skip((pageNo-1)*no).limit(no)
// pageno = 1 db.blogs.find().skip(0).limit(8)
// pageno = 2 db.blogs.find().skip(0).limit(8)