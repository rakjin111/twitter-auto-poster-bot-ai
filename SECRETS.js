//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "j37J0krgTpIaZSs0LFbsbFNgd";
const APP_SECRET = "pnOkTYombTYyuW07ddM55uVOrrPOQjPn8qVO8fTtyLzv0Km0gJ";
const ACCESS_TOKEN = "1858865448034373632-xg0yzQamPdJUzeKSLP5gyMFP5rwBZl";
const ACCESS_SECRET = "TBGXh4tmqIu4eLsaUgPV1CwuUgxqmRL0jYIBjEemEQ4LX";
const GROQ_API_KEY: "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";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GROQ_API_KEY,
};

module.exports = SECRETS;
