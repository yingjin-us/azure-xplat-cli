﻿//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

/*
 * This module exports user agent data that is sent in the request header.
 * The telemetry module is initialized when the CLI is initialized and it
 * already has the diagnostics we need to construct the user agent.
 * The telemetry module sets the user agent data per command and utils.js 
 * consumes this to construct the request.
 */

var _userAgentData;

exports.setCommandInfo = function (commandName, rawCommand) {
  _userAgentData.commandName = commandName;
  _userAgentData.rawCommand = rawCommand;
};

exports.setMode = function (mode) {
  _userAgentData.mode = mode;
};

exports.setUserAgentData = function (data) {
  _userAgentData = data;
};

exports.getUserAgentData = function () {
  return _userAgentData;
};
