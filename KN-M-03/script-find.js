// find
db.residents.find({birthday: ISODate("1998-04-03T00:00:00.000Z")});
db.houses.find({
    $or: [
        {adress: "Zürichstrasse 21, 8000 Zürich"},
        {owner: "Max Sommer"}
    ]
});
db.residents.find({
    $and: [
        {firstname: "Jan"},
        {lastname: "Meier"}
    ]
});
db.houses.find({adress: {$regex: "Bern$"}});
db.residents.find({lastname: "Sommer"}, {firstname: 1});
db.residents.find({lastname: "Meier"}, {firstname: 1, _id: 0});