'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Image } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    function welcome(agent) {
        agent.add(`Bienvenido!`);
    }

    function fallback(agent) {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }

    function lavarmanos(agent) {
        const audioSong = 'https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3';
        agent.add(`Empiese mojandose las manos`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/00.PNG?alt=media&token=1186a45b-71d9-448d-be4f-381b249af326'));
    }

    function lavarmanos2(agent) {
        agent.add(`Frótese las palmas de las manos entre si`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/02.PNG?alt=media&token=13efb694-34c9-4c3c-ba88-06a2f7329d40'));
    }

    function lavarmanos3(agent) {
        agent.add(`Frotar mano derecha`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/03.PNG?alt=media&token=a969b9c1-b150-49fb-be76-64a826fbffd9'));
    }

    function lavarmanos4(agent) {
        agent.add(`Frotar las palmas de las manos con los dedos entrelazados`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/04.PNG?alt=media&token=24ee8433-da01-4fb1-ab3c-1a1140e8e67c'));
    }

    function lavarmanos5(agent) {
        agent.add(`Frotar el dorso de los dedos de una mano`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/05.PNG?alt=media&token=bb0f3709-399c-48da-9e54-b144ba7d7e74'));
    }

    function lavarmanos6(agent) {
        agent.add(`Frotarcon un movimiento circular el pulgar`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/06.PNG?alt=media&token=64ead02a-2f7d-426e-9ec5-be6e573461f5'));
    }

    function lavarmanos7(agent) {
        agent.add(`Frotar la punta de los dedos`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/07.PNG?alt=media&token=b0e24674-ff99-47b6-957b-61e8463ec09d'));
    }

    function lavarmanos8(agent) {
        agent.add(`Enjuagar las manos con agua`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/08.PNG?alt=media&token=6930dac7-bd0c-4895-a7a9-d84a00d29669'));
    }

    function lavarmanos9(agent) {
        agent.add(`Secar las manos con una toalla`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/09.PNG?alt=media&token=cce99f58-3ed2-433a-95da-9317d30734ba'));
    }

    function lavarmanos10(agent) {
        agent.add(`Cerrar el grifo con ayuda de la toalla`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/10.PNG?alt=media&token=bc0be58c-b4c5-4688-a3c6-4433ac5da06a'));
    }

    function lavarmanos11(agent) {
        agent.add(`Acabamos! sus manos están limpias`);
        agent.add(new Image('https://firebasestorage.googleapis.com/v0/b/handsinaction-erexol.appspot.com/o/11.PNG?alt=media&token=06677f94-a555-42c1-bcc5-df237c510b42'));
    }


    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('LavarManos', lavarmanos);
    intentMap.set('LavarManos2', lavarmanos2);
    intentMap.set('LavarManos3', lavarmanos3);
    intentMap.set('LavarManos4', lavarmanos4);
    intentMap.set('LavarManos5', lavarmanos5);
    intentMap.set('LavarManos6', lavarmanos6);
    intentMap.set('LavarManos7', lavarmanos7);
    intentMap.set('LavarManos8', lavarmanos8);
    intentMap.set('LavarManos9', lavarmanos9);
    intentMap.set('LavarManos10', lavarmanos10);
    intentMap.set('LavarManos11', lavarmanos11);


    agent.handleRequest(intentMap);
});