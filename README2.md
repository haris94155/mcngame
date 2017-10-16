step1:
        
        npm i react-native-image-crop-picker --save

step2:
        
        react-native link react-native-image-crop-picker (this step might give error- and because of that we will perform step8)

step3:Add or update this to your pod file inside the ios folder of your project:

        platform :ios, '8.0'
        target '<your_project_name>' do
                    pod 'RSKImageCropper'
                    pod 'QBImagePickerController'
                end

step4:In terminal:

        cd ios    
        pod install

step5:Drag and drop the 

        node_modules/react-native-image-crop-picker/ios/ImageCropPickerSDK folder to your xcode project in Libraries. 
        node_modules/react-native-image-crop-picker/ios/imageCropPicker.xcodeproj file to your xcode project also in Libraries.

step6:Click on project General tab

    step7.1:Under Deployment Info set Deployment Target to 8.0
    
    step7.2:Under Embedded Binaries click + and add RSKImageCropper.framework and QBImagePicker.framework from ImageCropPickerSDK folder(which we dragged and dropped in step-6)

step7:Click on your main project file (the one that represents the .xcodeproj) select 
"Build Phases" and drag the static library

        "imageCropPicker.xcodeproj/libimageCropPicker.a" file
from the Products folder inside the Libraries to "Link Binary With Libraries"( step 2 of this link https://facebook.github.io/react-native/docs/linking-libraries-ios.html -  this link is general, perform step according to your Libraray you are linking)

step8:delete 

        ios/build 

step9:

        react-native run-ios

References:

1.https://github.com/ivpusic/react-native-image-crop-picker

2.https://facebook.github.io/react-native/docs/linking-libraries-ios.html
