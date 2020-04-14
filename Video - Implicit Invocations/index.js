'use strict';

const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({ debug: true });

app.intent('PedirProducto', (conv, { producto }) => {
    conv.ask('cuantas unidades de ' + producto + ' desea?');
});
app.intent('CantidadProducto', (conv, { number }) => {
    const productcost = number * 5;
    conv.ask('Perfecto! el costo total es ' + productcost);
    conv.ask('Desea terminar la compra?');
});
app.intent('ConfirmarCompra', (conv) => {
    conv.close('compra realizada! puede recoger sus productos en la salida.');
});
app.intent('PedirCantidadProducto', (conv, { number, producto }) => {
    const productcost = number * 5;
    conv.ask('Perfecto! el costo total por ' + number + ' ' + producto + ' es ' + productcost);
    conv.ask('Desea terminar la compra?');
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);