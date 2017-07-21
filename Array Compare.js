    var cases=[{
                    arr1:[1,true,null],
                    arr2:[null,false,100],
                    expect:"similar"
                },{
                    arr1:[function(){},100],
                    arr2:[100,{}],
                    expect:"not similar"
                },{
                    arr1:[null,999],
                    arr2:[{},444],
                    expect:"not similar"
                },{
                    arr1:[window,1,true,new Date(),"hahaha",(function(){}),undefined],
                    arr2:[undefined,(function(){}),"okokok",new Date(),false,2,window],
                    expect:"similar"
                },{
                    arr1:[new Date()],
                    arr2:[{}],
                    expect:"not similar"
                },{
                    arr1:[window],
                    arr2:[{}],
                    expect:"not similar"
                },{
                    arr1:[undefined,1],
                    arr2:[null,2],
                    expect:"not similar"
                },{
                    arr1:[new Object,new Object,new Object],
                    arr2:[{},{},null],
                    expect:"not similar"
                },{
                    arr1:null,
                    arr2:null,
                    expect:"not similar"
                },{
                    arr1:[],
                    arr2:undefined,
                    expect:"not similar"
                },{
                    arr1:"abc",
                    arr2:"cba",
                    expect:"not similar"
                }];
            
       
            for(var i=0;i<cases.length;i++)
                if(arraysSimilar(cases[i].arr1,cases[i].arr2)) {
                    
                    document.write("case"+parseInt(i+1)+' similar'+"<br />")
                }                
            
            else{
                document.write("case"+parseInt(i+1)+' not similar'+"<br />")
            }
        
