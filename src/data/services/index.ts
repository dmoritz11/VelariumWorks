import { broadcastService } from './broadcast';
import { mediaService } from './media';
import { eventsService } from './events';
import { contentService } from './content';

export * from './types';
export const services = [
  broadcastService,
  mediaService,
  eventsService,
  contentService
];