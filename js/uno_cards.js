

    /* ========THIS BEGINS THE DECK ASSIGNATION ========*/

    var deck = [
        // =============== RED DECK ================= //
        {
            name: "redZero",
            value: 0,
            color: "red"
        },
        {
            name: "redZero_also",
            value: 0,
            color: "red"
        },
        {
            name: "redOne",
            value: 1,
            color: "red"
        },
        {
            name: "redOne_also",
            value: 1,
            color: "red"
        },
        {
            name: "redTwo",
            value: 2,
            color: "red",
        },
        {
            name: "redTwo_also",
            value: 2,
            color: "red"
        },
        {
            name: "redThree",
            value: 3,
            color: "red"
        },
        {
            name: "redThree_also",
            value: 3,
            color: "red"
        },
        {
            name: "redFour",
            value: 4,
            color: "red"
        },
        {
            name: "redFour_also",
            value: 4,
            color: "red"
        },
        {
            name: "redFive",
            value: 5,
            color: "red"
        },
        {
            name: "redFive_also",
            value: 5,
            color: "red"
        },
        {
            name: "redSix",
            value: 6,
            color: "red"
        },
        {
            name: "redSix_also",
            value: 6,
            color: "red"
        },
        {
            name: "redSeven",
            value: 7,
            color: "red"
        },
        {
            name: "redSeven_also",
            value: 7,
            color: "red"
        },
        {
            name: "redEight",
            value: 8,
            color: "red"
        },
        {
            name: "redEight_also",
            value: 8,
            color: "red"
        },
        {
            name: "redNine",
            value: 9,
            color: "red"
        },
        {
            name: "redNine_also",
            value: 9,
            color: "red"
        },
        {
            name: "redSkip",
            value: 10,
            color: "red"
        },
        {
            name: "redSkip_also",
            value: 10,
            color: "red"
        },
        {
            name: "redReverse",
            value: 11,
            color: "red"
        },
        {
            name: "redReverse_also",
            value: 11,
            color: "red"
        },
        {
            name: "redDrawTwo",
            value: 12,
            color: "red"
        },
        {
            name: "redDrawTwo_also",
            value: 12,
            color: "red"
        },
        // ======================= GREEN DECK ===================== //
        {
            name: "greenZero",
            value: 0,
            color: "green"
        },
        {
            name: "greenZero_also",
            value: 0,
            color: "green"
        },
        {
            name: "greenOne",
            value: 1,
            color: "green"
        },
        {
            name: "greenOne_also",
            value: 1,
            color: "green"
        },
        {
            name: "greenTwo",
            value: 2,
            color: "green",
        },
        {
            name: "greenTwo_also",
            value: 2,
            color: "green"
        },
        {
            name: "greenThree",
            value: 3,
            color: "green"
        },
        {
            name: "greenThree_also",
            value: 3,
            color: "green"
        },
        {
            name: "greenFour",
            value: 4,
            color: "green"
        },
        {
            name: "greenFour_also",
            value: 4,
            color: "green"
        },
        {
            name: "greenFive",
            value: 5,
            color: "green"
        },
        {
            name: "greenFive_also",
            value: 5,
            color: "green"
        },
        {
            name: "greenSix",
            value: 6,
            color: "green"
        },
        {
            name: "greenSix_also",
            value: 6,
            color: "green"
        },
        {
            name: "greenSeven",
            value: 7,
            color: "green"
        },
        {
            name: "greenSeven_also",
            value: 7,
            color: "green"
        },
        {
            name: "greenEight",
            value: 8,
            color: "green"
        },
        {
            name: "greenEight_also",
            value: 8,
            color: "green"
        },
        {
            name: "greenNine",
            value: 9,
            color: "green"
        },
        {
            name: "greenNine_also",
            value: 9,
            color: "green"
        },
        {
            name: "greenSkip",
            value: 10,
            color: "green"
        },
        {
            name: "greenSkip_also",
            value: 10,
            color: "green"
        },
        {
            name: "greenReverse",
            value: 11,
            color: "green"
        },
        {
            name: "greenReverse_also",
            value: 11,
            color: "green"
        },
        {
            name: "greenDrawTwo",
            value: 12,
            color: "green"
        },
        {
            name: "greenDrawTwo_also",
            value: 12,
            color: "green"
        },

        // ====================== BLUE DECK ====================== //

        {
            name: "blueZero",
            value: 0,
            color: "blue"
        },
        {
            name: "blueZero_also",
            value: 0,
            color: "blue"
        },
        {
            name: "blueOne",
            value: 1,
            color: "blue"
        },
        {
            name: "blueOne_also",
            value: 1,
            color: "blue"
        },
        {
            name: "blueTwo",
            value: 2,
            color: "blue",
        },
        {
            name: "blueTwo_also",
            value: 2,
            color: "blue"
        },
        {
            name: "blueThree",
            value: 3,
            color: "blue"
        },
        {
            name: "blueThree_also",
            value: 3,
            color: "blue"
        },
        {
            name: "blueFour",
            value: 4,
            color: "blue"
        },
        {
            name: "blueFour_also",
            value: 4,
            color: "blue"
        },
        {
            name: "blueFive",
            value: 5,
            color: "blue"
        },
        {
            name: "blueFive_also",
            value: 5,
            color: "blue"
        },
        {
            name: "blueSix",
            value: 6,
            color: "blue"
        },
        {
            name: "blueSix_also",
            value: 6,
            color: "blue"
        },
        {
            name: "blueSeven",
            value: 7,
            color: "blue"
        },
        {
            name: "blueSeven_also",
            value: 7,
            color: "blue"
        },
        {
            name: "blueEight",
            value: 8,
            color: "blue"
        },
        {
            name: "blueEight_also",
            value: 8,
            color: "blue"
        },
        {
            name: "blueNine",
            value: 9,
            color: "blue"
        },
        {
            name: "blueNine_also",
            value: 9,
            color: "blue"
        },
        {
            name: "blueSkip",
            value: 10,
            color: "blue"
        },
        {
            name: "blueSkip_also",
            value: 10,
            color: "blue"
        },
        {
            name: "blueReverse",
            value: 11,
            color: "blue"
        },
        {
            name: "blueReverse_also",
            value: 11,
            color: "blue"
        },
        {
            name: "blueDrawTwo",
            value: 12,
            color: "blue"
        },
        {
            name: "blueDrawTwo_also",
            value: 12,
            color: "blue"
        },

        // ================== YELLOW DECK ================== //
        {
            name: "yellowZero",
            value: 0,
            color: "yellow"
        },
        {
            name: "yellowZero_also",
            value: 0,
            color: "yellow"
        },
        {
            name: "yellowOne",
            value: 1,
            color: "yellow"
        },
        {
            name: "yellowOne_also",
            value: 1,
            color: "yellow"
        },
        {
            name: "yellowTwo",
            value: 2,
            color: "yellow",
        },
        {
            name: "yellowTwo_also",
            value: 2,
            color: "yellow"
        },
        {
            name: "yellowThree",
            value: 3,
            color: "yellow"
        },
        {
            name: "yellowThree_also",
            value: 3,
            color: "yellow"
        },
        {
            name: "yellowFour",
            value: 4,
            color: "yellow"
        },
        {
            name: "yellowFour_also",
            value: 4,
            color: "yellow"
        },
        {
            name: "yellowFive",
            value: 5,
            color: "yellow"
        },
        {
            name: "yellowFive_also",
            value: 5,
            color: "yellow"
        },
        {
            name: "yellowSix",
            value: 6,
            color: "yellow"
        },
        {
            name: "yellowSix_also",
            value: 6,
            color: "yellow"
        },
        {
            name: "yellowSeven",
            value: 7,
            color: "yellow"
        },
        {
            name: "yellowSeven_also",
            value: 7,
            color: "yellow"
        },
        {
            name: "yellowEight",
            value: 8,
            color: "yellow"
        },
        {
            name: "yellowEight_also",
            value: 8,
            color: "yellow"
        },
        {
            name: "yellowNine",
            value: 9,
            color: "yellow"
        },
        {
            name: "yellowNine_also",
            value: 9,
            color: "yellow"
        },
        {
            name: "yellowSkip",
            value: 10,
            color: "yellow"
        },
        {
            name: "yellowSkip_also",
            value: 10,
            color: "yellow"
        },
        {
            name: "yellowReverse",
            value: 11,
            color: "yellow"
        },
        {
            name: "yellowReverse_also",
            value: 11,
            color: "yellow"
        },
        {
            name: "yellowDrawTwo",
            value: 12,
            color: "yellow"
        },
        {
            name: "yellowDrawTwo_also",
            value: 12,
            color: "yellow"
        },
        {
            name: "wildCard",
            value: 13,
            color: "black"
        },
        {
            name: "wildCard_also",
            value: 13,
            color: "black"
        },
        {
            name: "wildDrawFour",
            value: 14,
            color: "black"
        },
        {
            name: "wildDrawFour_also",
            value: 14,
            color: "black"
        }

    ];

    /* =============  RNG ============= */

    // let randomNum = function() {
    //    let i = (Math.floor(Math.random() * 54 - 1) + 2);
    //     return deck[i];
    // };
    // switch (randomNum) {
    //         case 1:
    //             card.value = 0;
    //             card.color = "red";
    //             break;
    //         case 2:
    //             card.value = 1;
    //             card.color = "red";
    //             break;
    //         case 3:
    //             card.value = 2;
    //             card.color = "red";
    //             break;
    //         case 4:
    //             card.value = 3;
    //            card.color = "red";
    //             break;
    //         case 5:
    //             card.value = 4;
    //             card.color = "red";
    //             break;
    //         case 6:
    //             card.value = 5;
    //             card.color = "red";
    //             break;
    //         case 7:
    //             card.value = 6;
    //             card.color = "red";
    //             break;
    //         case 8:
    //             card.value = 7;
    //             card.color = "red";
    //             break;
    //         case 9:
    //             card.value = 8;
    //             card.color = "red";
    //             break;
    //         case 10:
    //             card.value = 9;
    //             card.color = "red";
    //             break;
    //         case 11:
    //             card.value = "skip";
    //             card.color = "red";
    //             break;
    //         case 12:
    //             card.value = "reverse";
    //             card.color = "red";
    //             break;
    //         case 13:
    //             card.value = "drawTwo";
    //             card.color = "red";
    //             break;
    //         case 14:
    //             card.value = 0;
    //             card.color = "green";
    //             break;
    //         case 15:
    //             card.value = 1;
    //             card.color = "green";
    //             break;
    //         case 16:
    //             card.value = 2;
    //             card.color = "green";
    //             break;
    //         case 17:
    //             card.value = 3;
    //             card.color = "green";
    //             break;
    //         case 18:
    //             card.value = 4;
    //             card.color = "green";
    //             break;
    //         case 19:
    //             card.value = 5;
    //             card.color = "green";
    //             break;
    //         case 20:
    //             card.value = 6;
    //             card.color = "green";
    //             break;
    //         case 21:
    //             card.value = 7;
    //             card.color = "green";
    //             break;
    //         case 22:
    //             card.value = 8;
    //             card.color = "green";
    //             break;
    //         case 23:
    //             card.value = 9;
    //             card.color = "green";
    //             break;
    //         case 24:
    //             card.value = "skip";
    //             card.color = "green";
    //             break;
    //         case 25:
    //             card.value = "reverse";
    //             card.color = "green";
    //             break;
    //         case 26:
    //             card.value = "drawTwo";
    //             card.color = "green";
    //             break;
    //         case 27:
    //             card.value = 0;
    //             card.color = "blue";
    //             break;
    //         case 28:
    //             card.value = 1;
    //             card.color = "blue";
    //             break;
    //         case 29:
    //             card.value = 2;
    //             card.color = "blue";
    //             break;
    //         case 30:
    //             card.value = 3;
    //             card.color = "blue";
    //             break;
    //         case 31:
    //             card.value = 4;
    //             card.color = "blue";
    //             break;
    //         case 32:
    //             card.value = 5;
    //             card.color = "blue";
    //             break;
    //         case 33:
    //             card.value = 6;
    //             card.color = "blue";
    //             break;
    //         case 34:
    //             card.value = 7;
    //             card.color = "blue";
    //             break;
    //         case 35:
    //             card.value = 8;
    //             card.color = "blue";
    //             break;
    //         case 36:
    //             card.value = 9;
    //             card.color = "blue";
    //             break;
    //         case 37:
    //             card.value = "skip";
    //             card.color = "blue";
    //             break;
    //         case 38:
    //             card.value = "reverse";
    //             card.color = "blue";
    //             break;
    //         case 39:
    //             card.value = "drawTwo";
    //             card.color = "blue";
    //             break;
    //         case 40:
    //             card.value = 0;
    //             card.color = "yellow";
    //             break;
    //         case 41:
    //             card.value = 1;
    //             card.color = "yellow";
    //             break;
    //         case 42:
    //             card.value = 2;
    //             card.color = "yellow";
    //             break;
    //         case 43:
    //             card.value = 3;
    //             card.color = "yellow";
    //             break;
    //         case 44:
    //             card.value = 4;
    //             card.color = "yellow";
    //             break;
    //         case 45:
    //             card.value = 5;
    //             card.color = "yellow";
    //             break;
    //         case 46:
    //             card.value = 6;
    //             card.color = "yellow";
    //             break;
    //         case 47:
    //             card.value = 7;
    //             card.color = "yellow";
    //             break;
    //         case 48:
    //             card.value = 8;
    //             card.color = "yellow";
    //             break;
    //         case 49:
    //             card.value = 9;
    //             card.color = "yellow";
    //             break;
    //         case 50:
    //             card.value = "skip";
    //             card.color = "yellow";
    //             break;
    //         case 51:
    //             card.value = "reverse";
    //             card.color = "yellow";
    //             break;
    //         case 52:
    //             card.value = "drawTwo";
    //             card.color = "yellow";
    //             break;
    //         case 53:
    //             card.value = "wild";
    //             card.color = "black";
    //             break;
    //         case 54:
    //             card.value = "wildDrawFour";
    //             card.color = "black";
    //             break;
    //     }

    /* ==== end RNG ==== */


