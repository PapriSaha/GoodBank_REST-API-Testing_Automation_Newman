const newman = require('newman');

newman.run({
    collection: require('./Collection/Good-Bank-REST-API-Automation.postman_collection.json'),
    environment: require('./Environment/Good-Bank-REST-API-Automation.postman_environment.json'),
    reporters: ['cli', 'html'],
    reporter: {
        html: {
            export: './Report/Good-Bank-REST-API-Automation-Newman-Report.html'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
