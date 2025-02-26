# Scheduled Lambda Bot Template

A TypeScript AWS Lambda bot that runs on a schedule to perform some simple task.

It's like having an easy way to create cron jobs on AWS that cost almost nothing to maintain!

If this has helped you please consider giving it a star!

## Prerequisites

- Node.js v18 or later
- AWS CLI configured with appropriate credentials
- AWS CDK CLI installed globally (`npm install -g aws-cdk`)

## Setup

1. Install dependencies:
```bash
npm install
```

1. Build the project:
```bash
npm run build
```

1. Set up your own local config file:
```bash
# Copy the example config file
cp src/lambda/config.example.ts src/lambda/config.ts

# Edit the config file with your settings
```

1. Modify the Lambda configuration and trigger frequency: [lambda-stack.ts](lib/lambda-stack.ts)

## Testing

Run the bot locally:
```bash
npm run local
```

Run the test suite (will fail with no tests):
```bash
npm test
```

## Linting

The project uses ESLint with TypeScript support for code quality.

- Run linting check:
```bash
npm run lint
```

- Fix auto-fixable issues:
```bash
npm run lint:fix
```

## Local Development

- Build the project: `npm run build`
- Watch for changes: `npm run watch`
- Synthesize CloudFormation template: `npm run synth`
- Compare deployed stack with current state: `npm run diff`

## Deployment

### Manual Deployment

1. Make sure you have AWS credentials configured:
```bash
aws configure
```

2. Deploy the stack:
```bash
npm run deploy
```

## Project Structure

```
.
├── src/
│   └── lambda/           # Lambda function code
├── lib/                  # CDK infrastructure code
├── bin/                  # CDK app entry point
├── dist/                 # Compiled JavaScript
└── cdk.out/             # CDK output
