import { log } from 'log';
import { S3 } from '@aws-sdk/client-s3'
export const handler = async (event) => {
 
    const record = event.Records[0];
    const Bucket = record.s3.bucket.name;
    const Key = record.s3.object.key;

  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};