require('dotenv').config();

let RtmClient = require('@slack/client').RtmClient;
let RTM_EVENTS = require('@slack/client').RTM_EVENTS;
let RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;
let MemoryDataStore = require('@slack/client').MemoryDataStore;

let rtm = new RtmClient(process.env.SLACK_TOKEN, {
    dataStore: new MemoryDataStore()
});

rtm.on(RTM_EVENTS.MESSAGE, (message) => {
    let dm = rtm.dataStore.getDMByName(process.env.SLACK_USER);

    rtm.sendMessage('yo', dm.id).then((reply) => {
        console.log(reply);
    });
});

rtm.start();
