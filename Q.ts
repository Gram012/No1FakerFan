export type QuestionPayload = {
    hash: string;
    responses: ["3+wi" | "3Nwi"];
    d: number;
};

/** This never changes */
export const QUEST_ID = "C3E9F901-FDE0-4B3D-BF86-CB5B196E908F";

// TODO: this will need to be computed per user
export const BEARER_AUTH =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiY29uc29sZSJdLCJleHAiOjE3MTc4MTAyNTQsImlzcyI6InN0Z2NzdCIsInNjb3BlIjoiQTA3NUU3QjYtMzM4RS00MkZBLTk1OEMtMDM0REMzRjYyOEM3Iiwic3ViIjoibG9yZHNoYXh4bmxiQGdtYWlsLmNvbSIsInV0IjoiYWN0aXZhdGlvbiJ9.zAQrSJLkEsb01hV0zirsXoeMxLvsVOnxeFUQE99XLAA";

// TODO: this will need to be computed per user
export const COMMON_HEADERS = {
    priority: "u=1, i",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
};
