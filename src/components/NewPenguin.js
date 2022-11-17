import { React, useState } from "react";
import { Form } from "semantic-ui-react";

function NewPenguin() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");


    return (
        <div className="penguinsNew">
            <h2>Penguins New Form</h2>
            <Form onSubmit={() => { console.log("You Submitted!") }}>
                <Form.Group widths="equal">
                    <Form.Input fluid label="Name" placeholder="Name"
                        name="name" value={name} onChange={(e) => {
                            console.log(e.target.value)
                            setName(e.target.value)
                            }} />
                    <Form.Input fluid label="Description" placeholder="Description"
                        name="desc" value={desc} onChange={(e) => {
                            console.log(e.target.value)
                            setDesc(e.target.value)
                            }} />
                    <Form.Input
                        fluid
                        label="Image URL"
                        placeholder="url"
                        name="img"
                        value={img}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setImg(e.target.value)
                            }}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default NewPenguin;