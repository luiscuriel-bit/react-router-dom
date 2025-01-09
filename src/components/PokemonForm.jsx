import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonForm = (props) => {
    const initialState = {
        name: '',
        weight: 0,
        height: 0,
    };
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = e => {
        // Prevent the default form submission (no refresh)
        e.preventDefault();
        props.addPokemon(formData);
        setFormData(initialState);
        navigate('/pokemon')
    };

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div>
            <h1>PokemonForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                /> 
                <label htmlFor="Weight">Weight</label>
                <input
                    type="text"
                    name="weight"
                    id="weight"
                    onChange={handleChange}
                    value={formData.weight}
                />
                <label htmlFor="Height">Height</label>
                <input
                    type="text"
                    name="height"
                    id="height"
                    onChange={handleChange}
                    value={formData.height}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PokemonForm;