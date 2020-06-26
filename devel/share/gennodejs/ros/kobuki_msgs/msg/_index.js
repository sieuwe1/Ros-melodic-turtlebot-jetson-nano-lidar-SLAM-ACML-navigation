
"use strict";

let ControllerInfo = require('./ControllerInfo.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let Sound = require('./Sound.js');
let VersionInfo = require('./VersionInfo.js');
let BumperEvent = require('./BumperEvent.js');
let ScanAngle = require('./ScanAngle.js');
let ExternalPower = require('./ExternalPower.js');
let CliffEvent = require('./CliffEvent.js');
let DigitalOutput = require('./DigitalOutput.js');
let DockInfraRed = require('./DockInfraRed.js');
let Led = require('./Led.js');
let MotorPower = require('./MotorPower.js');
let KeyboardInput = require('./KeyboardInput.js');
let ButtonEvent = require('./ButtonEvent.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let SensorState = require('./SensorState.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');

module.exports = {
  ControllerInfo: ControllerInfo,
  RobotStateEvent: RobotStateEvent,
  Sound: Sound,
  VersionInfo: VersionInfo,
  BumperEvent: BumperEvent,
  ScanAngle: ScanAngle,
  ExternalPower: ExternalPower,
  CliffEvent: CliffEvent,
  DigitalOutput: DigitalOutput,
  DockInfraRed: DockInfraRed,
  Led: Led,
  MotorPower: MotorPower,
  KeyboardInput: KeyboardInput,
  ButtonEvent: ButtonEvent,
  PowerSystemEvent: PowerSystemEvent,
  DigitalInputEvent: DigitalInputEvent,
  SensorState: SensorState,
  WheelDropEvent: WheelDropEvent,
  AutoDockingAction: AutoDockingAction,
  AutoDockingGoal: AutoDockingGoal,
  AutoDockingResult: AutoDockingResult,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
};
