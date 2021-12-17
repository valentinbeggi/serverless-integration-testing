export enum DynamoDBKeyType {
  HASH = "HASH",
  RANGE = "RANGE",
}

const { HASH, RANGE } = DynamoDBKeyType;

export const PRIMARY_KEY = "PK";
export const SORT_KEY = "SK";

export const CustomerTable = {
  Type: "AWS::DynamoDB::Table",
  Properties: {
    AttributeDefinitions: [
      { AttributeName: PRIMARY_KEY, AttributeType: "S" },
      { AttributeName: SORT_KEY, AttributeType: "S" },
    ],
    KeySchema: [
      { AttributeName: PRIMARY_KEY, KeyType: HASH },
      { AttributeName: SORT_KEY, KeyType: RANGE },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};
