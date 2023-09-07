export default class Calculator{

    add(...args){
        return args.reduce((sum, n) => sum + n);
    }

    subtract(...args){
        return args.reduce((diff, n) => diff - n);
    }

    multiply(...args){
        return args.reduce((prod, n) => prod * n);
    }

    divide(...args){
        return args.reduce((quot, n) => quot / n);
    }
}