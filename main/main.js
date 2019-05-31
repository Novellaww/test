module.exports = function main(inputs) {
    // write your code here...
    double price;
    if(inputs[0]<=2) {
        price=6+inputs[1]*0.25;
    }
    else if(inputs[0]>2&&inputs[0]<=8) {
        price=(inputs[0]-2)*0.8+6;
        price=price++inputs[1]*0.25
    }
    else {
        price=6+6*0.8+(inputs[0]-8)*1.2;
        price=price++inputs[1]*0.25
    }
    
    return price;
};
