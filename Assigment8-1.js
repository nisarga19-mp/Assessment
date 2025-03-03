// Creating promises
const promise1 = Promise.resolve("Hello");
const promise2 = Promise.resolve("You are learning");
const promise3 = Promise.resolve("Javascript");
const promise4 = Promise.reject("Bye");

async function printMessages() {
    try {
        const msg3 = await promise3;
        console.log(msg3);
        
        const msg1 = await promise1;
        console.log(msg1);

        const msg2 = await promise2;
        console.log(msg2);
    } catch (error) {
        console.error("Error:", error);
    }
}

printMessages();
