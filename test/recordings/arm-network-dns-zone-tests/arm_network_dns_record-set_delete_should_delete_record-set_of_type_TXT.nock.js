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
    registeredProviders: [],
    _eventsCount: '1',
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
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '86f4b826-0d5f-4511-831d-dbcdbc21cf75',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '02f93171-005c-4603-9aba-299a19f3ccd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121605Z:02f93171-005c-4603-9aba-299a19f3ccd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '86f4b826-0d5f-4511-831d-dbcdbc21cf75',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '02f93171-005c-4603-9aba-299a19f3ccd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121605Z:02f93171-005c-4603-9aba-299a19f3ccd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/TXT/set-txt' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'x-ms-correlation-request-id': 'ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121606Z:ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:06 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/TXT/set-txt' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'x-ms-correlation-request-id': 'ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121606Z:ed5d1ebd-461d-498b-bab3-c72ba1a7f620',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:06 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; }]];