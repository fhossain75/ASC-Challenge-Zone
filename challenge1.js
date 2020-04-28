// All Star Code Challenge Zone - 1
// Author: Faisal Hossain

function lottoCheck (ticket) {
    var moneyWon = 0; // amount of money won from the ticket
    var combinations = []; // all possible winning combinations in ticket
    // For-loop to check every row
    for (row = 0; row < ticket.length; row ++){
        if (ticket[row][0] == ticket[row][1] && ticket[row][0] == ticket[row][2]) {
            combinations.push(ticket[row][0]);
        }
    }
    // For-loop to check every column
    for (column = 0; column < ticket[0].length; column ++){
        if (ticket[0][column] == ticket[1][column] && ticket[0][column] == ticket[2][column]) {
            combinations.push(ticket[0][column]);
        }
    }
    // For-loop to calculate winning amount
    for (i = 0; i < combinations.length; i++) {
        if (combinations[i].toUpperCase() == "COPPER") {
            moneyWon += 100;
        }
        else if (combinations[i].toUpperCase() == "SILVER") {
            moneyWon += 200;
        }
        else if (combinations[i].toUpperCase() == "GOLD") {
            moneyWon += 300;
        }
        else if (combinations[i].toUpperCase() == "DIAMOND") {
            moneyWon += 500;
        }
        else if (combinations[i].toUpperCase() == "LUCKYSEVEN") {
            moneyWon += 777;
        }
        else {
        }
    }

    return moneyWon;
}
