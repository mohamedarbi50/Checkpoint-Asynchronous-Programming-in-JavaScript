async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // delay of 1 second
      console.log(values[i]);
    }
  }
  
  const values = ['apple', 'banana', 'cherry'];
  iterateWithAsyncAwait(values);

  
  async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  awaitCall();

  

  async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  awaitCall();

  


  async function concurrentRequests() {
    try {
      const request1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
      const request2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
      
      const [response1, response2] = await Promise.all([request1, request2]);
      
      const data1 = await response1.json();
      const data2 = await response2.json();
      
      console.log('Data from Post 1:', data1);
      console.log('Data from Post 2:', data2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  concurrentRequests();

  


  async function parallelCalls(urls) {
    try {
      const requests = urls.map(url => fetch(url)); // Create an array of fetch requests
      const responses = await Promise.all(requests); // Wait for all requests to resolve
      
      const dataPromises = responses.map(response => response.json()); // Parse each response
      const allData = await Promise.all(dataPromises); // Wait for all JSON parsing to finish
      
      console.log(allData); // Log the responses
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  parallelCalls(urls);

  


  