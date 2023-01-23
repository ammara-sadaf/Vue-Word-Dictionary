const defaultTeams = [
    {
        name: 'A-Team',
        members: [
            'max',
            'reynold',
            'susan',
        ],
    },
    {
        name: 'B-Team',
        members: [
            'susan',
            'reynold',
            'max',
            'tommy',
        ],
    },
    {
        name: 'C-Team',
        members: [],
    },
  ]

export default {

    state: {
        teams: defaultTeams,
    },
    
    getters: {
        allTeams: state => state.teams
    },
    
    setters: {

    }
}
