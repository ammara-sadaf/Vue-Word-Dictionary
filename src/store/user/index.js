const defaultUsers = [
    {
        ID: 'max',
        name: 'Max Mastermind',
        mail: 'max.mastermind@natif.ai',
        
    },
    {
        ID: 'reynold',
        name: 'Reynold Runner',
        mail: 'reynold.runner@natif.ai',
        age: 25,
    },
    {
        ID: 'susan',
        name: 'Susan Superstar',
        mail: 'susan.superstar@natif.ai',
    },
    {
        ID: 'tommy',
        name: 'Tommy Thompson',
        mail: 'tommy.thompson@natif.ai',
    },
]

export default {
    state: {
        users: defaultUsers,
    },
    getters: {
        allUsers: state => state.users,
    },
}
