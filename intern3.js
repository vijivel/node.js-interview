const cron = require('node-cron');


function sendEmailNotifications() {
    console.log('Sending email notifications...');
}


cron.schedule('0 8 * * *', () => {
    sendEmailNotifications();
}, {
    timezone: 'Your/Timezone' 
});


cron.schedule('0 9 * * 1', () => {
    sendEmailNotifications();
}, {
    timezone: 'Your/Timezone' 
});


console.log('Cron jobs scheduled successfully.');
