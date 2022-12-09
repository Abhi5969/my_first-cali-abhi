const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')




router.get('/test-you', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Abhinandan')
    console.log("email from employee module", employee.myEmail)
       
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    res.send('any dummy text')
});
const login=require('../logger/loger')
const print=require('../util/helper')
const info=require('../util/helper')
const Trim=require('../validator/formatter')
const _=require('lodash')
router.get('/test-me', function(req, res){
    login.mylog("Abhinandan")
    print.help()
    info.Batchinfo('Californium, W3D4, the topic for today is Nodejs module system')
    Trim.formatter()
    console.log("<Problem-4>")
    const months=[January,February,March,April,May,June,July,August,September,October,November,December]
    function chunkArr(months,size)
    {   let finalArr=[]
        for (let i=0;i<months.length;i+=size)
        {   
            finalArr.push(months.slice(i,i+size))
           
        }
        console.log(finalArr) ;
    }
    console.log(chunkArr(months,3))
     const nums=[3,5,7,9,11,13,15,19,33,45]
     let result=_.tail(nums)
     console.log(`print use tail function-${result}`)
     const arr1=[3,4,3,6]
     const arr2=[1,2,7,6]
     const arr3=[20,4,2,66]
     const arr4=[67,1,9,12,8]
     const arr5=[2,3,9,11,22,5]
     const resultArr=_.union(arr1,arr2,arr3,arr4,arr5)
     console.log(`Print use union funtion-${resultArr}`)
     const newArr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     const obj=_.fromPairs(newArr)
     console.log(obj)
    res.send("very important text")
})


module.exports = router;