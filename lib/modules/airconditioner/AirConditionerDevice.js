const GenericDevice = require('../generic/GenericDevice.js');
const Constants = require('../../constants/Constants.js');
const DevTypes = require('../../constants/DevTypes.js');
const PropFormat = require('../../constants/PropFormat.js');
const PropUnit = require('../../constants/PropUnit.js');
const PropAccess = require('../../constants/PropAccess.js');

class AirConditionerDevice extends GenericDevice {
  constructor(device, name, logger) {
    super(device, name, logger);
  }

  /*----------========== LIFECYCLE ==========----------*/

  initialPropertyFetchDone() {
    super.initialPropertyFetchDone();
  }

  /*----------========== DEVICE INFO ==========----------*/

  getType() {
    return DevTypes.AIR_CONDITIONER;
  }

  getDeviceName() {
    return 'Unknown air conditioner device';
  }

  /*----------========== CONFIG ==========----------*/

  propertiesToMonitor() {
    return ['air-conditioner:on', 'air-conditioner:mode', 'air-conditioner:fault', 'air-conditioner:target-temperature',
      'fan-control:fan-level', 'fan-control:vertical-swing', 'indicator-light:indicator-light'
    ];
  }

  /*----------========== VALUES ==========----------*/

  autoModeValue() {
    return this.getValueForMode('Auto');
  }

  heatModeValue() {
    return this.getValueForMode('Heat');
  }

  coolModeValue() {
    return this.getValueForMode('Cool');
  }

  dryModeValue() {
    return this.getValueForMode('Dry');
  }

  fanModeValue() {
    return this.getValueForMode('Fan');
  }

  /*----------========== PROPERTIES ==========----------*/

  //overrides
  onProp() {
    return this.getProperty('air-conditioner:on');
  }

  modeProp() {
    return this.getProperty('air-conditioner:mode');
  }

  faultProp() {
    return this.getProperty('air-conditioner:fault');
  }

  fanLevelProp() {
    return this.getProperty('fan-control:fan-level');
  }

  targetTemperatureProp() {
    return this.getProperty('air-conditioner:target-temperature');
  }

  //device specific
  verticalSwingProp() {
    return this.getProperty('fan-control:vertical-swing');
  }

  /*----------========== ACTIONS ==========----------*/

  /*----------========== FEATURES ==========----------*/

  // vertical swing
  supportsVerticalSwing() {
    return !!this.verticalSwingProp();
  }

  /*----------========== GETTERS ==========----------*/

  isVerticalSwingEnabled() {
    return this.getPropertyValue(this.verticalSwingProp());
  }


  /*----------========== SETTERS ==========----------*/

  async setVerticalSwingEnabled(enabled) {
    return this.setPropertyValue(this.verticalSwingProp(), enabled);
  }


  /*----------========== CONVENIENCE ==========----------*/

  async enableAutoMode() {
    return this.setMode(this.autoModeValue());
  }

  async enableHeatMode() {
    return this.setMode(this.heatModeValue());
  }

  async enableCoolMode() {
    return this.setMode(this.coolModeValue());
  }

  async enableDryMode() {
    return this.setMode(this.dryModeValue());
  }

  async enableFanMode() {
    return this.setMode(this.fanModeValue());
  }

  isHeating() {
    return this.isHeatModeEnabled();
  }

  isCooling() {
    return this.isCoolModeEnabled();
  }


  /*----------========== VALUE CONVENIENCE  ==========----------*/

  isAutoModeEnabled() {
    return this.getMode() === this.autoModeValue();
  }

  isHeatModeEnabled() {
    return this.getMode() === this.heatModeValue();
  }

  isCoolModeEnabled() {
    return this.getMode() === this.coolModeValue();
  }

  isDryModeEnabled() {
    return this.getMode() === this.dryModeValue();
  }

  isFanModeEnabled() {
    return this.getMode() === this.fanModeValue();
  }


  /*----------========== HELPERS ==========----------*/

  isThermostat() {
    return false;
  }

  supportsTargetRelativeHumidity() {
    return !!this.targetRelativeHumidityProp();
  }

  targetRelativeHumidityProp() {
    return this.getProperty('air-conditioner:target-humidity');
  }

  getTargetRelativeHumidity() {
    return this.getPropertyValue(this.targetRelativeHumidityProp());
  }

  getTargetRelativeHumiditySafe() {
    return Math.max(this.targetRelativeHumidityRange()[0], this.getTargetRelativeHumidity());
  }

  async setTargetRelativeHumiditySafe(value) {
    let safeVal = value;
    const minVal = this.targetRelativeHumidityRange()[0];
    const maxVal = this.targetRelativeHumidityRange()[1];
    safeVal = Math.max(minVal, safeVal);
    safeVal = Math.min(maxVal, safeVal);
    return this.setTargetRelativeHumidity(safeVal);
  }

  targetRelativeHumidityRange() {
    let range = this.getPropertyValueRange(this.targetRelativeHumidityProp());
    return (range.length > 2) ? range : [0, 100, 1];
  }

  async setTargetRelativeHumidity(value) {
    return this.setPropertyValue(this.targetRelativeHumidityProp(), value);
  }

  targetRelativeHumidityMinVal() {
    let targetHumRange = this.targetRelativeHumidityRange();
    if (targetHumRange.length === 3) {
      return targetHumRange[0];
    }
    return 0;
  }

}

module.exports = AirConditionerDevice;
