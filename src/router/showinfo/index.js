
export default 
    {
        path: '/showinfo',
        name: 'showinfo',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('../../views/showinfo/showinfo.vue'))
                })
        },
    }
