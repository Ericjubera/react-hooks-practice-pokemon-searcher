import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [formData,setFormData]=useState({
name:"",
hp:"",
frontUrl:"",
backUrl:"" 
 });


  function handleChange (e){
    setFormData({...formData,[e.target.name]:e.target.value})
console.log(e.target.name)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onChange={handleChange}
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group  widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
