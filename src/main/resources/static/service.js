import React, { useState } from 'react';
import $ from 'jquery';

// Function to update the JSON data in the textarea
function updateJsonDisplay(jsonData) {
  const jsonDisplayElement = document.getElementById("json-display");
  jsonDisplayElement.value = JSON.stringify(jsonData, null, 2); // Beautify JSON for better display
}

class Person {
  constructor(id, firstName, lastName, birthDate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}

const DataService = () => {
  // State variables
  const [jsonData, setJsonData] = useState('');

  // Event handler for form submission - create
  const create = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // ... (Rest of your create function)

    try {
      const response = await $.ajax({
        type: 'POST',
        crossDomain: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        url: '/create',
        data: personData,
        dataType: 'JSON',
      });

      updateJsonDisplay(response); // Update JSON data in the textarea
    } catch (error) {
      updateJsonDisplay('An error occurred during the create request.');
    }
  };

  // ... (Rest of your event handlers)

  return (
    <div>
      <div className="header">
        <h1>Your Header</h1>
      </div>

      {/* Render your form here with input fields and buttons */}
      <div className="form-container-container">
        <form onSubmit={create}>
          {/* Your input fields */}
          {/* Your submit button */}
        </form>
      </div>

      {/* Display JSON data in the textarea */}
      <textarea id="json-display" value={jsonData} readOnly></textarea>
    </div>
  );
};

export default DataService;
