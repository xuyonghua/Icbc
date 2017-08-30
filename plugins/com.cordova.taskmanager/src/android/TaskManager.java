package com.cordova.taskmanager;

import android.util.Log;
import android.widget.Toast;

import com.xyh.icbc.bean.QuestionResponse;
import com.xyh.icbc.http.HttpResponse;
import com.xyh.icbc.http.RetrofitHelper;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class TaskManager extends CordovaPlugin {

    CallbackContext callbackContext;
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        if(action.equals("login")){
            taskTest();
            return true;
        }
        return false;
    }

    private void taskTest() {
        RetrofitHelper.getInstance().getQuestionList("", new HttpResponse<QuestionResponse>() {
            @Override
            public void onSuccess(QuestionResponse response) {
                Log.d("response", "onSuccess: "+response.getTotalNum());
            }

            @Override
            public void onError(Throwable e) {

            }
        });

        Toast.makeText(cordova.getActivity().getApplicationContext(),"taskTest",Toast.LENGTH_SHORT).show();
        callbackContext.success("from TaskPlugin");
    }
}
