import { GameList } from "./games.js";
import { SongList } from "./songs.js";
import { JobList } from "./jobs.js";

const parentHTMLElement = document.querySelector(".content")
parentHTMLElement.innerHTML += GameList();
const parentHTMLElement2 = document.querySelector(".next-section")
const parentHTMLElement3 = document.querySelector(".final-section")
parentHTMLElement2.innerHTML += SongList();
parentHTMLElement3.innerHTML += JobList();
