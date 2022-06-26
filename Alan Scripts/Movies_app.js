intent('What does this app do?', 'What can I do here?', "What's the purpose of this app?",
       reply('One can search trending movies, TV shows and even movies by a keyword and guess what, eveything is voice controlled. Try saying: "Show me some movies which have Spiderman in their titles."'));

// Latest Movies

intent(`(show|get|bring|give|list) (me|some|) (the|) (trending|) movies`, (p) => {
    p.play({command: "newMovies"})
    p.play(`Here are some of the (trending|popular) Movies`);
})

// Latest TV Shows

intent(`(show|get|bring|give|list) (me|some|) (the|) (trending|) TV shows`, (p) => {
    p.play({command: "newTVShows"})
    p.play(`Here are some of the (trending|popular) TV Shows`);
})

// Search

intent(`(Search|show|list|give|bring) (me|) (some|) movies (which have|) (on|) $(name* (.+))} (in|) (their titles|)`, (p) => {
    let query = p.name.value;
    p.play({command: "search", query})
    p.play(`Here are the results on ${p.name.value}`);
})

// Go Back

intent(`(Go|) back!`, (p) => {
    p.play("Sure, going back...")
    p.play({command: 'back' })
})