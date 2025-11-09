const arg = process.argv[2];

if (arg === undefined) {
    console.log("Not a number");
} else {
    const num = parseInt(arg);
    if (!isNaN(num)) {
        console.log("My number:", num);
    } else {
        console.log("Not a number");
    }
}