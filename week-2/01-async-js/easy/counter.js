async function counter() {
    let count = 0;
    const endTime = Date.now() + 10000; // 10 seconds from now

    while (Date.now() < endTime) {
        console.log(count);
        count++;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

counter();