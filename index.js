const AWS = require('aws-sdk');

// load AWS credentials
AWS.config.loadFromPath('./config.json');

// check whether credentials loaded correctly
AWS.config.getCredentials(function(err) {
	if(err)
		console.log(err.stack);
	else
		console.log("Access key:", AWS.config.credentials.accessKeyId);
});

// rest of our application code involving AWS services