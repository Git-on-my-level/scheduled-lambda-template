#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { LambdaStack } from "../lib/lambda-stack.js";

const app = new cdk.App();
new LambdaStack(app, "CurvePoolAlertsStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || "us-east-1",
  },
});
