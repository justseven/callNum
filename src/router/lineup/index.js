
export default 
    {
        path: '/lineup',
        name: 'lineup',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('../../views/lineup/lineup.vue'))
                })
        },
    }
