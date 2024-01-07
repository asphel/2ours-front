import {Document} from '@contentful/rich-text-types'

export type Preview = {
    id : string;
    name : string;
    type : 'dessert' | 'main' | 'cocktail';
    shortDescription : string;
    publishedAt : string;
    firstPublishedAt : string;
    autor : string;
    mainPicture : string;
};

export type FullRecipe = {
    id : string;
    name : string;
    type : 'dessert' | 'main' | 'cocktail';
    shortDescription : string;
    fullDescription : Document; 
    publishedAt : string;
    firstPublishedAt : string;
    autor : string;
    mainPicture : string;
};