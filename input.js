const core = require('@actions/core');
const { execSync } = require('child_process');
require('dotenv').config();

try {

    execSync('node generate.js', { stdio: 'inherit' });
    
    const applicationName = process.env.APPLICATIONNAME || core.getInput('applicationname');
    const environment = process.env.ENVIRONMENT || core.getInput('environment');
    const containerRegistryName = process.env.CONTAINERREGISTRYNAME || core.getInput('containerregistryname');
    const rgName = process.env.RGNAME || core.getInput('rgname');
    const subscriptionName = process.env.SUBSCRIPTIONNAME || core.getInput('subscriptionname');
    const enableReplication = process.env.ENABLEREPLICATION || core.getInput('enablereplication');

    console.log(`Application Name: ${applicationName}`);
    console.log(`Environment: ${environment}`);
    console.log(`Container Registry Name: ${containerRegistryName}`);
    console.log(`Resource Group Name: ${rgName}`);
    console.log(`Subscription Name: ${subscriptionName}`);
    console.log(`Enable Replication: ${enableReplication}`);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}