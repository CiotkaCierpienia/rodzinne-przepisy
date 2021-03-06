export * from './contentCategory.service';
import { ContentCategoryService } from './contentCategory.service';
export * from './contentMedia.service';
import { ContentMediaService } from './contentMedia.service';
export * from './contentRecipe.service';
import { ContentRecipeService } from './contentRecipe.service';
export * from './graphQL.service';
import { GraphQLService } from './graphQL.service';
export * from './internal.service';
import { InternalService } from './internal.service';
export * from './media.service';
import { MediaService } from './media.service';
export * from './searchAPI.service';
import { SearchAPIService } from './searchAPI.service';
export const APIS = [ContentCategoryService, ContentMediaService, ContentRecipeService, GraphQLService, InternalService, MediaService, SearchAPIService];
