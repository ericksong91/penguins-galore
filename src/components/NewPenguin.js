import { React, useState } from "react";
import { Form } from "semantic-ui-react";

function NewPenguin({ onSubmit }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [sciName, setSciName] = useState("");

    function handleSubmit() {
        const newPenguin = {
            "name": name,
            "desc": desc,
            "image": img,
            "sciName": sciName,
            "liked": false
        }

        console.log(newPenguin)

        fetch("http://localhost:3001/penguins", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newPenguin),
        })
            .then((r) => r.json())
            .then((data) => {
                setName("");
                setDesc("");
                setImg("");
                setSciName("");
                onSubmit(data);
            })
            .catch(() => alert("Error updating new Penguin!"))
    }

    return (
        <div className="penguinsNew">
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <Form.Group widths="equal">
                    <Form.Input className="name" placeholder="Penguin Name..."
                        name="name" value={name} onChange={(e) => {
                            console.log(e.target.value)
                            setName(e.target.value)
                        }} />
                    <Form.Input className="sciname" placeholder="Latin/Scientific Name..."
                        name="sciname" value={sciName} onChange={(e) => {
                            console.log(e.target.value)
                            setSciName(e.target.value)
                        }} />
                    <Form.TextArea className="desc" placeholder="Description of Penguin..."
                        name="desc" value={desc} maxLength={200} onChange={(e) => {
                            console.log(e.target.value)
                            setDesc(e.target.value)
                        }} />
                    <Form.Input
                        className="image"
                        placeholder="Image URL of Penguin..."
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