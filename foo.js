//const line = /^([A-Za-z]) +(NOT_NULL)? ?([a-zA-Z])\((\d)( CHAR)?\) *$/
const line = /^(\w+) +(NOT NULL)? (\w+)\(?(\d*) ?.*\)?.*$/

const match = "DATE_ENREGISTREMENT            DATE      ".match(line)

const [_, name, notNull, type, size] = match
console.log({name, notNull, type, size})
