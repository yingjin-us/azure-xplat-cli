// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"684246fc-37ab-4ff9-8bfc-070b148fcf03\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7b4fb0be-4abe-49ff-9b0b-fed4830706cd"',
  'x-ms-request-id': '85fd1cb4-6e0d-4fd2-b3c3-a75e6c4e0cdf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fea0fa85-3495-4b71-96a3-ff7c84578355',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151156Z:fea0fa85-3495-4b71-96a3-ff7c84578355',
  date: 'Thu, 08 Dec 2016 15:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"684246fc-37ab-4ff9-8bfc-070b148fcf03\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7b4fb0be-4abe-49ff-9b0b-fed4830706cd"',
  'x-ms-request-id': '85fd1cb4-6e0d-4fd2-b3c3-a75e6c4e0cdf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fea0fa85-3495-4b71-96a3-ff7c84578355',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151156Z:fea0fa85-3495-4b71-96a3-ff7c84578355',
  date: 'Thu, 08 Dec 2016 15:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7b4fb0be-4abe-49ff-9b0b-fed4830706cd"',
  'x-ms-request-id': '94338f6d-3325-4857-aff2-10b21595cee9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ac228ce9-104e-46ff-8a46-1b8802ab7f12',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151157Z:ac228ce9-104e-46ff-8a46-1b8802ab7f12',
  date: 'Thu, 08 Dec 2016 15:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"7b4fb0be-4abe-49ff-9b0b-fed4830706cd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7b4fb0be-4abe-49ff-9b0b-fed4830706cd"',
  'x-ms-request-id': '94338f6d-3325-4857-aff2-10b21595cee9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ac228ce9-104e-46ff-8a46-1b8802ab7f12',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151157Z:ac228ce9-104e-46ff-8a46-1b8802ab7f12',
  date: 'Thu, 08 Dec 2016 15:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '1bc95655-30ed-44be-b9c9-e1b44b6783f8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a7649f6d-327a-48fa-9b06-3670bfc61fa4',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151158Z:a7649f6d-327a-48fa-9b06-3670bfc61fa4',
  date: 'Thu, 08 Dec 2016 15:11:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '1bc95655-30ed-44be-b9c9-e1b44b6783f8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a7649f6d-327a-48fa-9b06-3670bfc61fa4',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151158Z:a7649f6d-327a-48fa-9b06-3670bfc61fa4',
  date: 'Thu, 08 Dec 2016 15:11:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df6c33f5-65a0-4feb-8a66-af5bab377870',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fff7f4e6-df9b-4780-a0e3-2108261a64e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151229Z:fff7f4e6-df9b-4780-a0e3-2108261a64e2',
  date: 'Thu, 08 Dec 2016 15:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/1bc95655-30ed-44be-b9c9-e1b44b6783f8?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df6c33f5-65a0-4feb-8a66-af5bab377870',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fff7f4e6-df9b-4780-a0e3-2108261a64e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151229Z:fff7f4e6-df9b-4780-a0e3-2108261a64e2',
  date: 'Thu, 08 Dec 2016 15:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"07c268ba-66a8-4334-845c-1ffc001955a8\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"684246fc-37ab-4ff9-8bfc-070b148fcf03\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"07c268ba-66a8-4334-845c-1ffc001955a8"',
  'x-ms-request-id': '96d2b2c6-4422-4a8c-abd3-f3ef10dc2122',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4e1f20de-ff3e-4633-be1c-68749a3fe205',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151231Z:4e1f20de-ff3e-4633-be1c-68749a3fe205',
  date: 'Thu, 08 Dec 2016 15:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"07c268ba-66a8-4334-845c-1ffc001955a8\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"684246fc-37ab-4ff9-8bfc-070b148fcf03\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"07c268ba-66a8-4334-845c-1ffc001955a8"',
  'x-ms-request-id': '96d2b2c6-4422-4a8c-abd3-f3ef10dc2122',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4e1f20de-ff3e-4633-be1c-68749a3fe205',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151231Z:4e1f20de-ff3e-4633-be1c-68749a3fe205',
  date: 'Thu, 08 Dec 2016 15:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b15978a-9068-4598-a917-ae34511998e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '50e872af-e955-487d-b226-37a04bc4e31b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151233Z:50e872af-e955-487d-b226-37a04bc4e31b',
  date: 'Thu, 08 Dec 2016 15:12:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '278',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b15978a-9068-4598-a917-ae34511998e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '50e872af-e955-487d-b226-37a04bc4e31b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161208T151233Z:50e872af-e955-487d-b226-37a04bc4e31b',
  date: 'Thu, 08 Dec 2016 15:12:32 GMT',
  connection: 'close' });
 return result; }]];