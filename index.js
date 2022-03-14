let firstAnswer  = window.prompt('Do you head LEFT or RIGHT? Answer in all caps!')
if(firstAnswer === 'LEFT'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path? Answer FOLLOW or CONTINUE in all caps.`)
        if(secondAnswer === 'FOLLOW'){
            let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, 
            nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
            They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Answer STAY or SPREAD in all caps.`)
                if(thirdAnswer === 'STAY'){window.prompt(`You live happily amongst the cats for the rest of your days.`)}
                else if(thirdAnswer === 'SPREAD'){window.prompt(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, 
                which passes into legend nonetheless.`)}
                else{window.prompt(`Invalid entry.`)}}
        else if(secondAnswer === 'CONTINUE'){
            let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. 
            There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? Answer LADDER or STAIRCASE in all upper case.`)
                if(thirdAnswer === 'LADDER'){window.prompt(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. 
                Sheepish, you return home.`)}
                else if(thirdAnswer === 'STAIRCASE'){window.prompt('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')}
                else{window.prompt(`Invalid entry.`)}}
        else{window.prompt(`Invalid entry.`)}
}
else if(firstAnswer === 'RIGHT') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take? Answer PAST or AWAY in all caps.`)
        if(secondAnswer === 'PAST'){
            let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. 
        You only have a moment to respond, to stay or run. Answer STAY or RUN in all caps.`)
            if(thirdAnswer === 'STAY'){window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)}
            else if(thirdAnswer === 'RUN'){window.prompt(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)}
            else{window.prompt(`Invalid Entry`)}}
        else if(secondAnswer === 'AWAY') {
            let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. 
            It is so beautiful that you decide you must either draw it or pick it. Which do you do? Answer DRAW or PICK in all caps.`)
            if(thirdAnswer === 'DRAW'){window.prompt(`You draw the flower, capturing only a fraction of its beauty with your quill. 
            You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, 
            recounting the story of your days as a sorcerer with the aid of the sketch.`)}
            else if(thirdAnswer === 'PICK'){window.prompt(`You pick the flower and bring it home, and all marvel at its brilliance. 
            However, over time it fades and eventually crumbles to dust.`)}
            else{window.prompt(`Invalid Entry`)}
        }
        else{window.prompt(`Invalid Entry`)}
}
else {window.prompt(`Invalid Entry`)}