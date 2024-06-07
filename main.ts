import * as Q0 from "./Q0.js";
import * as Q1 from "./Q1.js";
import * as Q2 from "./Q2.js";
import * as Q3 from "./Q3.js";
import * as Q4 from "./Q4.js";
import * as Q5 from "./Q5.js";
import * as Q6 from "./Q6.js";
import * as Q7 from "./Q7.js";
import * as Q8 from "./Q8.js";

await Q0.startOverRequest();

await Q1.doQ1();
await Q2.doQ2();
await Q3.doQ3();
await Q4.doQ4();
await Q5.doQ5();
await Q6.doQ6();
await Q7.doQ7();

const results = await Q8.getProfileResults();
console.log(await results.json());
