import { New_Rocker } from "next/font/google";
import { Preview } from "./models";
import { it } from "node:test";

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
        mainPicture {
          url
        }
      }
    }
  }`




async function queryGraphQL(query:string) : Promise<any> {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/44w6vr2nfirj/environments/master`,
        {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer iM-uvOk1mx-8psD6C4VZ7XeNxnEHY7CtS1AXmcZ59Ps`
            },
            body : JSON.stringify({query}),
            next : { tags: ['posts'] }
        }
    ).then((response) => response.json())
}

function extractArrayItems(fetchResponse:any) : any[] {
    return fetchResponse?.data?.recipeCollection?.items
}

export async function fetchRecipePreview() : Promise<Preview[]> {
    const fetchResponse = await queryGraphQL(queryAllRecipesPreview);
    const extractedItems = extractArrayItems(fetchResponse)

    const arrayItems = extractedItems.map(item => {
        return {
            id : item.sys.id,
            type : item.type,
            name : item.name,
            description : item.shortDescription,
            publishedAt : item.sys.publishedAt,
            firstPublishedAt : item.sys.firstPublishedAt,
            autor : item.autor,
            mainPicture: item?.mainPicture?.url
        }
    })

    console.log(arrayItems)

    return arrayItems as Preview[]
}