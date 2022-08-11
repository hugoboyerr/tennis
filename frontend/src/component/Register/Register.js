import "./Register.css";

export const Register = ({onSubmit}) => {
    return <form className="Register" onSubmit={onSubmit}>
        <fieldset name="player1">
            <label htmlFor="player1[name]">Joueur 1</label>
            <input type="text" name="player1[name]" placeholder="Nom" required="required"/>
            <input type="number" name="player1[level]" placeholder="Niveau" required="required" step="1" min="1"
                   max="10"/>
        </fieldset>
        <fieldset name="player2">
            <label htmlFor="player2[name]">Joueur 2</label>
            <input type="text" name="player2[name]" placeholder="Nom" required="required"/>
            <input type="number" name="player2[level]" placeholder="Niveau" required="required" step="1" min="1"
                   max="10"/>
        </fieldset>
        <button type="submit">Enregistrer</button>
    </form>
}