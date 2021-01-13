// find all the users that have not been linked
const allUsers = [
    {
        id: 100,
        name: "Qasim Salam"
    },
        {
        id: 101,
        name: "Neelam Anwar"
    },
        {
        id: 102,
        name: "Saad Javaid"
    },
        {
        id: 103,
        name: "Talha Masood"
    },
        {
        id: 104,
        name: "Ali Bilal"
    },
        {
        id: 105,
        name: "Zain"
    },
    {
        id: 106,
        name: "Talal Ali"
    },
        {
        id: 107,
        name: "Bilal Zain"
    },
        {
        id: 108,
        name: "Mueez Ali"
    },
];

const linked = [
    {
        id: 106,
        name: "Talal Ali"
    },
    {
        id: 108,
        name: "Mueez Ali"
    },
]


const filterUsers = (allUsers , linked) => {
    const array = allUsers.filter(user => {
        return user.id !== linked[0].id && user.id !== linked[1].id
    })
    return array
}

console.log(filterUsers(allUsers , linked))
