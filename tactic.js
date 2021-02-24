
function request(url, callback) {
    var XMLHttpRequest = require("xmlttprequest");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function(myxhr) {
        return function() {
            if(myxhr.readyState === 4) { callback(myxhr); }
        }
    })(xhr);

    xhr.open("GET", url);
    xhr.send();
}

function testTactic(){
    // var myPythonObject = PythonManager.createPyObject("C:/pathToScript/pythonScript.py");
    // MessageLog.trace(myPythonObject)

    // request('https://jsonplaceholder.typicode.com/todos/1', function(o){
    //     if(o.status === 200){
    //         MessageLog.trace(o.resposeText)
    //     }else{
    //         MessageLog.trace("some error occured")
    //     }
    // })

    
    // var url = new QUrl('http://jsonplaceholder.typicode.com/todos/');
    // //var url = new QUrl('http://localhost:8000/spaces/');
    // var request = new QNetworkRequest(url);

    // var nam = new QNetworkAccessManager();
    // nam.finished.connect(handleResponse);
    // nam.get(request);

    // function handleResponse(reply){
    //     var todos = reply.readAll();
    //     //var object = JSON.parse(todos)
    //     //MessageLog.trace(reply.error());
    //     //MessageLog.trace(reply.readAll());
    //     MessageLog.trace(QNetworkReply.NoError)

    //     // var error = reply.error();
    //     // var network = new QtNetwork();

    //     // if (error == network.QNetworkReply.NoError){
    //     //     var bytes_string = reply.readAll();
    //     //     MessageLog.trace(bytes_string);
    //     // }else{
    //     //     MessageLog.trace("Error occured: ", error);
    //     //     MessageLog.trace(reply.errorString());
    //     // }
        
    // }


    // p1 = new Process2( "setx TACTIC_USERNAME 'mbyjohnson' " );
    // p1.launch()

    // var tempFolder = System.getenv("HOME");
    // MessageLog.trace(tempFolder)

    //p1 = new Process2("").addEnvVariable("tactic_user", "cyberposh")
    //p1 = new Process2( "ls -lah" );
    //p1.launch()

    // sceneName = scene.currentProjectPath();
    // MessageLog.trace(sceneName);


    //var multipart = new QHttpMultiPart(QHttpMultiPart.FormDataType)

    // var textPart = new QHttpPart()
    // textPart.setHeader(QNetworkRequest.ContentDispositionHeader, QVariant("form-data; name=\"text\""));
    // textPart.setBody("Checkin");

    // var imagePart = new QHttpPart()
    // imagePart.setHeader(QNetworkRequest.ContentTypeHeader, QVariant("multipart/form-data"));
    // imagePart.setHeader(QNetworkRequest.ContentDispositionHeader, QVariant("form-data; name=\"xtage\""));

    // scenePath = scene.currentProjectPath();
    // sceneFile = scenePath + ".xtage"
    // //MessageLog.trace(sceneFile)
    // var file = new QFile(sceneFile);
    
    // var q_array = new QByteArray()
    // // data = {"type": "checkin", "file": file}
    // // var data_modified1 = JSON.stringify(data)
    // // var data_modified2 = q_array.append(data_modified1)

    // q_array.append(file)
    
    // MessageLog.trace(q_array)

    // QFile *file = new QFile("image.jpg");
    // file->open(QIODevice::ReadOnly);
    // imagePart.setBodyDevice(file);
    // file->setParent(multiPart);

    var network = new PythonManager()
    //var part = network.QHttpPart()
}