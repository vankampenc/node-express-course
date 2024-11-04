const { writeFile } = require("fs");

console.log("at start");

writeFile("./temporary/output.txt", "This is line 1\n",
    (err, result) => {
        console.log("at point 1");
        if (err) {
            console.log("This error occured: ", err);
            return
        } else {
            writeFile("./temporary/output.txt", "This is line 2\n", { flag: 'a' },
                (err, result) => {
                    console.log("at point 2");
                    if (err) {
                        console.log("This error occured: ", err);
                        return
                    } else {
                        writeFile("./temporary/output.txt", "This is line 3\n", { flag: 'a' },
                            (err, result) => {
                                console.log("at point 3");
                                if (err) {
                                    console.log("This error occured: ", err);
                                    return
                                }
                            })
                    }
                })
        }
    })