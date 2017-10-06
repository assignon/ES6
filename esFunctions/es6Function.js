class esFunctions
{


    constructor()
    {

        this.spread();

    }


    globalFunc(func1, func2, func3)
    {



    }


    getArgsArr()
    {



    }


    args(...params)
    {

        return console.log(params);

    }


    rest(...argus)
    {

       let argsArr = [];
       argsArr.push(argus);
       return argus;

    }


    spread()
    {

       let getRestArgs = this.rest('yaya','nono','gile');
       let rest = 'param';
       let conbination = [...getRestArgs, rest];
      //alert(conbination.prototype.length);
       return console.log(conbination);

    }



}
// const esFunction = new esFunctions(esFunction.rest('yaya','nono','gile'));
const esFunction = new esFunctions();
//esFunction.demoProto();
