
function fetchData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === 'error') {
                reject(new Error('Failed to fetch data'));
            } else {
                resolve(`Data fetched: ${data}`);
            }
        }, 1000);
    });
}


function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!data) {
                reject(new Error('No data to process'));
            } else {
                resolve(`Processed data: ${data}`);
            }
        }, 1000);
    });
}


async function sequentialOperations() {
    try {
        const fetchedData = await fetchData('example');
        console.log(fetchedData);

        const processedData = await processData(fetchedData);
        console.log(processedData);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}


function parallelOperations() {
    Promise.all([fetchData('example'), fetchData('another')])
        .then(([result1, result2]) => {
            console.log(result1);
            console.log(result2);
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}


console.log('Sequential Operations:');
sequentialOperations();


console.log('\nParallel Operations:');
parallelOperations();
