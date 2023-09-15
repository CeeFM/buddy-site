import { getJobs } from "./database.js";

export const JobList = () => {
    let jobs = getJobs();
    let htmlString = `<h3>Andy's Top 3 Worst Jobs</h3>

    <p>So we had knocked it out of the park completely for our first two topics. How were we going to ensure we finished this little mini project that Tommy gave us off with an equally strong and relateable topic?</p>

    <p>Then it hit us like a ton of bricks - everybody has had bad jobs. Sometimes they happened at times in our lives that were otherwise good, or gave us experiences or taught us lessons that we're grateful for, but c'mon dude - we all have had just terrible, no good, totally hogwash jobs. And they're fun to talk and connect about, too!</p>

    <ol class="jobs">
    `
    for (const job of jobs) {
        htmlString += `<li><strong>${job.job}</strong><br><em>Why was it so bad?</em> ${job.desc}</li><br>
        `
    }

    htmlString += `</ol>
`
    return htmlString
}