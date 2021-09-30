const firstName = 'Mikk'
const BirthDay = new Date('1989', '11', '17')
const hobbies = ['swimming', 'computer games', 'boxing']
const days = {
    firstName: firstName,
    birthDay: BirthDay.getDate(),
    birthMonth: BirthDay.getMonth(),
    birthYear: BirthDay.getFullYear(),
    hobies: hobbies
}

const birthday = days.birthDay + '.' + days.birthMonth + '.' + days.birthYear

console.log(birthday)