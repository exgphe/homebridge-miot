const AirConditionerDevice = require('../AirConditionerDevice.js')
const Constants = require('../../../constants/Constants.js')
const PropFormat = require('../../../constants/PropFormat.js')
const PropUnit = require('../../../constants/PropUnit.js')
const PropAccess = require('../../../constants/PropAccess.js')

class XiaomiAirconditionMt3 extends AirConditionerDevice {
  constructor (miotDevice, name, logger) {
    super(miotDevice, name, logger)
  }

  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName () {
    return 'Mi Smart Gentle Breeze Air Conditioner'
  }

  getMiotSpecUrl () {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:air-conditioner:0000A004:xiaomi-mt3:1'
  }

  /*----------========== CONFIG ==========----------*/

  requiresMiCloud () {
    return false
  }

  /*----------========== METADATA ==========----------*/

  initDeviceServices () {
    this.createServiceByString('{"siid":1,"type":"urn:miot-spec-v2:service:device-information:00007801:xiaomi-mt3:1","description":"Device Information"}')
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:air-conditioner:0000780F:xiaomi-mt3:1","description":"Air Conditioner"}')
    this.createServiceByString('{"siid":3,"type":"urn:miot-spec-v2:service:fan-control:00007809:xiaomi-mt3:1","description":"Fan Control"}')
    this.createServiceByString('{"siid":4,"type":"urn:miot-spec-v2:service:environment:0000780A:xiaomi-mt3:1","description":"Environment"}')
    this.createServiceByString('{"siid":5,"type":"urn:miot-spec-v2:service:alarm:00007804:xiaomi-mt3:1","description":"Alarm"}')
    this.createServiceByString('{"siid":6,"type":"urn:miot-spec-v2:service:indicator-light:00007803:xiaomi-mt3:1","description":"Indicator Light"}')
    this.createServiceByString('{"siid":8,"type":"urn:xiaomi-spec:service:electricity:00007801:xiaomi-mt3:1","description":"电量管理"}')
    this.createServiceByString('{"siid":9,"type":"urn:xiaomi-spec:service:maintenance:00007802:xiaomi-mt3:1","description":"维护管理"}')
    this.createServiceByString('{"siid":10,"type":"urn:xiaomi-spec:service:enhance:00007803:xiaomi-mt3:1","description":"增强"}')
  }

  initDeviceProperties () {
    this.addPropertyByString('air-conditioner:on', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:xiaomi-mt3:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}')
    this.addPropertyByString('air-conditioner:mode', '{"siid": 2,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:miot-spec-v2:property:mode:00000008:xiaomi-mt3:1",\n' +
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
    this.addPropertyByString('air-conditioner:fault', '{"siid": 2,\n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:miot-spec-v2:property:fault:00000009:xiaomi-mt3:1",\n' +
      '                    "description": "Device Fault",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none"\n' +
      '                }')
    this.addPropertyByString('air-conditioner:target-temperature', '{"siid": 2,\n' +
      '                    "piid": 4,\n' +
      '                    "type": "urn:miot-spec-v2:property:target-temperature:00000021:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:eco:00000024:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:heater:00000026:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:dryer:00000027:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:sleep-mode:00000028:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:soft-wind:000000CF:xiaomi-mt3:1",\n' +
      '                    "description": "Soft Wind",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('fan-control:fan-level', '{"siid": 3,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:miot-spec-v2:property:fan-level:00000016:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:horizontal-swing:00000017:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:vertical-swing:00000018:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:temperature:00000020:xiaomi-mt3:1",\n' +
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
    this.addPropertyByString('alarm:alarm', '{"siid": 5,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:miot-spec-v2:property:alarm:00000012:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:miot-spec-v2:property:on:00000006:xiaomi-mt3:1",\n' +
      '                    "description": "Switch Status",\n' +
      '                    "format": "bool",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "write",\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('electricity:electricity', '{"siid": 8,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:electricity:00000001:xiaomi-mt3:1",\n' +
      '                    "description": "耗电量",\n' +
      '                    "format": "float",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "unit": "none",\n' +
      '                    "value-range": [\n' +
      '                        0,\n' +
      '                        999999.999999,\n' +
      '                        0.000001\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('electricity:elec-count', '{"siid": 8, \n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:property:elec-count:00000003:xiaomi-mt3:1",\n' +
      '                    "description": "耗电量本次计数",\n' +
      '                    "format": "uint16",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify"\n' +
      '                    ],\n' +
      '                    "value-range": [\n' +
      '                        0,\n' +
      '                        65535,\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:clean', '{"siid": 9,\n' +
      '                    "piid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:property:clean:00000001:xiaomi-mt3:1",\n' +
      '                    "description": "自清洁开关",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:examine', '{"siid": 9,\n' +
      '                    "piid": 2,\n' +
      '                    "type": "urn:xiaomi-spec:property:examine:00000002:xiaomi-mt3:1",\n' +
      '                    "description": "机组体检开关",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:error', '{"siid": 9,\n' +
      '                    "piid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:property:error:00000003:xiaomi-mt3:1",\n' +
      '                    "description": "故障",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "notify"\n' +
      '                    ]\n' +
      '                }')
    this.addPropertyByString('maintenance:running-duration', '{"siid": 9,\n' +
      '                    "piid": 5,\n' +
      '                    "type": "urn:xiaomi-spec:property:running-duration:00000005:xiaomi-mt3:1",\n' +
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
      '                    "type": "urn:xiaomi-spec:property:fan-percent:00000001:xiaomi-mt3:1",\n' +
      '                    "description": "风速百分比",\n' +
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
      '                    "type": "urn:xiaomi-spec:property:timer:00000003:xiaomi-mt3:1",\n' +
      '                    "description": "定时",\n' +
      '                    "format": "string",\n' +
      '                    "access": [\n' +
      '                        "read",\n' +
      '                        "notify",\n' +
      '                        "write"\n' +
      '                    ]\n' +
      '                }')
  }

  initDeviceActions () {
  }

  initDeviceEvents () {
    this.addEventByString('maintenance:filtertest', '{"siid": 9,\n' +
      '                    "eiid": 1,\n' +
      '                    "type": "urn:xiaomi-spec:event:filtertest:00005001:xiaomi-mt3:1",\n' +
      '                    "description": "通知滤网脏堵/解除",\n' +
      '                    "arguments": []\n' +
      '                }')
    this.addEventByString('maintenance:error', '{"siid": 9,\n' +
      '                    "eiid": 2,\n' +
      '                    "type": "urn:xiaomi-spec:event:error:00005002:xiaomi-mt3:1",\n' +
      '                    "description": "故障事件上报",\n' +
      '                    "arguments": [\n' +
      '                        3\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:examine-result', '{"siid": 9,\n' +
      '                    "eiid": 3,\n' +
      '                    "type": "urn:xiaomi-spec:event:examine-result:00005003:xiaomi-mt3:1",\n' +
      '                    "description": "通知体检进程＆结果",\n' +
      '                    "arguments": [\n' +
      '                        2\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:clean-result', '{"siid": 9,\n' +
      '                    "eiid": 4,\n' +
      '                    "type": "urn:xiaomi-spec:event:clean-result:00005004:xiaomi-mt3:1",\n' +
      '                    "description": "通知自清洁进程\u0026结果",\n' +
      '                    "arguments": [\n' +
      '                        1\n' +
      '                    ]\n' +
      '                }')
    this.addEventByString('maintenance:button-pressed', '{"siid": 9,\n' +
      '                    "eiid": 5,\n' +
      '                    "type": "urn:xiaomi-spec:event:button-pressed:00005005:xiaomi-mt3:1",\n' +
      '                    "description": "机内按键1按下(开关开, 自动模式开机)",\n' +
      '                    "arguments": []\n' +
      '                }')
    this.addEventByString('maintenance:button-released', '{"siid": 9,\n' +
      '                    "eiid": 6,\n' +
      '                    "type": "urn:xiaomi-spec:event:button-released:00005006:xiaomi-mt3:1",\n' +
      '                    "description": "机内按键1释放(开关关, 关机)",\n' +
      '                    "arguments": []\n' +
      '                }')
    this.addEventByString('maintenance:running-duration', '{"siid": 9,\n' +
      '                    "eiid": 8,\n' +
      '                    "type": "urn:xiaomi-spec:event:running-duration:00005008:xiaomi-mt3:1",\n' +
      '                    "description": "累计运行时长",\n' +
      '                    "arguments": [\n' +
      '                        5\n' +
      '                    ]\n' +
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
    return ['air-conditioner:on', 'air-conditioner:mode', 'air-conditioner:fault', 'air-conditioner:target-temperature', 'air-conditioner:eco', 'air-conditioner:heater', 'air-conditioner:dryer', 'air-conditioner:sleep-mode', 'air-conditioner:soft-wind', 'fan-control:fan-level', 'fan-control:horizontal-swing', 'fan-control:vertical-swing', 'environment:temperature', 'alarm:alarm', 'indicator-light:on', 'electricity:electricity', 'electricity:elec-count', 'maintenance:clean', 'maintenance:examine', 'maintenance:error', 'maintenance:running-duration', 'enhance:fan-percent', 'enhance:timer'
    ]
  }

  isThermostat () {
    return true
  }

}

module.exports = XiaomiAirconditionMt3
