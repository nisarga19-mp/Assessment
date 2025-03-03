async function doCode(promise) {
    try {
        const result = await promise;
        console.log("Promise resolved:", result);
    } catch (error) {
        console.error("Promise rejected:", error);
    } finally {
        console.log("Finally block executed.");
    }
}

// Case (a): When promise2 is returned
doCode(promise2);

// Case (b): When promise4 is returned
doCode(promise4);
