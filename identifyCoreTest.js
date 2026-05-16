const CIN = 91;

function validateIdentity(CIN) {

    let valid = true;

    for (let i = 2; i < CIN; i++) {
        if (CIN % i == 0) {
            valid = false;
            break;
        }
    }

    if (valid) {
        console.log("Agent Approved: Identity pattern is untraceable.");
    } else {
        console.log("Rejected: Identity pattern shows external links.");
    }
}

validateIdentity(CIN);