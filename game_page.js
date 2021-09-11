p1_name = localStorage.getItem("player1");
p2_name = localStorage.getItem("player2");

p1_score = 0;
p2_score = 0;

document.getElementById("p1").innerHTML = p1_name;
document.getElementById("p2").innerHTML = p2_name;

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("p_question").innerHTML = "Question turn : " + p1_name;
document.getElementById("p_answer").innerHTML = "Answer turn : " + p2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    charAtC1 = word.charAt(1);
    length_divide_two = Math.floor(word.length / 2);
    charAtC2 = word.charAt(length_divide_two);
    length_minus_1 = word.length-1;
    char_AtC3 = word.charAt(length_minus_1);
    remove_charAt1 = word.replace(charAtC1, "_");
    remove_charAt2 = remove_charAt1.replace(charAtC2, "_");
    remove_charAt3 = remove_charAt2.replace(char_AtC3, "_");

    question_word = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box' >";
    button_check = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + button_check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value= "";
}

q_turn = "player 1";
a_turn = "player 2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (word == answer) {
       if (a_turn == "player 1") {
           p1_score = p1_score +1;
           console.log("p1_score" + p1_score);
           document.getElementById("p1_score").innerHTML = p1_score; 

       } else {
           p2_score = p2_score + 1;
           console.log("p2_score" + p2_score);
           document.getElementById("p2_score").innerHTML = p2_score;
       }
    }

    if (q_turn == "player 1") {
        q_turn = "player 2";
        document.getElementById("p_question").innerHTML = "Question Turn : " + p2_name;
    } else if  (q_turn == "player 2"){
     q_turn = "player 1";
     document.getElementById("p_question").innerHTML = "Question Turn : " + p1_name;
    }

    if (a_turn == "player 1") {
        a_turn = "player 2";
        document.getElementById("p_answer").innerHTML = "Answer Turn : " + p2_name;
    } else if (a_turn == "player 2") {
     a_turn = "player 1";
     document.getElementById("p_answer").innerHTML = "Answer Turn : " + p1_name;
    }
    document.getElementById("output").innerHTML = "";
}