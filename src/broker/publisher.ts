import * as mqtt from 'mqtt';
import { EVENTS } from './topic';

export const publisher = (message) => {
  const client = mqtt.connect('mqtt://127.0.0.1:1883');
  return client.on('connect', () => {
    const messageString = JSON.stringify(message);
    if (message.title) {
      client.publish(EVENTS.MESSAGE, `Valid Message: ${message.title}`);
    } else {
      client.publish(EVENTS.BAD_REQUEST, `Invalid Message: ${messageString}`);
    }
  });
};
