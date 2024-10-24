import { unmarshall } from '@aws-sdk/util-dynamodb';

type DynamoDBEvent = {
    eventID: string;
    eventName: string;
    eventVersion: string;
    eventSource: string;
    awsRegion: string;
    dynamodb: {
        ApproximateCreationDateTime: number;
        Keys: {
            SK: {
                S: string;
            };
            PK: {
                S: string;
            };
        };
        NewImage: {
            SK: {
                S: string;
            };
            PK: {
                S: string;
            };
        };
        SequenceNumber: string;
        SizeBytes: number;
        StreamViewType: string;
    };
    eventSourceARN: string;
};

export const lambdaHandler = async (event: DynamoDBEvent[]): Promise<any> => {

    console.log('event', event);

    const response = [];
    for (const record of event) {
        response.push(unmarshall(record.dynamodb.NewImage));
    }

    return response;
};
