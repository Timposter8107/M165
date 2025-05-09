// A)
db.residents.aggregate([
    {$match: {firstname: "Jan"}},
    {$match: {lastname: "Meier"}}
]);

db.residents.aggregate([
    {
        $match: {
            birthday: {
              $gte: new ISODate("1970-01-01T00:00:00Z"),
              $lt: new ISODate("2000-01-01T00:00:00Z")
            }
          }
    },
    {
        $project: {
            _id: 0,
            lastname: 1,
            birthday: 1,
        }
    },
    {
        $sort: {birthday: -1}
    }
]);

db.residents.aggregate([
    {
        $group: {
            _id: "$lastname",
            totalChildren: {$sum: "$childrenamount"}
        }
    }
]);

//B)