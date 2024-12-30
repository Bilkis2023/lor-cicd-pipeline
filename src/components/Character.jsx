const Character = ({ name, imgUrl, birth, death, race, realm, spouse }) => {
    return(
        <div>
            <h2>{ name }</h2>
            
            <img src={imgUrl}  alt={name}  />
            
            <ul>
                <li>
                    Death of Birth: {birth}
                </li>
                <li>
                    Death of Death: {death}
                </li>
                <li>
                    Race: {race}
                </li>
                <li>
                    Realm: {realm}
                </li>
                <li>
                    Spouse: {spouse}
                </li>
            </ul>
        </div>
    );
};
            
export default Character;