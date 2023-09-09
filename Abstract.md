- What is the difference between the primary key and index?
    - Primary Key:  A primary key is column in database table that is unique and identifies each row in the table. It is a constraint and ensures that no tow row have the same values in the primary key culumn.
  Index : In the database , an index is a data structure that speeds up the query and data retrieval operations on a table or collection.It maps the values in indexed column to the corresponding rows in the table. It can be created on more than one column hence it is very essential to desian a suitable indexing for optimization. 

-  What is the difference between GET and POST methods in PHP?
    - GET : Data is sent in the URl, visible to users, it is limited in data size, suitable for non-sensitive data retrieval, and sometimes multiple request can have the same result due to cashing .
    POST : In the ,posst method the data is sent in the request body, its not visible in the URl, same meaning of sending the data, as well it has capabilities of taking array and object in case of No-SQl database. We dont not apply cashing mechanism in the post method because for each request the data may differ or have different effects.

- What is the difference between include() and require() functions in PHP?
    - These modeuls are used to include external module in the current PHP scripts. They both have some difference :
    inculde() : So basically this function include file and continues the executing the script even if the included file is not found or gets any error. If the file is not found, it emits a warning but allows the scrip to continue.
    require( ) :  this function is much strict than the include(). If the file is not found or emits any error, then this function stops scrips execution. If the included file contains function or var, they can be used in the script after inclusion. We should use this function in the critical functionality.

-  What's the difference between useState and useContext?
    - useState() : Its a react hook for managing the local variable and component states. It allows user to declare and update state throught the component. It's updatation and declaration in only limited to the component where it is declared. We can say it is only conponent level state maganement. Eg: input, toggles.
    useContext() : This hook is used for accessing and consuming values fromt he react context. That means we cae create a global context to share the state. 

-  What are the common issues of the slow response of the query? Can you give us the possible solutions or prevention of the cause?
    - There can be many possible reason of a slow response query, Example:
    1. Poor indexing or lack of indexing : Basicaly to boost up the speed of query we apply the indexing, but the improper way of indeing on the unwanted column can be a cause of slow query.
    2. Query : Impoper design of the query may reduce the retrievel speed, too much joins, and subqueries can slow down the query.
    3. System or Hardware : insufficient capacity of the system is one reason that is too direct or intuitive.
    4. Instances or high concurrency may slow down the query.
    5. Network latency
    5. Unnccessary data retrievel, means that the column we don't need there we should exclude that.
    - Prevention
    1. Geolocation of the database
    2. A proper indexing design will boost up the query untimately,  and we should only index whose columns which are friquently used in the query.
    3. A suffiecient capacity of the CPUis needed, or disl input/output will should be fast.
    4. Proper query deigning, by avoiding the unnecessary subqueries, joins.
    5. Regulary checking of the index and moitoring their statics.
    6. We can use CDN to reduce latency.

- How to prevent an unwanted error to be seen in the user side?
    1. Proper calling the api and using the try, catch block to handle errors.
    2. Sometime we dont have a proper error message from the backend, in that case we can use the costum error messages.
    3. Proper use of the status code in case of errors, to show the type of error, like  'not found'
    4. We should try the form caludation before making any request to avoid any error on the server side.
    5. Indirect Failure: In case we have integrated to the third-party api and that is not available. in that case instead of showing the error we can handle that by proper notification or message to the user.
    6. User education is very must, when we thing there can be a feature thats very new, by the advertiesement or messages on the dashboard we can educate the users as well.

- What's your strategy on debugging an erroneous code?
    1. Understanding the error message of the sourse of error, thats saves a large time. We can also re-run the same issue to validate the error.
    2. Once we confirmed about the source about the error, now we canlook at the error message and, stack trace in console.
    3. Then it comes the check the code or review the code, there can be small mistake syntax, typos or any run-time related mistakes.
    4. Use debugging tools
    5. We can issolate the issue, means which code has no issue we can issolate by commenting 
    6. There is sometime dependencies are the major issue, if ther re missing or the there version in not compatible with the application or system.
    7. Version controlling
    8. After changing the code , we hould test again again.
    9. Familiarity with the document is must.

- When an internal server error is return in the user side, how do you determine the issue?
    1. Check the error message.
    2. Try to access the server logs, this can provide detail about the error or issue.
    3. Error code : any kind of the error in the code in not accaptable, so i check the code first. Exmaple if there is any issue in ost request, this can also involve error in schema design or validation failure.
    3. Dependencies of the enviornment, libraries, and external APIs are the main sources to run the application, so I check them.
    4. Try to log when it seems to be an issue in the flow and execution before creating or saving any document or table.
    5. I check the recent changes, they might be relevent to the other methods or global variiables.
    6. I check dependencies and third-party-libraries, sometime they dosn't work like the documentations, it based on how we are using them.
    7. Ask for the help, and try to check the error message on the google.
    8. Refers to the documentations, blogs, there are chances of someone already encountred with those error.
