import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "sensitive-artifact-notes"
    // TODO: This should be the artifact ID
    // KeyConditionExpression: "userId = :userId",
    // ExpressionAttributeValues: {
    //   ":userId": event.requestContext.identity.cognitoIdentityId
    // }
  };

  try {
    const result = await dynamoDbLib.call("scan", params);
    // Return the matching list of items in response body
    return success(result.Items);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}