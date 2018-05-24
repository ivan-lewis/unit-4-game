$(document).ready(function () {

    // Variables
    var targetScore = 0;
    var playerScore = 0;
    var crystalValues = [];
    var wins = 0;
    var losses = 0;

    // =============================================
    // Reset game
    function resetGame() {
        // Get Random number between 19-120 for the target score
        targetScore = Math.floor((Math.random() * 120) + 19);
        // Push target value to HMTL
        $("#target-score").text(targetScore);

        // Reset values
        playerScore = 0;
        // Push player value to HTML
        $("#player-score").text(playerScore);
        crystalValues = [];

        // Set crystal values 
        for (var i = 0; i < 4; i++) {
            crystalValues.push(Math.floor(Math.random() * 12) + 1);
        };

    }

    // =============================================
    // Score checker
    function runScore() {
        if (playerScore === targetScore) {
            alert("You Win!");
            wins++;
            $("#wins").text(wins);
           resetGame();
        }
        else if (playerScore > targetScore) {
            alert("You lose!");
            losses++;
            $("#losses").text(losses);
            resetGame();
        };
    }
// =============================================
    resetGame();

    // // Add values to crystals and check score
    $("#blue-crystal").on("click", function(){
        alert("you clicked blue")
        // playerScore += crystalValues[0];
        // $("#player-score").text(playerScore);
        // runScore();
    };
    
    // $("#clear-crystal").on("click", function () {
    //     playerScore += crystalValues[1];
    //     $("#player-score").text(playerScore);
    //     runScore();
    // };

    // $("#purple-crystal").on("click", function () {
    //     playerScore += crystalValues[2];
    //     $("#player-score").text(playerScore);
    //     runScore();
    // };

    // $("#titanium-crystal").on("click", function () {
    //     playerScore += crystalValues[3];
    //     $("#player-score").text(playerScore);
    //     runScore();
    // };

})