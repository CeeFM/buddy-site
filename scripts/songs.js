import { getSongs } from "./database.js";

export const SongList = () => {
    let songs = getSongs();
    let htmlString = `<h3>Andy's Top 3 Favorite Songs</h3>

    <p>Another thing we share is a love for music. We both have history playing and creating it ourselves, but for this section we really wanted to focus on the act of listening and consuming it.</p>

    <p>While we have unique and differing tastes and preferences from one another, we were able to find common ground in abundance. The feelings and comforts and overall landscapes that a single song can create for you is a special and unmatchable quality. I also appreciated how immediately and confidently Andy knew his top 3 songs, in order, without hesitation.</o>

    <ol class="songs">
    `
    for (const song of songs) {
        htmlString += `<li><strong>${song.song}</strong></li>
        `
    }

    htmlString += `</ol>`

    return htmlString
}