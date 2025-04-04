// update
db.houses.updateOne({_id: house1id}, {$set: {owner: "Florian Steiner"}});
db.residents.updateMany({
    $or: [
        {firstname: "Jan"},
        {lastname: "Sommer"}
    ]
},
{
    $inc: {childrenamount: 1}
});
db.residents.replaceOne(
    {birthday: ISODate("1998-04-03T00:00:00.000Z")},
    {
        _id: resident1id,
        firstname: "Kevin",
        lastname: "Platte",
        birthday: ISODate("1994-01-09T00:00:00.000Z"),
        childrenamount: 1
    }
)