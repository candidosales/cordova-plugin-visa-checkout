package cordova-plugin-visa-checkout;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class VisaCheckout extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("getNextAppointment")) {
            int minutes = args.getInt(0);
            this.getNextAppointment(minutes, callbackContext);
            return true;
        }
        return false;
    }

    private void getNextAppointment(int minutes, CallbackContext callbackContext) {
        if (minutes > 0) {
            JSONObject returnObject = new JSONObject();
            returnObject.put("title", appointmentTitle);
            returnObject.put("date", appointmentDate);
            callbackContext.success(returnObject);
        } else {
            callbackContext.error("minutes must be > 0");
        }
    }
}
