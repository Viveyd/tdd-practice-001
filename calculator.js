export default class Calculator{

    add(...args){
        return args.reduce((sum, n) => Array.isArray(n) ? sum + this.add(...n) : sum + n, 0);
    }

    subtract(...args){
        if(Array.isArray(args[0])) args[0] = this.subtract(... args[0]);
        return args.reduce((diff, n) => Array.isArray(n) ? diff - this.subtract(...n): diff - n);
    }

    multiply(...args){
        return args.reduce((prod, n) => {
            if(Array.isArray(n)){
                const multiplier = n.reduce((acc, cur) => Array.isArray(cur) ? acc * this.multiply(cur) : acc * cur);
                return prod * multiplier;
            }
            else return prod * n;
        }, 1);
    }

    divide(...args){
        if(Array.isArray(args[0])) args[0] = this.divide(...args[0]);
        return args.reduce((quot, n) => Array.isArray(n) ? quot / this.divide(...n) : quot / n);
    }
}