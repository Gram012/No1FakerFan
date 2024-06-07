import { BEARER_AUTH, COMMON_HEADERS, QUEST_ID } from "Q.js";

export const getProfileResults = () =>
    fetch(`https://console.stagecast.io/api/quests/${QUEST_ID}/profile`, {
        body: null,
        method: "GET",
        headers: {
            authorization: BEARER_AUTH,
            ...COMMON_HEADERS,
        },
    });
