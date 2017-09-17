
## **Launch WorkFlow**

* Have at least 2 terminals up and running
* *make sure to commit changes as needed.*
* Before starting: 
    * Set up server folder.
    * Do step 1, 2, 3 of Angular Workflow Section
    * Then Do Step 0, 1, 2, 3 of Node Workflow Section
    * Then Do a Test Launch using the steps below.
#### Terminal 1
```
cd public
ng build -w
```
#### Terminal 2
```
cd ..
nodemon server.js
```
---

## **Node Server Initial Workflow**
0. Start git repo and ensure you have the right .gitignore settings.

1. Modify server.js. *Uncomment/comment sections, change folder names as needed.*

2. Determine required modules then **npm install**.
Terminal **npm install** Commands:
    ```
    npm init -y
    npm install express ejs body-parser mongoose --save
    npm install express-session --save
    npm install socket.io --save
    npm install moment --save
    npm install bcrypt --save
    ```

3. Modify database name in /server/config/mongoose.js

4. Establish model schemas and associations in /server/models. *Make sure to rename model files appropriately*
    ```javascript
    const Schema = mongoose.Schema;

    const SampleUserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required'],
            minlength: [5, 'Minimum of 5 characters only is required']
        },
        samples: [{type: Schema.Types.ObjectId, ref: 'Item'}]
    }, {timestamps: true})
    const SampleUser = mongoose.model('SampleUser', SampleUserSchema);
    ```

5. Establish database service methods (i.e., CRUD methods) in /server/controllers. *Ensure that they are using correct Schemas. Name files appropriately*

    ```javascript
    let mongoose = require('mongoose');
    let User = mongoose.model('User');
    let Item = mongoose.model('Item');

    module.exports = {
        getAllUsers : (req, res) => {
            User.find({}, (error, users) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('successful response: get all users')
                    response.json(users);
                }
            });
        },
    }
    ```

6. Establish Server's API endpoints in /server/config/routes.js. *Import the proper files.*

7. Commit changes

8. Launch server. *Refer to Launch Workflow Section*

9. **_Repeat step 4, 5, and 6 as needed._**
---
## **Angular Initial Workflow**
1. Create angular app in your project folder.
    ```
    ng new public --routing
    ```
2. Remove git repo made by angular-cli
3. Modify your angular app's .gitignore by erasing /dist to allow /dist folder to be committed.
4. Test angular app with server by doing an initial **Launch**. *Refer to Launch Workflow Section*

5. Create components and nesting components as needed.
    ```
    ng g c component-name
    ```
6. Create your Service.
    ```
    ng generate service service-name
    ```
* Commit changes
---
#### **Inside your Angular files**
7. On your app.module.ts, import required modules.
    ```javascript
    // Basic Angular modules
    import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
    import { HttpModule } from '@angular/http'; // <-- Import HttpModule
    ```

8. Also on your **app.module.ts**, import your service.
    ```javascript
    import { SampleService } from './sample.service';
    ```

9. In your **app-routing.module.ts**, establish your routes and nested routes. 
    ```javascript
    { path: 'sample', pathMatch: 'full', component: SampleComponent },
    { path: '', redirectTo: '/sample' }
    ```

10. Modify your **sample.component.html** route links as needed.
    ```html
    <a [routerLink]="['sample']">Sample</a>
    ```

11. In your **sample.service.ts**: 
    * inject the http module then apply your api calls. 
        * *Http calls return observables. Convert to promises .toPromise() as needed*
    ```javascript
    import { Http } from '@angular/http';
    ```

12. On your **sample.component.ts**:
    * apply/modify your logic by establishing your properties, dependency injections
    * then apply/modify yourmethods for handling of promises/observables, and property modifications.
    ```javascript
    import 'rxjs'; // for handling observables and interacting with URL parameter changes
    ```

13. On your **sample.component.html**:
    * apply/modify the appropriate forms.
        * Bind the right model each input field.
        * Establish a #variable for each input field.
        * Assign Validations and use variable to display errors.
    * apply/modify display of data as needed using *ngIf and *ngFor and {{}}.
    * apply the proper data binding [] and event handlings ().

14. **_Repeat step 11, 12, and 13 as needed._**

---


### **Code References Section**
```javascript
// Basic Node modules
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
```
```javascript
// Optional Node modules
const session = require('express-session');
const moment = require('moment');
const bcrypt = require('bcrypt');
const io = require('socket.io').listen(server);
```

