   
   let contents = []
   //LocalStorage test
   const addItem = (e)=>  {
    e.preventDefault();
    let id = parseInt(e.target.getAttribute('data-id'));
    console.log('add to cart item', id);
    let testObject = { id, name, beds, guests, price };
    contents.push(testObject)
    // Put the object into storage
    localStorage.setItem('contents', JSON.stringify(contents));
    // Retrieve the object from storage
    let retrievedObject = localStorage.getItem('contents');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

export default addItem