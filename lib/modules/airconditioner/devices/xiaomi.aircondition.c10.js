const AirConditionerDevice = require('../AirConditionerDevice.js')
const Constants = require('../../../constants/Constants.js')
const PropFormat = require('../../../constants/PropFormat.js')
const PropUnit = require('../../../constants/PropUnit.js')
const PropAccess = require('../../../constants/PropAccess.js')

class XiaomiAirconditionC10 extends AirConditionerDevice {
  constructor (miotDevice, name, logger) {
    super(miotDevice, name, logger)
  }

  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName () {
    return 'Mi Smart Ultra Electricity Saving Vertical Air Conditioner'
  }

  getMiotSpecUrl () {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:air-conditioner:0000A004:xiaomi-c10:1'
  }

  /*----------========== CONFIG ==========----------*/

  requiresMiCloud () {
    return false
  }

  /*----------========== METADATA ==========----------*/

  initDeviceServices () {
    this.createServiceByString('{"siid":1,"type":"urn:miot-spec-v2:service:device-information:00007801:xiaomi-c10:1","description":"Device Information"}')
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:air-conditioner:0000780F:xiaomi-c10:1","description":"Air Conditioner"}')
    this.createServiceByString('{"siid":3,"type":"urn:miot-spec-v2:service:fan-control:00007809:xiaomi-c10:1","description":"Fan Control"}')
    this.createServiceByString('{"siid":4,"type":"urn:miot-spec-v2:service:environment:0000780A:xiaomi-c10:1","description":"Environment"}')
    this.createServiceByString('{"siid":5,"type":"urn:miot-spec-v2:service:alarm:00007804:xiaomi-c10:1","description":"Alarm"}')
    this.createServiceByString('{"siid":6,"type":"urn:miot-spec-v2:service:indicator-light:00007803:xiaomi-c10:1","description":"Indicator Light"}')
    this.createServiceByString('{"siid":7,"type":"urn:miot-spec-v2:service:countdown:0000782D:xiaomi-c10:1","description":"Countdown"')
    this.createServiceByString('{"siid":8,"type":"urn:xiaomi-spec:service:electricity:00007801:xiaomi-c10:1","description":""}')
    this.createServiceByString('{"siid":9,"type":"urn:xiaomi-spec:service:maintenance:00007802:xiaomi-c10:1","description":""}')
    this.createServiceByString('{"siid":10,"type":"urn:xiaomi-spec:service:enhance:00007803:xiaomi-c10:1","description":""}')
    this.createServiceByString('{"siid":11,"type":"urn:xiaomi-spec:service:iot-linkage:00007801:xiaomi-c10:1","description":"iot-linkage"}')
    this.createServiceByString('{"siid":12,"type":"urn:xiaomi-spec:service:machine-state:00007802:xiaomi-c10:1","description":"machine-state"}')
    this.createServiceByString('{"siid":13,"type":"urn:xiaomi-spec:service:flag-bit:00007803:xiaomi-c10:1","description":"flag-bit"}')
  }

  initDeviceProperties () {
    this.addPropertyByString('air-conditioner:on', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:xiaomi-c10:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}')
    this.addPropertyByString('air-conditioner:mode', '{"siid": 2,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:miot-spec-v2:property:mode:00000008:xiaomi-c10:1",\n' +
      '                    "description": "Mode",\n' +
      '                    "format": "uint8",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none",\n' +
      '                    "value-list": [\n' +
      '                        {\n' +
      '                            "value": 2,\n' +
      '                            "description": "Cool"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 3,\n' +
      '                            "description": "Dry"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 4,\n' +
      '                            "description": "Fan"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 5,\n' +
      '                            "description": "Heat"\n' +
      '                        }\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:target-temperature', '{"siid": 2,\n' +
      '                    "piid": 4,\n' +
      '                    "type": "urn:miot-spec-v2:property:target-temperature:00000021:xiaomi-c10:1",\n' +
      '                    "description": "Target Temperature",\n' +
      '                    "format": "float",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "celsius",\n' +
      '                    "value-range": [\n' +
      '                        16,\n' +
      '                        31,\n' +
      '                        0.5\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:eco', '{"siid": 2,\n' +
      '                    "piid": 7,\n' +
      '                    "type": "urn:miot-spec-v2:property:eco:00000024:xiaomi-c10:1",\n' +
      '                    "description": "ECO",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:heater', '{"siid": 2,\n' +
      '                    "piid": 9,\n' +
      '                    "type": "urn:miot-spec-v2:property:heater:00000026:xiaomi-c10:1",\n' +
      '                    "description": "Heater",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:dryer', '{"siid": 2,\n' +
      '                    "piid": 10,\n' +
      '                    "type": "urn:miot-spec-v2:property:dryer:00000027:xiaomi-c10:1",\n' +
      '                    "description": "Dryer",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:sleep-mode', '{"siid": 2,\n' +
      '                    "piid": 11,\n' +
      '                    "type": "urn:miot-spec-v2:property:sleep-mode:00000028:xiaomi-c10:1",\n' +
      '                    "description": "Sleep Mode",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:soft-wind', '{"siid": 2,\n' +
      '                    "piid": 12,\n' +
      '                    "type": "urn:miot-spec-v2:property:soft-wind:000000CF:xiaomi-c10:1",\n' +
      '                    "description": "Soft Wind",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:target-humidity', '{"siid": 2,\n' +
      '                    "piid": 14,\n' +
      '                    "type": "urn:miot-spec-v2:property:target-humidity:00000022:xiaomi-c10:1",\n' +
      '                    "description": "Target Humidity",\n' +
      '                    "format": "uint8",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "percentage",\n' +
      '                    "value-range": [\n' +
      '                        0,\n' +
      '                        100,\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('air-conditioner:un-straight-blowing', '{"siid": 2,\n' +
      '                    "piid": 15,\n' +
      '                    "type": "urn:miot-spec-v2:property:un-straight-blowing:00000100:xiaomi-c10:1",\n' +
      '                    "description": "Unstraight Blowing",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('fan-control:fan-level', '{"siid": 3,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:miot-spec-v2:property:fan-level:00000016:xiaomi-c10:1",\n' +
      '                    "description": "Fan Level",\n' +
      '                    "format": "uint8",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none",\n' +
      '                    "value-list": [\n' +
      '                        {\n' +
      '                            "value": 0,\n' +
      '                            "description": "Auto"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 1,\n' +
      '                            "description": "Level1"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 2,\n' +
      '                            "description": "Level2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 3,\n' +
      '                            "description": "Level3"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 4,\n' +
      '                            "description": "Level4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 5,\n' +
      '                            "description": "Level5"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 6,\n' +
      '                            "description": "Level6"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 7,\n' +
      '                            "description": "Level7"\n' +
      '                        }\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('fan-control:horizontal-swing', '{"siid": 3,\n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:miot-spec-v2:property:horizontal-swing:00000017:xiaomi-c10:1",\n' +
      '                    "description": "Horizontal Swing",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('fan-control:vertical-swing', '{"siid": 3,\n' +
      '                    "piid": 4,\n' +
      '                    "type": "urn:miot-spec-v2:property:vertical-swing:00000018:xiaomi-c10:1",\n' +
      '                    "description": "Vertical Swing",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('environment:temperature', '{"siid": 4, \n' +
      '                    "piid": 7,\n' +
      '                    "type": "urn:miot-spec-v2:property:temperature:00000020:xiaomi-c10:1",\n' +
      '                    "description": "Temperature",\n' +
      '                    "format": "float",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "celsius",\n' +
      '                    "value-range": [\n' +
      '                        -30,\n' +
      '                        100,\n' +
      '                        0.1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('environment:relative-humidity', '{"siid": 4,\n' +
      '                    "piid": 9,\n' +
      '                    "type": "urn:miot-spec-v2:property:relative-humidity:0000000C:xiaomi-c10:1",\n' +
      '                    "description": "Relative Humidity",\n' +
      '                    "format": "uint8",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "percentage",\n' +
      '                    "value-range": [\n' +
      '                        0,\n' +
      '                        100,\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('alarm:alarm', '{"siid": 5,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:miot-spec-v2:property:alarm:00000012:xiaomi-c10:1",\n' +
      '                    "description": "Alarm",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('indicator-light:on', '{"siid": 6,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:miot-spec-v2:property:on:00000006:xiaomi-c10:1",\n' +
      '                    "description": "Switch Status",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:clean', '{"siid": 9,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:clean:00000001:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:examine', '{"siid": 9,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:xiaomi-spec:property:examine:00000002:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:error', '{"siid": 9,\n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:property:error:00000003:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:running-duration', '{"siid": 9,\n' +
      '                    "piid": 5,\n' +
      '                    "type": "urn:xiaomi-spec:property:running-duration:00000005:xiaomi-c10:1",\n' +
      '                    "description": "累计运行时长",\n' +
      '                    "format": "float",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "value-range": [\n' +
      '                        0,\n' +
      '                        876000,\n' +
      '                        0.1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('enhance:fan-percent', '{"siid": 10,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:fan-percent:00000001:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "format": "uint8",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ],\n' +
      '                    "unit": "none",\n' +
      '                    "value-range": [\n' +
      '                        1,\n' +
      '                        101,\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('enhance:timer', '{"siid": 10,\n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:property:timer:00000003:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('enhance:humidity-range', '{"siid": 10,\n' +
      '                    "piid": 6,\n' +
      '                    "type": "urn:xiaomi-spec:property:humidity-range:00000003:xiaomi-c10:1",\n' +
      '                    "description": "humidity-range",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none"\n' +
      '                }')
    this.addPropertyByString('iot-linkage:iot-temp', '{"siid": 11,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:iot-temp:00000001:xiaomi-c10:1",\n' +
      '                    "description": "iot-temp",\n' +
      '                    "format": "float",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "celsius",\n' +
      '                    "value-range": [\n' +
      '                        -50,\n' +
      '                        100,\n' +
      '                        0.1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('iot-linkage:temp-ctrl', '{"siid": 11,\n' +
      '                    "piid": 5,\n' +
      '                    "type": "urn:xiaomi-spec:property:temp-ctrl:00000005:xiaomi-c10:1",\n' +
      '                    "description": "temp-ctrl",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ],\n' +
      '                    "unit": "none"\n' +
      '                }')
    this.addPropertyByString('iot-linkage:smart-sleep-ctrl', '{"siid": 11,\n' +
      '                    "piid": 6,\n' +
      '                    "type": "urn:xiaomi-spec:property:smart-sleep-ctrl:00000002:xiaomi-c10:1",\n' +
      '                    "description": "smart-sleep-ctrl",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ],\n' +
      '                    "unit": "none"\n' +
      '                }')
    this.addPropertyByString('machine-state:indoor-pipe-temp', '{"siid": 12,\n' +
      '"piid": 1,\n' +
      '"type": "urn:xiaomi-spec:property:indoor-pipe-temp:00000001:xiaomi-c10:1",\n' +
      '"description": "",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "celsius",\n' +
      '"value-range": [\n' +
      '-100,\n' +
      '100,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:indoor-fan-speed', '{"siid": 12,\n' +
      '"piid": 3,\n' +
      '"type": "urn:xiaomi-spec:property:indoor-fan-speed:00000003:xiaomi-c10:1",\n' +
      '"description": "indoor-fan-speed",\n' +
      '"format": "uint16",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '0,\n' +
      '2000,\n' +
      '1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:real-heater-switch', '{"siid": 12,\n' +
      '"piid": 4,\n' +
      '"type": "urn:xiaomi-spec:property:real-heater-switch:00000002:xiaomi-c10:1",\n' +
      '"description": "real-heater-switch",\n' +
      '"format": "bool",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none"\n' +
      '}')
    this.addPropertyByString('machine-state:realindoor-fan-lever', '{"siid": 12,\n' +
      '"piid": 5,\n' +
      '"type": "urn:xiaomi-spec:property:realindoor-fan-lever:00000004:xiaomi-c10:1",\n' +
      '"description": "realindoor-fan-lever",\n' +
      '"format": "uint8",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-list": [\n' +
      '{\n' +
      '"value": 0,\n' +
      '"description": "Level0"\n' +
      '},' +
      '{\n' +
      '"value": 1,\n' +
      '"description": "Level1"\n' +
      '},' +
      '{\n' +
      '"value": 2,\n' +
      '"description": "Level2"\n' +
      '},' +
      '{\n' +
      '"value": 3,\n' +
      '"description": "Level3"\n' +
      '},' +
      '{\n' +
      '"value": 4,\n' +
      '"description": "Level4"\n' +
      '},' +
      '{\n' +
      '"value": 5,\n' +
      '"description": "Level5"\n' +
      '},' +
      '{\n' +
      '"value": 6,\n' +
      '"description": "Level6"\n' +
      '},' +
      '{\n' +
      '"value": 7,\n' +
      '"description": "Level7"\n' +
      '},' +
      '{\n' +
      '"value": 8,\n' +
      '"description": "Level8"\n' +
      '},' +
      '{\n' +
      '"value": 9,\n' +
      '"description": "Level9"\n' +
      '}\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor-temp', '{"siid": 12,\n' +
      '"piid": 7,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor-temp:00000006:xiaomi-c10:1",\n' +
      '"description": "outdoor-temp",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "celsius",\n' +
      '"value-range": [\n' +
      '-100,\n' +
      '100,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor-pipe-temp', '{"siid": 12,\n' +
      '"piid": 8,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor-pipe-temp:00000005:xiaomi-c10:1",\n' +
      '"description": "outdoor-pipe-temp",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '-100,\n' +
      '100,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor-exhaust-temp', '{"siid": 12,\n' +
      '"piid": 9,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor-exhaust-temp:00000007:xiaomi-c10:1",\n' +
      '"description": "outdoor-exhaust-temp",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "celsius",\n' +
      '"value-range": [\n' +
      '-100,\n' +
      '200,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor-fan-lever', '{"siid": 12,\n' +
      '"piid": 10,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor-fan-lever:00000008:xiaomi-c10:1",\n' +
      '"description": "",\n' +
      '"format": "uint8",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-list": [\n' +
      '{\n' +
      '"value": 0,\n' +
      '"description": "Level0"\n' +
      '},' +
      '{\n' +
      '"value": 1,\n' +
      '"description": "Level1"\n' +
      '},' +
      '{\n' +
      '"value": 2,\n' +
      '"description": "Level2"\n' +
      '},' +
      '{\n' +
      '"value": 3,\n' +
      '"description": "Level3"\n' +
      '},' +
      '{\n' +
      '"value": 4,\n' +
      '"description": "Level4"\n' +
      '},' +
      '{\n' +
      '"value": 5,\n' +
      '"description": "Level5"\n' +
      '},' +
      '{\n' +
      '"value": 6,\n' +
      '"description": "Level6"\n' +
      '},' +
      '{\n' +
      '"value": 7,\n' +
      '"description": "Level7"\n' +
      '},' +
      '{\n' +
      '"value": 8,\n' +
      '"description": "Level8"\n' +
      '},' +
      '{\n' +
      '"value": 9,\n' +
      '"description": "Level9"\n' +
      '}\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:compressor-frequency', '{"siid": 12,\n' +
      '"piid": 11,\n' +
      '"type": "urn:xiaomi-spec:property:compressor-frequency:00000009:xiaomi-c10:1",\n' +
      '"description": "",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '0,\n' +
      '200,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:fourway-valve-switch', '{"siid": 12,\n' +
      '"piid": 12,\n' +
      '"type": "urn:xiaomi-spec:property:fourway-valve-switch:0000000a:xiaomi-c10:1",\n' +
      '"description": "fourway-valve-switch",\n' +
      '"format": "bool",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none"\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor--current', '{"siid": 12,\n' +
      '"piid": 13,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor--current:0000000b:xiaomi-c10:1",\n' +
      '"description": "outdoor--current",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '0,\n' +
      '100,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:outdoor-m-voltage', '{"siid": 12,\n' +
      '"piid": 14,\n' +
      '"type": "urn:xiaomi-spec:property:outdoor-m-voltage:0000000c:xiaomi-c10:1",\n' +
      '"description": "outdoor-m-voltage",\n' +
      '"format": "float",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '0,\n' +
      '500,\n' +
      '0.1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:expansion-valve', '{"siid": 12,\n' +
      '"piid": 15,\n' +
      '"type": "urn:xiaomi-spec:property:expansion-valve:0000000d:xiaomi-c10:1",\n' +
      '"description": "",\n' +
      '"format": "uint16",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify"\n' +
      '],\n' +
      '"unit": "none",\n' +
      '"value-range": [\n' +
      '0,\n' +
      '1000,\n' +
      '1\n' +
      ']\n' +
      '}')
    this.addPropertyByString('machine-state:longitude-latitude', '{"siid": 12,\n' +
      '"piid": 16,\n' +
      '"type": "urn:xiaomi-spec:property:longitude-latitude:0000000e:xiaomi-c10:1",\n' +
      '"description": "longitude-latitude",\n' +
      '"format": "string",\n' +
      '"access": [\n' +
      '"read",\n' +
      '"notify",\n' +
      '"write"\n' +
      '],\n' +
      '"unit": "none"\n' +
      '}')
    this.addPropertyByString('flag-bit:fault-value', '{"siid": 13,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:fault-value:00000001:xiaomi-c10:1",\n' +
      '                    "description": "fault-value",\n' +
      '                    "format": "int16",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none",\n' +
      '                    "value-list": [\n' +
      '                        {\n' +
      '                            "value": 0,\n' +
      '                            "description": "No Failure"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 4,\n' +
      '                            "description": "F2.4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 5,\n' +
      '                            "description": "F3.2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 6,\n' +
      '                            "description": "P1"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 7,\n' +
      '                            "description": "P2.1"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 8,\n' +
      '                            "description": "P2.2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 9,\n' +
      '                            "description": "P2.3"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 10,\n' +
      '                            "description": "P2.4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 11,\n' +
      '                            "description": "P2.5"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 12,\n' +
      '                            "description": "P4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 13,\n' +
      '                            "description": "P5"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 14,\n' +
      '                            "description": "P6"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 15,\n' +
      '                            "description": "P8"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 16,\n' +
      '                            "description": "PA"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 17,\n' +
      '                            "description": "PC"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 18,\n' +
      '                            "description": "U2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 19,\n' +
      '                            "description": "U3"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 20,\n' +
      '                            "description": "U4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 21,\n' +
      '                            "description": "U5"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 22,\n' +
      '                            "description": "U6.1"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 23,\n' +
      '                            "description": "U6.2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 24,\n' +
      '                            "description": "U8"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 25,\n' +
      '                            "description": "U0"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 26,\n' +
      '                            "description": "C1"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 27,\n' +
      '                            "description": "C2"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 28,\n' +
      '                            "description": "C3"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 29,\n' +
      '                            "description": "C4"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": 30,\n' +
      '                            "description": "C5"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -4,\n' +
      '                            "description": "F2.4  CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -5,\n' +
      '                            "description": "F3.2 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -6,\n' +
      '                            "description": "P1 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -7,\n' +
      '                            "description": "P2.1 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -8,\n' +
      '                            "description": "P2.2  CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -9,\n' +
      '                            "description": "P2.3 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -10,\n' +
      '                            "description": "P2.4 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -11,\n' +
      '                            "description": "P2.5 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -12,\n' +
      '                            "description": "P4 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -13,\n' +
      '                            "description": "P5 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -14,\n' +
      '                            "description": "P6 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -15,\n' +
      '                            "description": "P8 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -16,\n' +
      '                            "description": "PA CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -17,\n' +
      '                            "description": "PC CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -18,\n' +
      '                            "description": "U2 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -19,\n' +
      '                            "description": "U3 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -20,\n' +
      '                            "description": "U4  CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -21,\n' +
      '                            "description": "U5 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -22,\n' +
      '                            "description": "U6.1 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -23,\n' +
      '                            "description": "U6.2  CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -24,\n' +
      '                            "description": "U8 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -25,\n' +
      '                            "description": "U0 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -26,\n' +
      '                            "description": "C1 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -27,\n' +
      '                            "description": "C2 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -28,\n' +
      '                            "description": "C3 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -29,\n' +
      '                            "description": "C4 CLEAR"\n' +
      '                        },\n' +
      '                        {\n' +
      '                            "value": -30,\n' +
      '                            "description": "C5 CLEAR"\n' +
      '                        }\n' +
      '                    ]\n' +
      '                }')
  }

  initDeviceActions () {
  }

  initDeviceEvents () {
    this.addEventByString('maintenance:filtertest', '{"siid": 9,\n' +
      '                    "eiid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:event:filtertest:00005001:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": []\n' +
      '                }')
    this.addEventByString('maintenance:error', '{"siid": 9,\n' +
      '                    "eiid": 2,\n' +
      '                    "type": "urn:xiaomi-spec:event:error:00005002:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": [\n' +
      '                        3\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:examine-result', '{"siid": 9,\n' +
      '                    "eiid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:event:examine-result:00005003:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": [\n' +
      '                        2\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:clean-result', '{"siid": 9,\n' +
      '                    "eiid": 4,\n' +
      '                    "type": "urn:xiaomi-spec:event:clean-result:00005004:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": [\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:button-pressed', '{"siid": 9,\n' +
      '                    "eiid": 5,\n' +
      '                    "type": "urn:xiaomi-spec:event:button-pressed:00005005:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": []\n' +
      '                }')
    this.addEventByString('maintenance:button-released', '{"siid": 9,\n' +
      '                    "eiid": 6,\n' +
      '                    "type": "urn:xiaomi-spec:event:button-released:00005006:xiaomi-c10:1",\n' +
      '                    "description": "",\n' +
      '                    "arguments": []\n' +
      '                }')
  }

  /*----------========== VALUES OVERRIDES ==========----------*/

  autoModeValue () {
    return null
  }

  heatModeValue () {
    return 5
  }

  coolModeValue () {
    return 2
  }

  dryModeValue () {
    return 3
  }

  fanModeValue () {
    return 4
  }

  /*----------========== PROPERTY OVERRIDES ==========----------*/

  /*----------========== ACTION OVERRIDES ==========----------*/

  /*----------========== OVERRIDES ==========----------*/
  propertiesToMonitor () {
    return ['air-conditioner:on', 'air-conditioner:mode', 'air-conditioner:target-temperature', 'air-conditioner:eco', 'air-conditioner:heater', 'air-conditioner:dryer', 'air-conditioner:sleep-mode', 'air-conditioner:soft-wind', 'air-conditioner:target-humidity', 'air-conditioner:un-straight-blowing', 'fan-control:fan-level', 'fan-control:horizontal-swing', 'fan-control:vertical-swing', 'environment:temperature', 'environment:relative-humidity', 'alarm:alarm', 'indicator-light:on', 'maintenance:clean', 'maintenance:examine', 'maintenance:error', 'maintenance:running-duration', 'enhance:fan-percent', 'enhance:timer', 'enhance:humidity-range', 'iot-linkage:iot-temp', 'iot-linkage:temp-ctrl', 'iot-linkage:smart-sleep-ctrl', 'machine-state:indoor-pipe-temp', 'machine-state:indoor-fan-speed', 'machine-state:real-heater-switch', 'machine-state:realindoor-fan-lever', 'machine-state:outdoor-temp', 'machine-state:outdoor-pipe-temp', 'machine-state:outdoor-exhaust-temp', 'machine-state:outdoor-fan-lever', 'machine-state:compressor-frequency', 'machine-state:fourway-valve-switch', 'machine-state:outdoor--current', 'machine-state:outdoor-m-voltage', 'machine-state:expansion-valve', 'machine-state:longitude-latitude', 'flag-bit:fault-value'
    ]
  }

  isThermostat () {
    return true
  }

}

module.exports = XiaomiAirconditionC10
