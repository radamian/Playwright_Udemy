const { test, expect } = require('@playwright/test');
const { log } = require('console');

var userid;

test("Get users", async ({request}) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  console.log(await response.json());
  expect(response.status()).toBe(200);
 })

 test("Create user", async ({ request}) => {
  const response = await request.post('https://reqres.in/api/users', {
      data: {
          "name": "kumar",
          "job": "trainer"
      }, headers: {
          "Accept": "application/json"
      }
  });
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
 console.log(await response.json());
  var res=await response.json()
  console,log("*****Test:"+ res)
  userid=res.id // storing id in a variable to use in another test
 })

 test("Update user", async ({ request}) => {
  const response = await request.put('https://reqres.in/api/users/'+userid, {
      data: {
          "name": "kumar",
          "job": "educator"
      }, headers: {
          "Accept": "application/json"
      }
  });
  expect(response.status()).toBe(200);
  console.log(await response.json());
 })


 test("Delete user", async ({ request}) => {
  const response = await request.delete('https://reqres.in/api/users/'+userid);
  expect(response.status()).toBe(204);
  })