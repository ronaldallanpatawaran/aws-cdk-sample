import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS lambda resource here.
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'hello.handler' // file is "hello", function is "handler"
    });

    // defines an API GATEWAY REST API resource backend by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello // this is the lambda filename
    })
  }
}