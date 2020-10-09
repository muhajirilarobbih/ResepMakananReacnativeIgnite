import { LoggerFactory, LoggerFactoryOptions, LFService, LogGroupRule, LogLevel } from "typescript-logging"

// Create options instance and specify 2 LogGroupRules:
// * One for any logger with a name starting with model, to log on debug
// * The second one for anything else to log on info
let options = new LoggerFactoryOptions()
    .addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Debug))
    .addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Info))
    .addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Error));
if (__DEV__) {
    // options = options.addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Debug))
}

export const factory = LFService.createNamedLoggerFactory("LoggerFactory", options);

/**
 * Digunakan untuk pencatatan error, informasi, debug, dll
 */
export const logger = factory.getLogger('app_logger')

export const SaUser = {
    username: 'sa',
    password: 'qwerty@123'
}