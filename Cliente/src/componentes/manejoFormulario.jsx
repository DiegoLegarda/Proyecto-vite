import React, { useState } from 'react';
function ManejoFormulario() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Introduzca su nombre:
                <input type="text"
                    value={name}
                    onChange={(evento) => setName(evento.target.value)}
                />
                <p>{name}</p>
            </label>
        </form>
    )
}

export default ManejoFormulario;