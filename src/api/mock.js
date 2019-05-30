import Mock from 'mockjs'

Mock.mock('/productlist',{
    "number|1-100": 100
})

Mock.mock('/listMock',{
    "list|60":[{
        'date': '@date',
        'name': '@cname()',
        'address':'@region'
    }]
})

