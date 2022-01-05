import * as mqtt from 'mqtt';
import { EVENTS } from './topic';

export const subscriber = () => {
  const client = mqtt.connect('mqtt://127.0.0.1:1883');
  client.on('message', (topic, message) => {
    console.log(message.toString());
  });

  client.on('connect', () => {
    client.subscribe(EVENTS.MESSAGE);

    console.log('Client subscribed ');
  });
};
