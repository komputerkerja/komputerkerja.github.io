class NeuralNetwork{
    constructor(neuronCounts){
        this.levels=[]
        for(let i = 0; i < neuronCounts.length - 1; i++){
            this.levels.push(new Level(
                neuronCounts[i],neuronCounts[i+1]
            ))
        }
    }

    static feedForward(givenInputs, network){
        let outputs = Level.feedForward(givenInputs, network.levels[0])
        for(let i = 1; i < network.levels.length; i++){
            outputs = Level.feedForward(outputs,network.levels[i])
        }
        return outputs;
    }
}

class Level{
    constructor(inputCount, outputCount){
        this.inputs = new Array(inputCount)
        this.outputs = new Array(outputCount)
        this.biases = new Array(outputCount)
        this.weights = []

        for(let i = 0; i < inputCount; i++){
            this.weights[i] = new Array(outputCount)
        }

        // Mengisi weights dan biases saat object ini dibuat
        Level.#randomize(this)
    }

    // Mengisi weights dan biases saat object ini dibuat
    static #randomize(level){
        // Mengisi Array Weights
        for(let i = 0; i < level.inputs.length; i++){
            for(let o = 0; o < level.outputs.length; o++){
                level.weights[i][o] = Math.random()*2-1
            }
        }
        // Mengisi Array Biases
        for(let o = 0; o < level.biases.length; o++){
            level.biases[o] = Math.random()*2-1
        }
    }

    // Mengisi Input Yang Menghasilkan Output
    static feedForward(givenInputs, level){
        // Mengisi Input
        for(let i = 0; i < level.inputs.length; i++){
            level.inputs[i] = givenInputs[i]
        }
        // Menghasilkan output
        for(let o = 0; o < level.outputs.length; o++){
            //Menjumlahkan antara input dan weights
            let sum=0;
            for(let i = 0; i < level.inputs.length; i++){
                sum += level.inputs[i] * level.weights[i][o]
            }
            //Membandingkan sum dengan biases
            if(sum > level.biases[o]) level.outputs[o] = 1;
            else level.outputs[o] = 0;
        }    
        return level.outputs
    }



}