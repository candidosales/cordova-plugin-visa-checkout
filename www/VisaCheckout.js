var exec = require('cordova/exec');

exports.createCallbackFn = function (callbackFn, scope) {

    if (typeof callbackFn != 'function')
        return;

    return function () {
        callbackFn.apply(scope || this, arguments);
    };
};

exports.exec = function (action, args, callback, scope) {
    var fn = this.createCallbackFn(callback, scope),
        params = [];

    if (Array.isArray(args)) {
        params = args;
    } else if (args) {
        params.push(args);
    }

    exec(fn, null, 'LocalNotification', action, params);
};

exports.getNextAppointment = function(arg0, success, error) {
    exec(success, error, "VisaCheckout", "getNextAppointment", [arg0]);
};

// public final static String VISA_CHECKOUT_API_KEY = "C09MZZH3L3SSCCCIO1OC13w2pYKU-naO2V3q-rEf4KerLkdjA";
    // public final static String VISA_CHECKOUT_SHARED_SECRET = "CneQCEN+LnqLkZMd7YbqQ9ok/uNdq$JIxJo#Jvzx";


var VisaCheckout = function(options) {
    // require options parameter
    if (typeof options === 'undefined') {
        throw new Error('The options argument is required.');
    }

    // store the options to this object instance
    this.options = options;
};

VisaCheckout.prototype.getNextAppointment = function(successCallback, errorCallback, args) {
    exec(successCallback, errorCallback, "VisaCheckout", "getNextAppointment", [args]);
}

module.exports = {
    /**
     * Register for Push Notifications.
     *
     * This method will instantiate a new copy of the VisaCheckout object
     * and start the registration process.
     *
     * @param {Object} options
     * @return {VisaCheckout} instance
     */

    init: function(options) {
        return new VisaCheckout(options);
    },

    /**
     * VisaCheckout Object.
     *
     * Expose the VisaCheckout object for direct use
     * and testing. Typically, you should use the
     * .init helper method.
     */

    VisaCheckout: VisaCheckout
};
