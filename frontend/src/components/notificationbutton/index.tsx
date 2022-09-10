import notificationbutton from '../../assets/img/notificationbutton.svg';
import "./styles.css";
function Button() {
    return (

        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={notificationbutton} alt="botaodenotificacao" />
            </div>
        </div>

    )
}

export default Button
