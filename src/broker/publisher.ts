import * as mqtt from 'mqtt';
import { EVENTS } from './topic';

export const publisher = (message) => {
  const client = mqtt.connect('mqtt://127.0.0.1:1883');
  return client.on('connect', () => {
    if (message.title) {
      const messageString = JSON.stringify({ valid: true, ...message });
      client.publish(EVENTS.MESSAGE, `${messageString}`);
    } else {
      const messageString = JSON.stringify({ valid: false, ...message });
      client.publish(EVENTS.BAD_REQUEST, `${messageString}`);
    }
  });
};
