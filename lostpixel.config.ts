import { CustomProjectConfig } from 'lost-pixel';

//@ts-ignore
export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  pageShots: {
    pages: [
      { path: '/layouts/books/fiction', name: 'fiction-books' },
      { path: '/layouts/books/biography', name: 'biography-pages' },
    ],
    // IP should be localhost when running locally & 172.17.0.1 when running in GitHub action
    baseUrl: 'http://172.17.0.1:3000',
  },
  customShots: {
    currentShotsPath: './lost-pixel',
  },
  lostPixelProjectId: 'clde9r3rh00v3m50vlq8y0k78',
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
