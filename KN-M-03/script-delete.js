// delete
db.houses.deleteOne({_id: house1id});
db.residents.deleteMany({
    $or: [
        {_id: resident1id},
        {_id: resident2id}
    ]
});  

// drop collections
db.houses.drop();
db.residents.drop();