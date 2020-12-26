import { ScullyConfig } from '@scullyio/scully';
import { environment } from './src/environments/environment';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-recipes-starter',
  outDir: './dist/static',
  routes: {
    '/recipe/:slug': {
      type: 'json',
      slug: {
        url: 'https://api.flotiq.com/api/v1/content/recipe?hydrate=1',
        property: 'slug',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => rawData.data
      }
    },
    '/category/:slug/:page': {
      type: 'json',
      slug: {
        url: 'https://api.flotiq.com/api/v1/content/recipe?page=1&limit=9&hydrate=1&filter=',
        property: ['slug', 'page'],
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => {
          const pages = [];
          for (let i = 1; i <= rawData.total_pages; i++) {
            pages.push({page: i});
          }
          return pages;
        }
      }
    },
    '/:page': {
      type: 'json',
      page: {
        url: 'https://api.flotiq.com/api/v1/content/recipe?page=1&limit=9&hydrate=1',
        property: 'page',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => {
          const pages = [];
          for (let i = 1; i <= rawData.total_pages; i++) {
            pages.push({page: i});
          }
          return pages;
        }
      }
    }
  }
};
