// Javascript Return Statement
function person(name, gender) {
    let output;
    if (gender === 'male') {
        output = `Mr . ${name}`
    } else if (gender === 'female') {
        output = `Ms . ${name}`
    }
    return output;
}

const personIs = person('Tasib', 'male');
console.log(personIs);


function example() {
    return {
        name: 'Tasib',
        skills: ['JavaScript', 'React', 'python'],
        print: function () {
            console.log(this.name, this.skills);
        }
    }
}
const obj = example();
console.log(obj);
obj.print();
