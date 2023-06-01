
**TODO**: Update prompt so it works

Create a Deno function that looks like this `export default async (request: Request) : Promise<Response> => {}` . Here is also a curl command of an example request `curl -d '{"metadata":"some metadata", "note":{"title":"title","content":"content","source":"source"}}' -H "Content-Type: application/json" -X POST http://localhost:8000/`. Where this function is called when the user runs a slash command within the Fleeting Notes app from the current note (which is sent as "note" in the json request) and "metadata" is the metadata is a string which can be set by the user within the Fleeting Notes app.

Given the above knowledge, create a Deno function with the following prompt:


