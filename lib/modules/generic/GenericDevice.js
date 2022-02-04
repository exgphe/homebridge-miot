const BaseDevice = require('../../base/BaseDevice.js');
const colorConvert = require('color-convert');
const MiotDevice = require('../../protocol/MiotDevice.js');
const MiotProperty = require('../../protocol/MiotProperty.js');
const Constants = require('../../constants/Constants.js');
const Events = require('../../constants/Events.js');
const DevTypes = require('../../constants/DevTypes.js');
const PropFormat = require('../../constants/PropFormat.js');
const PropUnit = require('../../constants/PropUnit.js');
const PropAccess = require('../../constants/PropAccess.js');

// DEVICES: http://miot-spec.org/miot-spec-v2/instances?status=released

class GenericDevice extends BaseDevice {
  constructor(miotDevice, name, logger) {

    if (new.target === GenericDevice) {
      throw new Error("Cannot instantiate GenericDevice directly!")
    }

    super(miotDevice, name, logger);
  }


  /*----------========== INIT ==========----------*/

  initialPropertyFetchDone() {
    // log the the use time when supported
    if (this.supportsUseTimeReporting()) {
      this.logger.info(`Use time: ${this.getUseTime()} minutes.`);
    }
  }


  /*----------========== DEVICE INFO ==========----------*/


  /*----------========== INFO ==========----------*/


  /*----------========== CONFIG ==========----------*/

  commonProperties() {
    return ['physical-controls-locked:physical-controls-locked', 'alarm:alarm', 'indicator-light:on', 'indicator-light:brightness',
      'indicator-light:indicator-light', 'screen:on', 'screen:brightness', 'environment:temperature',
      'environment:relative-humidity', 'environment:pm2.5-density', 'environment:pm10-density', 'environment:air-quality',
      'environment:tvoc-density', 'environment:co2-density', 'battery:battery-level', 'battery:charging-state',
      'filter:filter-left-time', 'filter:filter-used-time', 'filter:filter-life-level', 'use-time:use-time'
    ];
  }


  /*----------========== VALUES ==========----------*/

  statusChargingValue() {
    return this.getValueForStatus('Charging');
  }

  statusIdleValue() {
    return this.getValueForStatus('Idle');
  }

  statusBusyValue() {
    return this.getValueForStatus('Busy');
  }

  chargingStateChargingValue() {
    return this.getValueForChargingState('Charging');
  }

  chargingStateNotChargingValue() {
    return this.getValueForChargingState('Not Charging');
  }

  chargingStateNotChargeableValue() {
    return this.getValueForChargingState('Not Chargeable');
  }

  chargingStateGoChargingValue() {
    return this.getValueForChargingState('Go Charging');
  }


  /*----------========== PROPERTIES ==========----------*/

  onProp() {
    return this.getProperty('generic:on');
  }

  statusProp() {
    return this.getProperty('generic:status');
  }

  faultProp() {
    return this.getProperty('generic:fault');
  }

  modeProp() {
    return this.getProperty('generic:mode');
  }

  physicalControlsLockedProp() {
    return this.getProperty('physical-controls-locked:physical-controls-locked');
  }

  alarmProp() {
    return this.getProperty('alarm:alarm');
  }

  indicatorLightOnProp() {
    return this.getProperty('indicator-light:on');
  }

  indicatorLightBrightnessProp() {
    return this.getProperty('indicator-light:brightness');
  }

  indicatorLightIndicatorLightProp() {
    return this.getProperty('indicator-light:indicator-light');
  }

  screenOnProp() {
    return this.getProperty('screen:on');
  }

  screenBrightnessProp() {
    return this.getProperty('screen:brightness');
  }

  offDelayProp() {
    return this.getProperty('fan:off-delay');
  }

  speedLevelProp() {
    return this.getProperty('custom-service:speed-level');
  }

  fanLevelProp() {
    return this.getProperty('fan:fan-level');
  }

  anionProp() {
    return this.getProperty('fan:anion');
  }

  brightnessProp() {
    return this.getProperty('light:brightness');
  }

  colorTemperatureProp() {
    return this.getProperty('light:color-temperature');
  }

  colorProp() {
    return this.getProperty('light:color');
  }

  targetTemperatureProp() {
    return this.getProperty('generic:target-temperature');
  }

  temperatureProp() {
    return this.getProperty('environment:temperature');
  }

  relativeHumidityProp() {
    return this.getProperty('environment:relative-humidity');
  }

  pm25DensityProp() {
    return this.getProperty('environment:pm2.5-density');
  }

  pm10DensityProp() {
    return this.getProperty('environment:pm10-density');
  }

  airQualityProp() {
    return this.getProperty('environment:air-quality');
  }

  tvocDensityProp() {
    return this.getProperty('environment:tvoc-density');
  }

  co2DensityProp() {
    return this.getProperty('environment:co2-density');
  }

  batteryLevelProp() {
    return this.getProperty('battery:battery-level');
  }

  chargingStateProp() {
    return this.getProperty('battery:charging-state');
  }

  filterLeftTimeProp() {
    return this.getProperty('filter:filter-left-time');
  }

  filterUsedTimeProp() {
    return this.getProperty('filter:filter-used-time');
  }

  filterLifeLevelProp() {
    return this.getProperty('filter:filter-life-level');
  }

  acStateProp() {
    return this.getProperty('custom-service:ac-state');
  }

  batteryStateProp() {
    return this.getProperty('custom-service:battery-state');
  }

  useTimeProp() {
    return this.getProperty('use-time:use-time');
  }

  speedNowProp() {
    return null;
  }

  actaulSpeedProp() {
    return this.getProperty('other:actual-speed');
  }


  /*----------========== ACTIONS ==========----------*/

  resetFilterLifeAction() {
    this.getAction('filter:reset-filter-life');
  }


  /*----------========== FEATURES ==========----------*/

  // on
  supportsOn() {
    return !!this.onProp();
  }

  // status
  supportsStatusReporting() {
    return !!this.statusProp();
  }

  // fault
  supportsFaultReporting() {
    return !!this.faultProp();
  }

  // modes
  supportsModes() {
    return !!this.modeProp();
  }

  //physical controls locked
  supportsChildLock() {
    return !!this.physicalControlsLockedProp();
  }

  // off delay
  supportsOffDelay() {
    return !!this.offDelayProp();
  }

  // alarm
  supportsBuzzerControl() {
    return !!this.alarmProp();
  }

  // indicator light - on
  supportsIndicatorLightOnControl() {
    return !!this.indicatorLightOnProp();
  }

  // indicator light - brightness
  supportsIndicatorLightBrightnessControl() {
    return !!this.indicatorLightBrightnessProp();
  }

  // indicator light - indicator light
  supportsIndicatorLightIndicatorLightControl() {
    return !!this.indicatorLightIndicatorLightProp();
  }

  // screen - on
  supportsScreenOnControl() {
    return !!this.screenOnProp();
  }

  // screen - brightness
  supportsScreenBrightnessControl() {
    return !!this.screenBrightnessProp();
  }

  //speed level
  supportsSpeedLevel() {
    return !!this.speedLevelProp();
  }

  isSpeeLeveldRpm() {
    let range = this.getPropertyValueRange(this.speedLevelProp());
    let isRpm = false;
    if (range && range.length > 2) {
      let rangeDif = range[1] - range[0];
      if (rangeDif > 200) {
        isRpm = true;
      }
    }
    return isRpm || this.getPropertyUnit(this.speedLevelProp()) === PropUnit.RPM;
  }

  // rotation speed
  supportsRotationSpeed() {
    return this.supportsSpeedLevel() || this.supportsFanLevel();
  }

  // fan levels
  supportsFanLevel() {
    return !!this.fanLevelProp();
  }

  fanLevelsList() {
    return this.getPropertyValueList(this.fanLevelProp());
  }

  supportsFanLevelList() {
    return this.fanLevelsList().length > 2;
  }

  fanLevelRange() {
    return this.getPropertyValueRange(this.fanLevelProp());
  }

  supportsFanLevelRange() {
    return this.fanLevelRange().length > 2;
  }

  // ioniser
  supportsIoniser() {
    return !!this.anionProp();
  }

  // brightness
  supportsBrightness() {
    return !!this.brightnessProp();
  }

  // color temperature
  supportsColorTemperature() {
    return !!this.colorTemperatureProp();
  }

  // color
  supportsColor() {
    return !!this.colorProp();
  }

  // target temperature
  supportsTargetTemperature() {
    return !!this.targetTemperatureProp();
  }

  targetTemperatureRange() {
    let range = this.getPropertyValueRange(this.targetTemperatureProp());
    return (range.length > 2) ? range : [16, 31, 0.5];
  }

  // temperature
  supportsTemperatureReporting() {
    return !!this.temperatureProp();
  }

  // relative humidity
  supportsRelativeHumidityReporting() {
    return !!this.relativeHumidityProp();
  }

  // pm2.5 density
  supportsPm25DensityReporting() {
    return !!this.pm25DensityProp();
  }

  // pm10 density
  supportsPm10DensityReporting() {
    return !!this.pm10DensityProp();
  }

  //air quality
  supportsAirQualityReporting() {
    return !!this.airQualityProp();
  }

  //tvoc density
  supportsTvocDensityReporting() {
    return !!this.tvocDensityProp();
  }

  //co2 density
  supportsCo2DensityReporting() {
    return !!this.co2DensityProp();
  }

  // battery
  supportsBatteryLevelReporting() {
    return !!this.batteryLevelProp();
  }

  //charging state
  supportsChargingStateReporting() {
    return !!this.chargingStateProp();
  }

  // filter
  supportsFilterLeftTimeReporting() {
    return !!this.filterLeftTimeProp();
  }

  supportsFilterUsedTimeReporting() {
    return !!this.filterUsedTimeProp();
  }

  supportsFilterLifeLevelReporting() {
    return !!this.filterLifeLevelProp();
  }

  supportsFilterLifeResetAction() {
    return !!this.resetFilterLifeAction();
  }

  //ac power
  supportsAcStateReporting() {
    return !!this.acStateProp();
  }

  // bvattery state
  supportsBatteryStateReporting() {
    return !!this.batteryStateProp();
  }

  //charging
  supportsStatusCharging() {
    return this.supportsStatusReporting() && this.statusChargingValue() !== -1;
  }

  supportsChargingReporting() {
    return this.supportsChargingStateReporting() || this.supportsStatusCharging() || this.supportsBatteryStateReporting() || this.supportsAcStateReporting();
  }

  // use time
  supportsUseTimeReporting() {
    return !!this.useTimeProp();
  }

  useTimeUnit() {
    return this.supportsUseTimeReporting() ? this.getPropertyUnit(this.useTimeProp()) : PropUnit.MINUTES;
  }

  //speed now reporting
  supportsSpeedNowReporting() {
    return !!this.speedNowProp();
  }

  // actual speed reporting
  supportsActualSpeedReporting() {
    return !!this.actaulSpeedProp();
  }


  /*----------========== GETTERS ==========----------*/

  isOn() {
    return this.getPropertyValue(this.onProp());
  }

  getStatus() {
    return this.getPropertyValue(this.statusProp());
  }

  getFault() {
    return this.getPropertyValue(this.faultProp());
  }

  getMode() {
    return this.getPropertyValue(this.modeProp());
  }

  isChildLockActive() {
    return this.getPropertyValue(this.physicalControlsLockedProp());
  }

  isBuzzerEnabled() {
    return this.getPropertyValue(this.alarmProp());
  }

  isIndicatorLightOn() {
    return this.getPropertyValue(this.indicatorLightOnProp());
  }

  getIndicatorLightBrightness() {
    return this.getPropertyValue(this.indicatorLightBrightnessProp());
  }

  getIndicatorLightIndicatorLight() {
    return this.getPropertyValue(this.indicatorLightIndicatorLightProp());
  }

  isScreenOn() {
    return this.getPropertyValue(this.screenOnProp());
  }

  getScreenBrightness() {
    return this.getPropertyValue(this.screenBrightnessProp());
  }

  getOffDelay() {
    return this.getPropertyValue(this.offDelayProp());
  }

  getSpeedLevel() {
    return this.getPropertyValue(this.speedLevelProp());
  }

  getFanLevel() {
    return this.getPropertyValue(this.fanLevelProp());
  }

  isIoniserEnabled() {
    return this.getPropertyValue(this.anionProp());
  }

  getBrightness() {
    return this.getPropertyValue(this.brightnessProp());
  }

  getColorTemperature() {
    return this.getPropertyValue(this.colorTemperatureProp());
  }

  getColor() {
    return this.getPropertyValue(this.colorProp());
  }

  getTargetTemperature() {
    return this.getPropertyValue(this.targetTemperatureProp());
  }

  getTemperature() {
    return this.getPropertyValue(this.temperatureProp());
  }

  getRelativeHumidity() {
    return this.getPropertyValue(this.relativeHumidityProp());
  }

  getPm25Density() {
    return this.getPropertyValue(this.pm25DensityProp());
  }

  getPm10Density() {
    return this.getPropertyValue(this.pm10DensityProp());
  }

  getAirQuality() {
    return this.getPropertyValue(this.airQualityProp());
  }

  getTvocDensity() {
    return this.getPropertyValue(this.tvocDensityProp());
  }

  getCo2Density() {
    return this.getPropertyValue(this.co2DensityProp());
  }

  getBatteryLevel() {
    return this.getPropertyValue(this.batteryLevelProp());
  }

  getChargingState() {
    return this.getPropertyValue(this.chargingStateProp());
  }

  getFilterLeftTime() {
    return this.getPropertyValue(this.filterLeftTimeProp());
  }

  getFilterUsedTime() {
    return this.getPropertyValue(this.filterUsedTimeProp());
  }

  getFilterLifeLevel() {
    return this.getPropertyValue(this.filterLifeLevelProp());
  }

  isOnAcPower() {
    return this.getPropertyValue(this.acStateProp());
  }

  isOnBatteryPower() {
    return this.getPropertyValue(this.batteryStateProp());
  }

  getUseTime() {
    let useTime = this.getPropertyValue(this.useTimeProp());
    useTime = this.convertToMinutes(useTime, this.useTimeUnit());
    return useTime;
  }

  getSpeedNow() {
    return this.getPropertyValue(this.speedNowProp());
  }

  getActualSpeed() {
    return this.getPropertyValue(this.actaulSpeedProp());
  }


  /*----------========== SETTERS ==========----------*/

  async setOn(isOn) {
    return this.setPropertyValue(this.onProp(), isOn);
  }

  async setMode(mode) {
    return this.setPropertyValue(this.modeProp(), mode);
  }

  async setChildLock(active) {
    return this.setPropertyValue(this.physicalControlsLockedProp(), active);
  }

  async setBuzzerEnabled(enabled) {
    return this.setPropertyValue(this.alarmProp(), enabled);
  }

  async setIndicatorLightOn(value) {
    return this.setPropertyValue(this.indicatorLightOnProp(), value);
  }

  async setIndicatorLightBrightness(value) {
    return this.setPropertyValue(this.indicatorLightBrightnessProp(), value);
  }

  async setIndicatorLightIndicatorLight(value) {
    return this.setPropertyValue(this.indicatorLightIndicatorLightProp(), value);
  }

  async setScreenOn(value) {
    return this.setPropertyValue(this.screenOnProp(), value);
  }

  async setScreenBrightness(value) {
    return this.setPropertyValue(this.screenBrightnessProp(), value);
  }

  async setOffDelay(value) {
    return this.setPropertyValue(this.offDelayProp(), value);
  }

  async setSpeedLevel(speed) {
    return this.setPropertyValue(this.speedLevelProp(), speed);
  }

  async setFanLevel(level) {
    return this.setPropertyValue(this.fanLevelProp(), level);
  }

  async setIoniserEnabled(enabled) {
    return this.setPropertyValue(this.anionProp(), enabled);
  }

  async setBrightness(value) {
    return this.setPropertyValue(this.brightnessProp(), value);
  }

  async setColorTemperature(value) {
    return this.setPropertyValue(this.colorTemperatureProp(), value);
  }

  async setColor(value) {
    return this.setPropertyValue(this.colorProp(), value);
  }

  async setTargetTemperature(value) {
    return this.setPropertyValue(this.targetTemperatureProp(), value);
  }


  /*----------========== CONVENIENCE ==========----------*/

  isDeviceOn() {
    return this.isOn();
  }

  isDeviceCharging() {
    if (this.supportsChargingStateReporting()) {
      return this.isChargingStateCharging();
    } else if (this.supportsStatusCharging()) {
      return this.isStatusCharging();
    } else if (this.supportsBatteryStateReporting()) {
      return !this.isOnBatteryPower();
    } else if (this.supportsAcStateReporting()) {
      return this.isOnAcPower();
    }
    return false;
  }

  // rotation speed
  getRotationSpeedPercentage() {
    if (this.supportsSpeedLevel()) {
      if (this.isSpeeLeveldRpm()) {
        return this.convertPropValueToPercentage(this.speedLevelProp());
      } else {
        return this.getSpeedLevel();
      }
    } else if (this.supportsFanLevel()) {
      return this.convertFanLevelToRotationSpeed();
    }
    return 0;
  }

  async setRotationSpeedPercentage(percentage) {
    if (this.supportsSpeedLevel()) {
      let fanSpeedToSet = percentage;
      if (this.isSpeeLeveldRpm()) {
        fanSpeedToSet = this.convertPercentageToPropValue(percentage, this.speedLevelProp())
      }
      this.setSpeedLevel(fanSpeedToSet);
    } else if (this.supportsFanLevel()) {
      let levelToSet = this.convertRotationSpeedToFanLevel(percentage);
      this.setFanLevel(levelToSet);
    }
  }

  // set on
  turnOnIfNecessary() {
    // if the device is turned off then turn it on
    if (this.isOn() === false) {
      this.setOn(true);
    }
  }

  // color temp
  getColorTempMired() {
    let colorTempKelvin = this.getColorTemperature();
    if (colorTempKelvin > 0) {
      return Math.floor(1000000 / colorTempKelvin);
    }
    return this.getMinColorTempValue();
  }

  async setColorTempMired(miredVal) {
    if (miredVal > 0) {
      let kelvinVal = 1000000 / miredVal;
      kelvinVal = Math.floor(kelvinVal);
      this.setColorTemperature(kelvinVal);
    }
  }

  getMinColorTempValue() {
    let colorTempRange = this.getPropertyValueRange(this.colorTemperatureProp());
    let minVal = 140;
    if (colorTempRange && colorTempRange.length > 2) {
      minVal = colorTempRange[1];
      minVal = 1000000 / minVal;
    }
    return Math.floor(minVal);
  }

  getMaxColorTempValue() {
    let colorTempRange = this.getPropertyValueRange(this.colorTemperatureProp());
    let maxVal = 500;
    if (colorTempRange && colorTempRange.length > 2) {
      maxVal = colorTempRange[0];
      maxVal = 1000000 / maxVal;
    }
    return Math.floor(maxVal);
  }

  // color
  getHue() {
    return this.getColorHsv()[0];
  }

  getSaturation() {
    return this.getColorHsv()[1];
  }

  setHue(hue) {
    this.logger.debug(`[LightDevice] Setting hue to ${hue}`);
    this.setSaturationHue(undefined, hue);
  }

  setSaturation(saturation) {
    this.logger.debug(`[LightDevice] Setting saturation to ${saturation}`);
    this.setSaturationHue(saturation, undefined);
  }

  setSaturationHue(saturation, hue) {
    if (!this.saturationHueToSet) {
      this.saturationHueToSet = {};
      // just in case if something went wrong, reset the variable
      setTimeout(() => {
        this.saturationHueToSet = null;
      }, 1000);
    }

    if (!this.saturationHueToSet.saturation && parseInt(saturation) >= 0) {
      this.saturationHueToSet.saturation = parseInt(saturation);
    }
    if (!this.saturationHueToSet.hue && parseInt(hue) >= 0) {
      this.saturationHueToSet.hue = parseInt(hue);
    }

    if (this.saturationHueToSet.saturation >= 0 && this.saturationHueToSet.hue >= 0) {
      let colorRgb = this.getColorRgb(this.saturationHueToSet.hue, this.saturationHueToSet.saturation, this.getBrightness());
      this.logger.debug(`Got hue and saturation! Sending rgb ${colorRgb} value to device!`);
      this.saturationHueToSet = null;
      this.setColor(colorRgb);
    }
  }

  // filter
  resetFilterLife() {
    return this.fireAction(this.resetFilterLifeAction());
  }

  //target temp
  getTargetTemperatureSafe() {
    return Math.max(this.targetTemperatureRange()[0], this.getTargetTemperature());
  }


  /*----------========== VALUE CONVENIENCE  ==========----------*/

  isStatusCharging() {
    return this.getStatus() === this.statusChargingValue();
  }

  isStatusIdle() {
    return this.getStatus() === this.statusIdleValue();
  }

  isStatusBusy() {
    return this.getStatus() === this.statusBusyValue();
  }

  isChargingStateCharging() {
    return this.getChargingState() === this.chargingStateChargingValue();
  }

  isChargingStateNotCharging() {
    return this.getChargingState() === this.chargingStateNotChargingValue();
  }

  isChargingStateNotChargeable() {
    return this.getChargingState() === this.chargingStateNotChargeableValue();
  }

  isChargingStateGoCharging() {
    return this.getChargingState() === this.chargingStateGoChargingValue();
  }


  /*----------========== HELPERS ==========----------*/

  getActionFriendlyName(miotAction) {
    let action = this.getAction(miotAction);
    if (action) {
      return action.getName().split(':')[1].split('-').map((item) => {
        return item.charAt(0).toUpperCase() + item.substring(1);
      }).join(' ');
    }
    return miotAction;
  }

  getPropertyFriendlyName(miotProp) {
    let prop = this.getProperty(miotProp);
    if (prop) {
      let itemArr = prop.getName().split(':').map((item) => {
        return item.charAt(0).toUpperCase().slice(0, 6) + item.substring(1);
      })

      // if service name longer then 6 chars then just return the property name since the overall name might be too long
      if (itemArr[0].length > 6) {
        return itemArr[1];
      }

      return itemArr.join(' - ');
    }
    return miotProp;
  }

  // time
  convertToMinutes(value, unit) {
    if (unit === PropUnit.HOURS) {
      value = value * 60;
    } else if (unit === PropUnit.SECONDS) {
      value = Math.ceil(value / 60);
    }
    return value;
  }

  convertMinutesToUnit(minutes, unit) {
    let converted = minutes;
    if (unit === PropUnit.SECONDS) {
      converted = minutes * 60;
    } else if (unit === PropUnit.HOURS) {
      converted = Math.ceil(minutes / 60);
    }
    return converted;
  }

  // fan speed
  convertRotationSpeedToFanLevel(fanSpeed) {
    let level = 0;
    if (this.supportsFanLevelList()) {
      let numberOfFanLevels = this.fanLevelsList().length;
      let firstValue = this.fanLevelsList()[0].value;
      let lastValue = this.fanLevelsList()[numberOfFanLevels - 1].value;
      let speedPerLevel = 100 / numberOfFanLevels;
      level = firstValue + Math.floor(fanSpeed / speedPerLevel); // round down
      if (level > lastValue) level = lastValue; // make sure we stay in range
    } else if (this.supportsFanLevelRange()) {
      let minLevel = this.fanLevelRange()[0];
      let maxLevel = this.fanLevelRange()[1];
      let numberOfFanLevels = (maxLevel - minLevel) + 1;
      let speedPerLevel = 100 / numberOfFanLevels;
      level = minLevel + Math.floor(fanSpeed / speedPerLevel); // round down
      if (level > maxLevel) level = maxLevel; // make sure we stay in range
    }
    return level;
  }

  convertFanLevelToRotationSpeed() {
    let fanSpeed = 0;
    if (this.supportsFanLevelList()) {
      let numberOfFanLevels = this.fanLevelsList().length;
      let speedPerLevel = 100 / numberOfFanLevels;
      fanSpeed = Math.round(speedPerLevel * this.getFanLevel());
    } else if (this.supportsFanLevelRange()) {
      let minLevel = this.fanLevelRange()[0];
      let maxLevel = this.fanLevelRange()[1];
      let numberOfFanLevels = (maxLevel - minLevel) + 1;
      let speedPerLevel = 100 / numberOfFanLevels;
      fanSpeed = Math.round(speedPerLevel * this.getFanLevel());
    }
    if (fanSpeed > 100) fanSpeed = 100; // make sure we stay in range
    return fanSpeed;
  }

  convertPropValueToPercentage(prop) {
    if (prop && prop.hasValueRange()) {
      let propValue = prop.getSafeValue();
      let propValRange = prop.getValueRange();
      let from = propValRange[0];
      let to = propValRange[1];
      let valuePercentage = (((propValue - from) * 100) / (to - from));
      return Math.round(valuePercentage);
    }
    return null;
  }

  convertPercentageToPropValue(percentage, prop) {
    if (prop && prop.hasValueRange()) {
      let propValRange = prop.getValueRange();
      let from = propValRange[0];
      let to = propValRange[1];
      let value = (percentage * (to - from) / 100) + from;
      return Math.round(value);
    }
    return percentage;
  }

  //light color
  getColorHsv() {
    let colorRgb = this.getColor();
    if (colorRgb) {
      let r = colorRgb >> 16;
      let g = colorRgb >> 8 & 255;
      let b = colorRgb & 255;
      let color = colorConvert.rgb.hsv([r, g, b]);
      return color;
    }
    return [0, 0];
  }

  getColorRgb(hue, saturation, brightness) {
    const color = colorConvert.hsv.rgb([hue, saturation, brightness])
    const r = color[0];
    const g = color[1];
    const b = color[2];
    return 256 * 256 * r + 256 * g + b;
  }

  //prop value extractor
  getValueForStatus(statusDesc) {
    if (statusDesc && this.supportsStatusReporting()) {
      return this._getValueForDescription(this.statusProp(), statusDesc);
    }
    return -1;
  }

  getValueForMode(modeDesc) {
    if (modeDesc && this.supportsModes()) {
      return this._getValueForDescription(this.modeProp(), modeDesc);
    }
    return -1;
  }

  getValueForChargingState(chargingStateDesc) {
    if (chargingStateDesc && this.supportsChargingStateReporting()) {
      return this._getValueForDescription(this.chargingStateProp(), chargingStateDesc);
    }
    return -1;
  }

  getValueForFault(faultDesc) {
    if (faultDesc && this.supportsFaultReporting()) {
      return this._getValueForDescription(this.faultProp(), faultDesc);
    }
    return -1;
  }


  /*----------========== PRIVATE STUFF ==========----------*/

  _getValueForDescription(prop, desc) {
    if (desc && prop) {
      const valList = this.getPropertyValueList(prop);
      if (valList) {
        let foundObj = valList.find(item => this._areDescriptionsEqual(item.description, desc));
        if (foundObj) {
          return foundObj.value;
        }
      }
    }
    return -1;
  }

  _areDescriptionsEqual(desc1, desc2) {
    if (desc1 && desc2) {
      if (Array.isArray(desc2)) {
        let foundDesc = desc2.find(tmpDesc => this._normalizedEqualCompare(desc1, tmpDesc));
        if (foundDesc) {
          return true;
        }
      } else {
        return this._normalizedEqualCompare(desc1, desc2);
      }
    }
    return false;
  }

  _normalizedEqualCompare(text1, text2) {
    if (text1 && text2) {
      const normalizedText1 = text1.replace(/\s+/g, '').toLowerCase();
      const normalizedText2 = text2.replace(/\s+/g, '').toLowerCase();
      if (normalizedText1 === normalizedText2) {
        return true;
      }
    }
    return false;
  }


}

module.exports = GenericDevice;
