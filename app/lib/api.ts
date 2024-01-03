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

export async function fetchRecipeName() : Promise<any> {
    const recipeName = await queryGraphQL(queryRecipeName);
    console.log(recipeName?.data?.recipeCollection.items)
    return recipeName
}