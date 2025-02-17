const fs = require('fs');
require('dotenv').config();

const data = {
    applicationName: process.env.APPLICATIONNAME,
    environment: process.env.ENVIRONMENT,
    containerRegistryName: process.env.CONTAINERREGISTRYNAME,
    rgName: process.env.RGNAME,
    subscriptionName: process.env.SUBSCRIPTIONNAME,
    enableReplication: process.env.ENABLEREPLICATION
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('Data written to data.json');