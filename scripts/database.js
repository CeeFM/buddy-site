const database = {
    songs: [
        {
            song: "Master of Puppets"
        },
        {   
            song: "Black Number One"
        },
        {   
            song: "Where Eagles Dare"
        },
    ],
    games: [
        {
            game: "Dungeons and Dragons",
            desc: "You can do literally anything in this game. The only limit is your imagination."
        },

        {  
            game: "Stars Wars Galaxies",
            desc: "I mean it's Star Wars, dude. To quote Andy, give me a lightsaber and I'm good."
        },

        {
            game: "Detroit Become Human",
            desc: "You get to play as androids, the world is very cool, well constructed."
        }
    ],

    worstJobs: [
        {
            job: "Pizza Hut - Prep Cook",
            desc: "Only there for day, really bad management, hardly there or accessible",
        },
        {  
            job: "Dirty Ernie's Rib Pit - Bus Boy / Dishwasher, Promoted to Prep Cook for Appetizers",
            desc: "Treated the servers and front end really well, but the back of house people were treated so poorly by comparison. Still one of worst jobs, but one benefit was hollowing out pumpernickel and filling it with chicken and cheese, and then deep fried.",
        },
        {   
            job: "Eddie Out Eatery - Buffet at a Rafting Company - Prep Cook Specializing in Scrambled Eggs",
            desc: "They were petty, they fired the only competent person in the kitchen based on an outside disagreement. It was a first real job."
        }
    ]
}

export const getSongs = () => {
    return database.songs.map(copyOfSingleSongObject => ({...copyOfSingleSongObject}))
}

export const getGames = () => {
    return database.games.map(copyOfSingleGameObject => ({...copyOfSingleGameObject}))
}

export const getJobs = () => {
    return database.worstJobs.map(copyOfSingleJobObject => ({...copyOfSingleJobObject}))
}