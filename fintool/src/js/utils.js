

module.exports = {
  /**
   * @param {Array} data - Array of Objects describes each income/outgo. Every object should contain
   * date (type: String, e.g.: '25.05.2018') and value (type: Number, e.g.: 1520.36) fields.
   * @param {String} groupBy - one of json object's fields name (e.g date or category)
   */
  transformData: function(data, groupBy) {
    var preparedData = new Map();
    data.forEach(note => {
      if (preparedData.has(note[groupBy])) {
        preparedData.set(note[groupBy], note.value + preparedData.get(note[groupBy]));
      } else {
        preparedData.set(note[groupBy], note.value);
      }
    });
    return preparedData;
  },

  getDataJson: function() {
    return allNotes;
  },

  mapToArrayOfObjects: function(mapInstance) {
    var arr = [];
    mapInstance.forEach((v, k) => {
      arr.push({
        key: k,
        value: v
      })
    });
    return arr;
  }


};



var allNotes = [{
    "id": "96145928-c9e9-4816-b97b-366e31ba7ed1",
    "date": "09.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "food",
    "description": "Burger king",
    "value": 200
  },
  {
    "id": "b4e366ca-e0c4-4b3c-b099-8d15a2ba8185",
    "date": "10.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "sport",
    "description": "Бритва",
    "value": 1122.12
  },
  {
    "id": "f32f8898-5dbb-434e-8794-927d594b042d",
    "date": "11.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "enterteiment",
    "description": "Бритва",
    "value": 592.12
  },
  {
    "id": "71744d2d-6416-4e5c-982e-9e1e8119bd12",
    "date": "12.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "food",
    "description": "Бритва",
    "value": 125.12
  },
  {
    "id": "7316fc1e-3b12-4511-9940-4cb30749772c",
    "date": "13.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "food",
    "description": "Бритва",
    "value": 587.32
  },
  {
    "id": "7324eca8-611a-4f55-964d-69d7f6f39442",
    "date": "14.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "food",
    "description": "Бритва",
    "value": 885.36
  },
  {
    "id": "58194e9d-e8a0-405b-a360-58325bec5ee1",
    "date": "15.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "enterteiment",
    "description": "Бритва",
    "value": 687.12
  },
  {
    "id": "dd956eec-feb6-49b1-b6af-379cef516787",
    "date": "09.05.2018",
    "createdBy": "Andrey Mishunin",
    "category": "food",
    "description": "Бритва",
    "value": 1122.12
  }
]
