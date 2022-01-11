package com.icnhs.researchapp; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;



public class SceneKitModule extends ReactContextBaseJavaModule {

  @Override
public String getName() {
   return "SceneKitModule";
}
  SceneKitModule(ReactApplicationContext context){
    Intent sceneViewerIntent = new Intent(Intent.ACTION_VIEW);
Uri intentUri =
    Uri.parse("https://arvr.google.com/scene-viewer/1.0").buildUpon()
    .appendQueryParameter("file", "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf")
    .appendQueryParameter("mode", "ar_only")
    .build();
sceneViewerIntent.setData(intentUri);
sceneViewerIntent.setPackage("com.google.ar.core");
startActivity(sceneViewerIntent);
  }
  
}


