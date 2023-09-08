export default class Calculator{

    add(...args){
        return args.reduce((sum, n) => Array.isArray(n) ? sum + this.add(...n) : sum + n, 0);
    }

    subtract(...args){
        if(Array.isArray(args[0])) args[0] = this.subtract(... args[0]);
        return args.reduce((diff, n) => Array.isArray(n) ? diff - this.subtract(...n): diff - n);
    }

    multiply(...args){
        let acc = 1;
        for(let i = 0; i < args.length; i++){
            if(acc === 0) return 0;
            else if(Array.isArray(args[i])) acc *= this.multiply(...args[i]);
            else acc *= args[i];
        }
        return acc;
    }

    divide(...args){
        if(Array.isArray(args[0])) args[0] = this.divide(...args[0]);
        return args.reduce((quot, n) => Array.isArray(n) ? quot / this.divide(...n) : quot / n);
    }
}