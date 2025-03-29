const { TwitterApi } = require("twitter-api-v2");
const SECRETS = require("./SECRETS");
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: SECRETS.GROQ_API_KEY
});

const twitterClient = new TwitterApi({
  appKey: SECRETS.APP_KEY,
  appSecret: SECRETS.APP_SECRET,
  accessToken: SECRETS.ACCESS_TOKEN,
  accessSecret: SECRETS.ACCESS_SECRET,
});

async function generatePickOneQuestion() {
  const prompt = `Generate a fun "pick one" question for Twitter engagement. Examples:
  - "iPhone or Android? Choose one!"
  - "Beach or mountains? Which is better?"
  - "Coffee or tea? You decide!"
  
  Make it short (under 280 chars), engaging, and add emojis if relevant.`;

  const completion = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 100,
  });

  return completion.choices[0]?.message?.content || "Pizza or burgers? Decide now! 🍕🍔";
}

async function run() {
  try {
    const tweetText = await generatePickOneQuestion();
    console.log("Generated tweet:", tweetText);
    await sendTweet(tweetText);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function sendTweet(tweetText) {
  try {
    await twitterClient.v2.tweet(tweetText);
    console.log("Tweet sent successfully!");
  } catch (error) {
    console.error("Error sending tweet:", error);
  }
}

run();
