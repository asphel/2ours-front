import { New_Rocker } from "next/font/google";
import { Preview } from "./models";

const queryRecipeName = `
{
    recipeCollection {
      items {
        name
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
    const fetchResponse = await queryGraphQL(queryRecipeName);
    const extractedItems = extractArrayItems(fetchResponse)

    const arrayItems = extractedItems.map(item => {
        return {
            type : 'dessert',
            name : item.name,
            description : "blublu",
            autor : "Pierre",
            image: "blublu"
        }
    })

    return arrayItems as Preview[]
}