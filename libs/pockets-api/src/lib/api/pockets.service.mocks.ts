import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /serviceName/pockets URL pattern
*/
export const PocketsHttpServicePocketsGetMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/pockets",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: [ {
  "id" : "1a",
  "name" : "Travel",
  "funds" : {
    "currency" : "USD",
    "amount" : 47.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1500
  },
  "goalDate" : "2022-12-20T00:00:00+0000"
}, {
  "id" : "2b",
  "name" : "Food",
  "funds" : {
    "currency" : "USD",
    "amount" : 64.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1000
  },
  "goalDate" : "2022-10-20T00:00:00+0000"
}, {
  "id" : "3c",
  "name" : "Supplies",
  "funds" : {
    "currency" : "USD",
    "amount" : 100
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 500
  },
  "goalDate" : "2022-09-20T00:00:00+0000"
} ]
                },
    ]
}]);
/**
* Mocks provider for /serviceName/pockets/{id} URL pattern
*/
export const PocketsHttpServicePocketsIdGetMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/pockets/{id}",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: [ {
  "id" : "1a",
  "name" : "Travel",
  "funds" : {
    "currency" : "USD",
    "amount" : 47.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1500
  },
  "goalDate" : "2022-12-20T00:00:00+0000",
  "transactions" : [ {
    "id" : "1aa",
    "amount" : {
      "currency" : "USD",
      "amount" : 7.5
    },
    "account" : "Saving",
    "incoming" : true,
    "date" : "2022-12-10T00:00:00+0000"
  }, {
    "id" : "1bb",
    "amount" : {
      "currency" : "USD",
      "amount" : 25
    },
    "account" : "Current",
    "incoming" : true,
    "date" : "2022-11-10T00:00:00+0000"
  }, {
    "id" : "1cc",
    "amount" : {
      "currency" : "USD",
      "amount" : 25
    },
    "account" : "Shared",
    "incoming" : true,
    "date" : "2022-12-08T00:00:00+0000"
  } ]
} ]
                },
    ]
}]);

export const PocketsHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/serviceName/pockets",
        method: "GET",
        responses: [

            {
                status: 200,
                body: [ {
  "id" : "1a",
  "name" : "Travel",
  "funds" : {
    "currency" : "USD",
    "amount" : 47.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1500
  },
  "goalDate" : "2022-12-20T00:00:00+0000"
}, {
  "id" : "2b",
  "name" : "Food",
  "funds" : {
    "currency" : "USD",
    "amount" : 64.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1000
  },
  "goalDate" : "2022-10-20T00:00:00+0000"
}, {
  "id" : "3c",
  "name" : "Supplies",
  "funds" : {
    "currency" : "USD",
    "amount" : 100
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 500
  },
  "goalDate" : "2022-09-20T00:00:00+0000"
} ]
            },
    ]
},
    {
        urlPattern: "/serviceName/pockets/{id}",
        method: "GET",
        responses: [

            {
                status: 200,
                body: [ {
  "id" : "1a",
  "name" : "Travel",
  "funds" : {
    "currency" : "USD",
    "amount" : 47.5
  },
  "goal" : {
    "currency" : "USD",
    "amount" : 1500
  },
  "goalDate" : "2022-12-20T00:00:00+0000",
  "transactions" : [ {
    "id" : "1aa",
    "amount" : {
      "currency" : "USD",
      "amount" : 7.5
    },
    "account" : "Saving",
    "incoming" : true,
    "date" : "2022-12-10T00:00:00+0000"
  }, {
    "id" : "1bb",
    "amount" : {
      "currency" : "USD",
      "amount" : 25
    },
    "account" : "Current",
    "incoming" : true,
    "date" : "2022-11-10T00:00:00+0000"
  }, {
    "id" : "1cc",
    "amount" : {
      "currency" : "USD",
      "amount" : 25
    },
    "account" : "Shared",
    "incoming" : true,
    "date" : "2022-12-08T00:00:00+0000"
  } ]
} ]
            },
    ]
},
]
);


