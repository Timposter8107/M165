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

// B)
db.houses.aggregate([
    {
        $lookup: {
            from: "residents",
            localField: "owner_id",
            foreignField: "_id",
            as: "owner_details"
        }
    }
]);

db.houses.aggregate([
    {
        $match: {address: "Bernweg 4, 3006 Bern"}
    },
    {
        $lookup: {
            from: "residents",
            localField: "owner_id",
            foreignField: "_id",
            as: "owner_details"
        }
    },
    {
        $project: {
            _id: 0,
            owner_id: 0
        }
    }
]);

// C)
db.houses.find(
    {},
    {"floors.floornumber": 1, "_id": 0}
);

db.houses.find(
    {"floors.floornumber": 0},
    {floors: 1, _id: 0}
);

db.houses.aggregate([
    {$unwind: "$floors"},
    {$project: {_id: 0, owner: 1, "floors.rooms.name": 1}}
]);