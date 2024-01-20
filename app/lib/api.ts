import { New_Rocker } from "next/font/google";
import { FullRecipe, Preview } from "./models";
import { it } from "node:test";
import {Document} from '@contentful/rich-text-types'

const queryAllRecipesPreview = `
{
    recipeCollection {
      items {
        sys {
          id
          publishedAt
          firstPublishedAt
        }
        name
        shortDescription
        type
        mainPicture {
          url
        }
      }
    }
  }`;




async function queryGraphQL(query:string) : Promise<any> {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body : JSON.stringify({query}),
            next : { tags: ['posts'] }
        }
    ).then((response) => response.json())
}

function extractArrayItems(fetchResponse:any) : any[] {
    return fetchResponse?.data?.recipeCollection?.items
}

function extractItem(fetchResponse:any) : any {
    return fetchResponse?.data?.recipeCollection?.items[0]
}

export async function fetchAllRecipesPreviews() : Promise<Preview[]> {
    const fetchResponse = await queryGraphQL(queryAllRecipesPreview);
    
    const extractedItems = extractArrayItems(fetchResponse)
    console.log(extractedItems)
    const arrayItems = extractedItems.map(item => {
        return {
            id : item.sys.id,
            type : item.type,
            name : item.name,
            shortDescription : item.shortDescription,
            publishedAt : item.sys.publishedAt,
            firstPublishedAt : item.sys.firstPublishedAt,
            autor : item.autor,
            mainPicture: item?.mainPicture?.url
        }
    })

    

    return arrayItems as Preview[]
}

export async function fetchFullRecipeById(id:string) : Promise<FullRecipe> {

    const query = `{
        recipeCollection (where : {
          sys: {
            id:"${id}"
          } }){
          items {
            name
            shortDescription
            fullDescription{
                json
            }
            mainPicture {
                url
            }
            sys {
                publishedAt
                firstPublishedAt                
            }
          }
        }
      }`;

      const response = await queryGraphQL(query)
      const recipe = extractItem(response)
      

      const fullDescription = recipe.fullDescription.json as Document;

      return {
        id : recipe.sys.id,
        type : recipe.type,
        name : recipe.name,
        shortDescription : recipe.shortDescription,
        fullDescription : fullDescription,
        publishedAt : recipe.sys.publishedAt,
        firstPublishedAt : recipe.sys.firstPublishedAt,
        autor : recipe.autor,
        mainPicture: recipe?.mainPicture?.url
    }
}