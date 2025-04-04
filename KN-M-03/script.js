use("HouseDB");

const house1id = new ObjectId();
const resident1id = new ObjectId();
const resident2id = new ObjectId();

// insert documents

db.houses.insertOne(
    {
        _id: house1id,
        adress: "Zürichstrasse 21, 8000 Zürich",
        owner: "Jan Meier",
        floors: [
            {
                floornumber: -1,
                rooms: [
                    {
                        name: "Garage",
                        width: 6,
                        length: 4,
                        height: 2.5
                    },
                    {
                        name: "cellar",
                        width: 5,
                        length: 5,
                        height: 2.5
                    }
                ]
            },
            {
                floornumber: 0,
                rooms: [
                    {
                        name: "Kitchen",
                        width: 4,
                        length: 3,
                        height: 3
                    },
                    {
                        name: "Living room",
                        width: 4,
                        length: 4,
                        height: 3
                    }
                ]
            },
            {
                floornumber: 1,
                rooms: [
                    {
                        name: "Bedroom",
                        width: 4.5,
                        length: 4,
                        height: 3
                    },
                    {
                        name: "Bathroom",
                        width: 3.5,
                        length: 3.5,
                        height: 3
                    }
                ]
            }
        ]
    }
);
db.residents.insertMany([
        {
            _id: resident1id,
            firstname: "Jan",
            lastname: "Meier",
            birthday: ISODate("1998-04-03T00:00:00.000Z")
        },
        {
            _id: resident2id,
            firstname: "Max",
            lastname: "Sommer",
            birthday: ISODate("1975-10-08T00:00:00.000Z")
        }
]);

// delete documents

db.houses.deleteOne({_id: house1id});
db.residents.deleteMany({_id: {$in: [resident1id, resident2id]}});

// drop collections

db.houses.drop();
db.residents.drop();