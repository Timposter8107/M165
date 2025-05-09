use("HouseDB");

const house1id = new ObjectId();
const house2id = new ObjectId();
const resident1id = new ObjectId();
const resident2id = new ObjectId();

// insert
db.houses.insertOne(
    {
        _id: house1id,
        address: "Zürichstrasse 21, 8000 Zürich",
        owner: "Jan Meier",
        owner_id: ObjectId(resident1id),
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
db.houses.insertOne(
    {
        _id: house2id,
        address: "Bernweg 4, 3006 Bern",
        owner: "Max Sommer",
        owner_id: ObjectId(resident2id),
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
            birthday: ISODate("1998-04-03T00:00:00.000Z"),
            childrenamount: 0
        },
        {
            _id: resident2id,
            firstname: "Max",
            lastname: "Sommer",
            birthday: ISODate("1975-10-08T00:00:00.000Z"),
            childrenamount: 2
        }
]);
