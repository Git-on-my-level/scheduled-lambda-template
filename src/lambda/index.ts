import { ScheduledEvent } from "aws-lambda";
import { HelloService } from "./services/hello";

export const handler = async (
  event: ScheduledEvent
): Promise<{ statusCode: number; body: string }> => {
  console.log("Event:", JSON.stringify(event, null, 2));

  const helloService = new HelloService();

  const result = await helloService.helloWorld();
  console.log("Result:", result);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }),
  };
};
