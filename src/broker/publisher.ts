import * as mqtt from 'mqtt';
const client = mqtt.connect('mqtt://127.0.0.1:1883');
import { EVENTS } from './topic';

export const publisher = (message) => {
  return client.on('connect', () => {
    console.log('New Message: ', message);
    const messageString = JSON.stringify(message);
    if (message.title) {
      client.publish(EVENTS.MESSAGE, `Valid Message: ${messageString}`);
    } else {
      client.publish(EVENTS.MESSAGE, `Invalid Message: ${messageString}`);
    }
  });
};
