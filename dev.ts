/** This never changes */
export const QUEST_ID = "C3E9F901-FDE0-4B3D-BF86-CB5B196E908F" as const;

/** This never changes */
export const BASE_URL = `https://console.stagecast.io/api/quests/${QUEST_ID}` as const;

/** TODO: this will need to be changed for your account */
export const BEARER_AUTH =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiY29uc29sZSJdLCJleHAiOjE3MTc4MTAyNTQsImlzcyI6InN0Z2NzdCIsInNjb3BlIjoiQTA3NUU3QjYtMzM4RS00MkZBLTk1OEMtMDM0REMzRjYyOEM3Iiwic3ViIjoibG9yZHNoYXh4bmxiQGdtYWlsLmNvbSIsInV0IjoiYWN0aXZhdGlvbiJ9.zAQrSJLkEsb01hV0zirsXoeMxLvsVOnxeFUQE99XLAA";

/** TODO: this will need to be changed for your account */
const ANSWERS = ["3Nwi", "3+wi", "3Nwi", "3Nwi", "3Nwi", "3+wi", "3+wi"] as const;

/** TODO: Maybe you want to randomize this? */
export const USER_AGENT = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0",
} as const;

// Request a new play session
const startOverRequest = await fetch(`${BASE_URL}/playNewRound`, {
    method: "PUT",
    body: '{"token":"broken_token"}',
    headers: { ...USER_AGENT, Authorization: BEARER_AUTH },
});
console.log(await startOverRequest.json());

// Answer every questions in succession
for (const answer of ANSWERS) {
    const requestQuestion = await fetch(`${BASE_URL}/challenges/7`, {
        method: "GET",
        headers: { ...USER_AGENT, Authorization: BEARER_AUTH },
    });
    const json = (await requestQuestion.json()) as { hash: string };
    const submitAnswer = await fetch(`${BASE_URL}/challenges/7/response`, {
        method: "PUT",
        headers: { ...USER_AGENT, Authorization: BEARER_AUTH },
        body: JSON.stringify({ hash: json.hash, responses: [answer], d: 70 }),
    });
    console.log(await submitAnswer.text());
}

// Get your results
const results = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: { ...USER_AGENT, Authorization: BEARER_AUTH },
});
console.log(await results.json());
