// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"cdc8c27e-1958-4d16-890a-a3c9fa2f6871\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cdc8c27e-1958-4d16-890a-a3c9fa2f6871"',
  'x-ms-request-id': 'f9632685-2aa4-44c2-9b61-445ce6b7f0e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31978',
  'x-ms-correlation-request-id': '11850473-c4d0-4374-b579-ba8cedb9c748',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121925Z:11850473-c4d0-4374-b579-ba8cedb9c748',
  date: 'Wed, 29 Apr 2015 12:19:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"cdc8c27e-1958-4d16-890a-a3c9fa2f6871\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cdc8c27e-1958-4d16-890a-a3c9fa2f6871"',
  'x-ms-request-id': 'f9632685-2aa4-44c2-9b61-445ce6b7f0e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31978',
  'x-ms-correlation-request-id': '11850473-c4d0-4374-b579-ba8cedb9c748',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121925Z:11850473-c4d0-4374-b579-ba8cedb9c748',
  date: 'Wed, 29 Apr 2015 12:19:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '6ad435f5-c446-4937-bc24-c92e2a0d7e46',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '59d905b1-ce3e-4a96-b71d-920dec965ab0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121932Z:59d905b1-ce3e-4a96-b71d-920dec965ab0',
  date: 'Wed, 29 Apr 2015 12:19:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '6ad435f5-c446-4937-bc24-c92e2a0d7e46',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '59d905b1-ce3e-4a96-b71d-920dec965ab0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121932Z:59d905b1-ce3e-4a96-b71d-920dec965ab0',
  date: 'Wed, 29 Apr 2015 12:19:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0acee909-0732-4987-b305-cda6dbe03da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31977',
  'x-ms-correlation-request-id': '976f1053-ed22-437f-8c34-14938dc998d5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121943Z:976f1053-ed22-437f-8c34-14938dc998d5',
  date: 'Wed, 29 Apr 2015 12:19:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/6ad435f5-c446-4937-bc24-c92e2a0d7e46?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0acee909-0732-4987-b305-cda6dbe03da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31977',
  'x-ms-correlation-request-id': '976f1053-ed22-437f-8c34-14938dc998d5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121943Z:976f1053-ed22-437f-8c34-14938dc998d5',
  date: 'Wed, 29 Apr 2015 12:19:42 GMT',
  connection: 'close' });
 return result; }]];