import { getGames } from "./database.js";

export const GameList = () => {
    let games = getGames();
    let htmlString = `<h1>Andy Hanks: Absolute Legend</h1>
    <div class="intro">
    <p>After spending 90 minutes or so talking with Andy, I'm convinced he is a legendary figure that I was pre-destined to learn more about.</p>
    
    <p>First of all, let's get something straight - call him Andy. If you're calling him Andrew, you're making him feel like he's in trouble or like you're being overly formal or something. Andy doesn't live his life like that, though. He doesn't want to be addressed like he's wearing a tuxedo and a monacle and telling you not to pass go or collect $200.</p>
    
    <p>He's a refined gentleman with vast experiences and knowledge, and a wealth of knowledge and stories to share, all tied together with an all-encompassing humility about him that invites people in regardless of their background, similarities, or differences.</p>

    <p>Again, I only spent half of the morning session speaking with him, and about a very limited scope of topics and ideas pertaining to his life, personality, and mind. But even a small sampling of someone's essence can give you a good sense of where they're coming from as a whole, and I was grateful for this experience to connect even in small way.</p>
    </div>

    <div class="games">
    <h3>Andy's Top 3 Favorite Games</h3>

    <p>A common interest of Andy and mine is games. While I talked mostly about video games, Andy enjoys tabletop and a wide variety of games. Again, our conversation wasn't extensive, but it was informative and genuinely fun nonetheless.</p>

    <ol>
    `
    for (const game of games) {
        htmlString += `<li><strong>${game.game}</strong><br><em>Why you even like this game though, dude?</em> ${game.desc}</li><br>
        `
    }

    htmlString += `</ol>
    </div>
    <div class="next-section"></div>
    <div class="final-section"></div>
    `

    return htmlString
}