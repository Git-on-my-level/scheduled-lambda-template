#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { LambdaStack, ProjectName } from "../lib/lambda-stack.js";

const stackName = ProjectName + "Stack";

const app = new cdk.App();
new LambdaStack(app, stackName, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || "us-east-1",
  },
});
