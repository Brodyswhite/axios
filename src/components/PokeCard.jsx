const PokeCard = props => {
    const {poke} = props;

    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{poke.name}</h2>
            </div>
        </div>
    );

}

export default PokeCard;