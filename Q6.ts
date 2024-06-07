import { BEARER_AUTH, COMMON_HEADERS, QUEST_ID, QuestionPayload } from "./Q.js";

const makeQ6Answer = (hash: string): QuestionPayload => ({
    hash,
    responses: ["3+wi"],

    /**
     * Number of milliseconds since the question was rendered to submitting
     * answer.
     */
    d: 70,
});

export const doQ6 = async () => {
    const requestFirstQuestion = await fetch(`https://console.stagecast.io/api/quests/${QUEST_ID}/challenges/6`, {
        body: null,
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: BEARER_AUTH,
            ...COMMON_HEADERS,
        },
    });
    const json = (await requestFirstQuestion.json()) as { hash: string };
    const submitFirstAnswer = await fetch(`https://console.stagecast.io/api/quests/${QUEST_ID}/challenges/6/response`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            authorization: BEARER_AUTH,
            ...COMMON_HEADERS,
        },
        body: JSON.stringify(makeQ6Answer(json.hash)),
    });
    console.log(await submitFirstAnswer.text());
};
