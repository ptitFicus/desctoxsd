const line = /^(\w+) +(NOT NULL)? (\w+)\(?(\d*) ?.*\)?.*$/

function parseLine(str) {
    const match = str.match(line)
    if(!match){
        throw new Error('Failed to parse line ' + str)
    }
    const [_, name, notNull = false, type, size] = match

    return {
        name,
        notNull,
        type,
        size: size ? size : undefined
    }
}

module.exports = parseLine;
