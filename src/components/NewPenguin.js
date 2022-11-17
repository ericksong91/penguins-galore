import React from "react";
import { Form } from "semantic-ui-react";

function NewPenguin() {
    return (
        <div className="penguinsNew">
            <h2>Penguins New Form</h2>
            <Form onSubmit={() => { console.log("You Submitted!") }}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Name" placeholder="Name" name="name" value={1} onChange={console.log("name")} />
                    <Form.Input fluid label="hp" placeholder="hp" name="hp" value={2} onChange={console.log("hp")} />
                    <Form.Input
                        fluid
                        label="Image URL"
                        placeholder="url"
                        name="frontUrl"
                        value={3}
                        onChange={() => console.log("Image")}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default NewPenguin;