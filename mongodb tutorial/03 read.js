db.inventory.find()  // To fetch all documents
db.inventory.find({})  // To fetch all documents
db.inventory.find({item:"journal"})
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
// SELECT * FROM inventory WHERE status in ("A", "D")
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
// SELECT * FROM inventory WHERE status = "A" AND qty < 30
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
// SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")
db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )
// SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")