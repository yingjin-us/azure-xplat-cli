// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup3032' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '6cee6937-095a-45a1-8609-94dcfb50ac1f',
  'x-ms-correlation-request-id': '6cee6937-095a-45a1-8609-94dcfb50ac1f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201713Z:6cee6937-095a-45a1-8609-94dcfb50ac1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:13 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032\",\"name\":\"xDeploymentTestGroup3032\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '5d1195a0-63b0-465e-bd34-6164c79012b8',
  'x-ms-correlation-request-id': '5d1195a0-63b0-465e-bd34-6164c79012b8',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201715Z:5d1195a0-63b0-465e-bd34-6164c79012b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478\",\"name\":\"Deploy12478\",\"properties\":{\"templateLink\":{\"uri\":\"https://raw.githubusercontent.com/vivsriaus/armtemplates/master/testNestedTemplateFail.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"storageAccountName\":{\"type\":\"String\",\"value\":\"sdkdeploymenttest9607\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-24T20:17:18.7131592Z\",\"duration\":\"PT1.0388903S\",\"correlationId\":\"bc4bc195-78b4-46c5-8dd9-90c48257469d\",\"providers\":[{\"namespace\":\"Microsoft.Resources\",\"resourceTypes\":[{\"resourceType\":\"deployments\",\"locations\":[null]}]}],\"dependencies\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478/operationStatuses/08587427562478033825?api-version=2016-02-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'bc4bc195-78b4-46c5-8dd9-90c48257469d',
  'x-ms-correlation-request-id': 'bc4bc195-78b4-46c5-8dd9-90c48257469d',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201719Z:bc4bc195-78b4-46c5-8dd9-90c48257469d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:18 GMT',
  'content-length': '732' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478\",\"name\":\"Deploy12478\",\"properties\":{\"templateLink\":{\"uri\":\"https://raw.githubusercontent.com/vivsriaus/armtemplates/master/testNestedTemplateFail.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"storageAccountName\":{\"type\":\"String\",\"value\":\"sdkdeploymenttest9607\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-24T20:17:18.7131592Z\",\"duration\":\"PT1.0388903S\",\"correlationId\":\"bc4bc195-78b4-46c5-8dd9-90c48257469d\",\"providers\":[{\"namespace\":\"Microsoft.Resources\",\"resourceTypes\":[{\"resourceType\":\"deployments\",\"locations\":[null]}]}],\"dependencies\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'b364fc23-7be6-4717-aae7-4111b7728f43',
  'x-ms-correlation-request-id': 'b364fc23-7be6-4717-aae7-4111b7728f43',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201720Z:b364fc23-7be6-4717-aae7-4111b7728f43',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:19 GMT',
  'content-length': '732' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478\",\"name\":\"Deploy12478\",\"properties\":{\"templateLink\":{\"uri\":\"https://raw.githubusercontent.com/vivsriaus/armtemplates/master/testNestedTemplateFail.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"storageAccountName\":{\"type\":\"String\",\"value\":\"sdkdeploymenttest9607\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Running\",\"timestamp\":\"2016-03-24T20:17:20.4839205Z\",\"duration\":\"PT2.8096516S\",\"correlationId\":\"bc4bc195-78b4-46c5-8dd9-90c48257469d\",\"providers\":[{\"namespace\":\"Microsoft.Resources\",\"resourceTypes\":[{\"resourceType\":\"deployments\",\"locations\":[null]}]}],\"dependencies\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '1a51b37d-9217-42fb-91ca-07f48195d2c5',
  'x-ms-correlation-request-id': '1a51b37d-9217-42fb-91ca-07f48195d2c5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201726Z:1a51b37d-9217-42fb-91ca-07f48195d2c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:26 GMT',
  'content-length': '731' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478\",\"name\":\"Deploy12478\",\"properties\":{\"templateLink\":{\"uri\":\"https://raw.githubusercontent.com/vivsriaus/armtemplates/master/testNestedTemplateFail.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"storageAccountName\":{\"type\":\"String\",\"value\":\"sdkdeploymenttest9607\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Failed\",\"timestamp\":\"2016-03-24T20:17:27.81949Z\",\"duration\":\"PT10.1452211S\",\"correlationId\":\"bc4bc195-78b4-46c5-8dd9-90c48257469d\",\"providers\":[{\"namespace\":\"Microsoft.Resources\",\"resourceTypes\":[{\"resourceType\":\"deployments\",\"locations\":[null]}]}],\"dependencies\":[],\"error\":{\"code\":\"DeploymentFailed\",\"message\":\"At least one resource deployment operation failed. Please list deployment operations for details. Please see http://aka.ms/arm-debug for usage details.\",\"details\":[{\"code\":\"Conflict\",\"message\":\"{\\r\\n  \\\"status\\\": \\\"Failed\\\",\\r\\n  \\\"error\\\": {\\r\\n    \\\"code\\\": \\\"ResourceDeploymentFailure\\\",\\r\\n    \\\"message\\\": \\\"The resource operation completed with terminal provisioning state 'Failed'.\\\",\\r\\n    \\\"details\\\": [\\r\\n      {\\r\\n        \\\"code\\\": \\\"DeploymentFailed\\\",\\r\\n        \\\"message\\\": \\\"At least one resource deployment operation failed. Please list deployment operations for details. Please see http://aka.ms/arm-debug for usage details.\\\",\\r\\n        \\\"details\\\": [\\r\\n          {\\r\\n            \\\"code\\\": \\\"Forbidden\\\",\\r\\n            \\\"message\\\": \\\"{\\\\r\\\\n  \\\\\\\"error\\\\\\\": {\\\\r\\\\n    \\\\\\\"code\\\\\\\": \\\\\\\"RequestDisallowedByPolicy\\\\\\\",\\\\r\\\\n    \\\\\\\"message\\\\\\\": \\\\\\\"The resource action 'Microsoft.Storage/storageAccounts/write' is disallowed by one or more policies. Policy identifier(s): '/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Authorization/policyDefinitions/testvivek'.\\\\\\\"\\\\r\\\\n  }\\\\r\\\\n}\\\"\\r\\n          }\\r\\n        ]\\r\\n      }\\r\\n    ]\\r\\n  }\\r\\n}\"}]}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'ff0d4c54-57a1-420e-95b3-8ff6fb81552f',
  'x-ms-correlation-request-id': 'ff0d4c54-57a1-420e-95b3-8ff6fb81552f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201733Z:ff0d4c54-57a1-420e-95b3-8ff6fb81552f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:32 GMT',
  'content-length': '1975' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/deployments/Deploy12478/operations?api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478/operations/390D3B4B783D3BA0\",\"operationId\":\"390D3B4B783D3BA0\",\"properties\":{\"provisioningOperation\":\"Create\",\"provisioningState\":\"Failed\",\"timestamp\":\"2016-03-24T20:17:25.6545307Z\",\"duration\":\"PT4.3745807S\",\"trackingId\":\"2dd2ac1a-b88a-4631-a02b-3fbeb984c650\",\"serviceRequestId\":\"e9c66ffc-bfba-494e-8074-70802cc77474\",\"statusCode\":\"Conflict\",\"statusMessage\":{\"status\":\"Failed\",\"error\":{\"code\":\"ResourceDeploymentFailure\",\"message\":\"The resource operation completed with terminal provisioning state 'Failed'.\",\"details\":[{\"code\":\"DeploymentFailed\",\"message\":\"At least one resource deployment operation failed. Please list deployment operations for details. Please see http://aka.ms/arm-debug for usage details.\",\"details\":[{\"code\":\"Forbidden\",\"message\":\"{\\r\\n  \\\"error\\\": {\\r\\n    \\\"code\\\": \\\"RequestDisallowedByPolicy\\\",\\r\\n    \\\"message\\\": \\\"The resource action 'Microsoft.Storage/storageAccounts/write' is disallowed by one or more policies. Policy identifier(s): '/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Authorization/policyDefinitions/testvivek'.\\\"\\r\\n  }\\r\\n}\"}]}]}},\"targetResource\":{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/nestedTemplate\",\"resourceType\":\"Microsoft.Resources/deployments\",\"resourceName\":\"nestedTemplate\"}}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/Deploy12478/operations/08587427562478033825\",\"operationId\":\"08587427562478033825\",\"properties\":{\"provisioningOperation\":\"EvaluateDeploymentOutput\",\"provisioningState\":\"Failed\",\"timestamp\":\"2016-03-24T20:17:27.5929328Z\",\"duration\":\"PT1.4077783S\",\"trackingId\":\"5ef0e096-b4a1-4b83-97a7-025c643ef445\",\"statusCode\":\"Conflict\",\"statusMessage\":\"Template output evaluation skipped: at least one resource deployment operation failed. Please list deployment operations for details. Please see http://aka.ms/arm-debug for usage details.\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'dda2b8d8-55fe-4ac6-8e8c-1cea4f32970c',
  'x-ms-correlation-request-id': 'dda2b8d8-55fe-4ac6-8e8c-1cea4f32970c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201739Z:dda2b8d8-55fe-4ac6-8e8c-1cea4f32970c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:39 GMT',
  'content-length': '2195' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032/deployments/nestedTemplate/operations?api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Resources/deployments/nestedTemplate/operations/CE79E557E8493E5C\",\"operationId\":\"CE79E557E8493E5C\",\"properties\":{\"provisioningOperation\":\"Create\",\"provisioningState\":\"Failed\",\"timestamp\":\"2016-03-24T20:17:24.5738372Z\",\"duration\":\"PT0.3241565S\",\"trackingId\":\"df3daf00-694e-45a6-8e6a-3bd1cc5f76d7\",\"serviceRequestId\":\"f21f5508-9860-411e-b6d3-6c567b540f37\",\"statusCode\":\"Forbidden\",\"statusMessage\":{\"error\":{\"code\":\"RequestDisallowedByPolicy\",\"message\":\"The resource action 'Microsoft.Storage/storageAccounts/write' is disallowed by one or more policies. Policy identifier(s): '/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Authorization/policyDefinitions/testvivek'.\"}},\"targetResource\":{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup3032/providers/Microsoft.Storage/storageAccounts/sdkdeploymenttest9607\",\"resourceType\":\"Microsoft.Storage/storageAccounts\",\"resourceName\":\"sdkdeploymenttest9607\"}}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '67c95ea1-0d6d-4c7b-9d35-c0efb9a8fbdf',
  'x-ms-correlation-request-id': '67c95ea1-0d6d-4c7b-9d35-c0efb9a8fbdf',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201740Z:67c95ea1-0d6d-4c7b-9d35-c0efb9a8fbdf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:39 GMT',
  'content-length': '1100' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup3032?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDMwMzItV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'e4767f42-f7c5-45a7-b30f-1a7f2c2c2b88',
  'x-ms-correlation-request-id': 'e4767f42-f7c5-45a7-b30f-1a7f2c2c2b88',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201742Z:e4767f42-f7c5-45a7-b30f-1a7f2c2c2b88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:17:42 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDMwMzItV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDMwMzItV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '4189a2ba-c097-4863-a963-c856e80ab166',
  'x-ms-correlation-request-id': '4189a2ba-c097-4863-a963-c856e80ab166',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201812Z:4189a2ba-c097-4863-a963-c856e80ab166',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:18:12 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDMwMzItV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'b66e73de-a88c-47d0-b092-a094dc6d003a',
  'x-ms-correlation-request-id': 'b66e73de-a88c-47d0-b092-a094dc6d003a',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T201843Z:b66e73de-a88c-47d0-b092-a094dc6d003a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 20:18:43 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['sdkdeploymenttest9607','xDeploymentTestGroup3032','Deploy12478'];};