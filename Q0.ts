import { BEARER_AUTH, COMMON_HEADERS, QUEST_ID } from "./Q.js";

export const startOverRequest = () =>
    fetch(`https://console.stagecast.io/api/quests/${QUEST_ID}/playNewRound`, {
        method: "PUT",
        body: '{"token":"broken_token"}',
        headers: {
            authorization: BEARER_AUTH,
            ...COMMON_HEADERS,
        },
    });
