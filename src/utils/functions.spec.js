const {
  sortBy,
  groupBy
} = require("./functions");

describe("sortBy", () => {
  it("sorts an array of objects by name and in descending order", () => {
    const products = [{
    "id": "KSCL",
    "name": "Kitchen Scales",
    "description": "Traditional Kitchen Scales",
    "price": {
      "value": 79.99,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Cookwares",
    "weight": "1057g"
  },
  {
    "id": "DRVTHR-BOOK",
    "name": "Pass the Driving Test",
    "description": "Book - Pass your driving test - Penguin publishers",
    "price": {
      "value": 7.99,
      "currency": "GBP"
    },
    "type": "Book",
    "department": "Books and Stationery",
    "weight": "57g"
  },
  {
    "id": "RPi-0",
    "name": "Raspberry Pi Zero",
    "description": "Raspberry PI Zero Computer",
    "price": {
      "value": 4.8,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Computing",
    "weight": "30g"
  }];
    const order = "desc";
    const sort_by = "name";
    const actual = sortBy(sort_by, order, products);
    const expected = [
  {
    "id": "RPi-0",
    "name": "Raspberry Pi Zero",
    "description": "Raspberry PI Zero Computer",
    "price": {
      "value": 4.8,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Computing",
    "weight": "30g"
  },
  {
    "id": "DRVTHR-BOOK",
    "name": "Pass the Driving Test",
    "description": "Book - Pass your driving test - Penguin publishers",
    "price": {
      "value": 7.99,
      "currency": "GBP"
    },
    "type": "Book",
    "department": "Books and Stationery",
    "weight": "57g"
  },
  {
    "id": "KSCL",
    "name": "Kitchen Scales",
    "description": "Traditional Kitchen Scales",
    "price": {
      "value": 79.99,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Cookwares",
    "weight": "1057g"
  }
  ];
    expect(actual).toStrictEqual(expected);
  })
})

describe('groupBy', () => {
  it('groups an array of objects by type', () => {
    const products = [{
    "id": "KSCL",
    "name": "Kitchen Scales",
    "description": "Traditional Kitchen Scales",
    "price": {
      "value": 79.99,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Cookwares",
    "weight": "1057g"
  },
  {
    "id": "DRVTHR-BOOK",
    "name": "Pass the Driving Test",
    "description": "Book - Pass your driving test - Penguin publishers",
    "price": {
      "value": 7.99,
      "currency": "GBP"
    },
    "type": "Book",
    "department": "Books and Stationery",
    "weight": "57g"
  },
  {
    "id": "RPi-0",
    "name": "Raspberry Pi Zero",
    "description": "Raspberry PI Zero Computer",
    "price": {
      "value": 4.8,
      "currency": "GBP"
    },
    "type": "Electrical",
    "department": "Computing",
    "weight": "30g"
  }];
  const actual = groupBy("type", products);
  const expected = {
        Electrical: [
          {
            "id": "KSCL",
            "name": "Kitchen Scales",
            "description": "Traditional Kitchen Scales",
            "price": {
              "value": 79.99,
              "currency": "GBP"
            },
            "type": "Electrical",
            "department": "Cookwares",
            "weight": "1057g"
          },
          {
            "id": "RPi-0",
            "name": "Raspberry Pi Zero",
            "description": "Raspberry PI Zero Computer",
            "price": {
              "value": 4.8,
              "currency": "GBP"
            },
            "type": "Electrical",
            "department": "Computing",
            "weight": "30g"
          }
        ],
        Book: [
          {
            "id": "DRVTHR-BOOK",
            "name": "Pass the Driving Test",
            "description": "Book - Pass your driving test - Penguin publishers",
            "price": {
              "value": 7.99,
              "currency": "GBP"
            },
            "type": "Book",
            "department": "Books and Stationery",
            "weight": "57g"
          }
        ]
      };
  expect(actual).toStrictEqual(expected);
  });
});