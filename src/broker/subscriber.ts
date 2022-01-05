import * as mqtt from 'mqtt';
const client = mqtt.connect('mqtt://127.0.0.1:1883');
import { EVENTS } from './topic';

export const subscriber = () => {
  client.on('message', (topic, message) => {
    console.log(message.toString());
  });

  client.on('connect', () => {
    client.subscribe(EVENTS.MESSAGE);

    console.log('Client subscribed ');
  });
};
