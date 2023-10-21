function print(a, b) {
    let current = a;

    let intervalId = setInterval(function () {
        console.log(current);
        if (current === b) clearInterval(intervalId);
        current++;
    }, 1000);
}

print(5, 9);