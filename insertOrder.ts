import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

const tableName = 'OMS';

const dbClient = new DynamoDBClient({});

(async () => {
    const order = {
        id: 5,
        items: [
            {
                sku: 'X',
                quantity: 1
            }
        ]
    }

    try {
        await dbClient.send(new PutItemCommand({
            TableName: tableName,
            Item: marshall({
                PK: 'ORDER#' + order.id,
                SK: 'ORDER#' + order.id,
                type: 'ORDER',
                order
            }) 
        }));
    } catch (e) {
        console.log(e);
    }
    console.log('Created');
})();
