

function findMatching(drivers, Bob) {
    return drivers.filter(match => 
        match.toLowerCase() === Bob.toLowerCase()
    )

}

function fuzzyMatch(drivers, B) {
    return drivers.filter( match => 
        match.toLowerCase().indexOf(B.toLowerCase()) === 0
    )
}

function matchName(drivers, Adri) {
    return drivers.filter( driver => driver.name == Adri)

}