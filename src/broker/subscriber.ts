import * as mqtt from 'mqtt';
import { EVENTS } from './topic';
import { mockDatabase } from '../messages/mock';

export const subscriber = () => {
  const client = mqtt.connect('mqtt://127.0.0.1:1883');
  client.on('message', (topic, message) => {
    console.log(message.toString());
    const data = JSON.parse(message.toString());
    mockDatabase.push(data);
  });

  client.on('connect', () => {
    client.subscribe(EVENTS.MESSAGE);

    console.log('Client subscribed ');
  });
};
