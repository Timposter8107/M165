use("HouseDB");

db.houses.insertOne(
    {
        _id: ObjectId(),
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
db.houses.insertOne(
    {
        _id: ObjectId(),
        firstname: "Jan",
        lastname: "Meier",
        birthday: {
            "$date": "1998-04-03T00:00:00.000Z"
        }
    }
)