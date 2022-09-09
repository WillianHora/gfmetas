import Logo from '../../assets/img/logo.svg'

function Header(){
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta" />
                <h1>Gf Metas</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/willian_hora/"> @willian_hora</a>
                </p>
            </div>
        </header>
            )
}

export default Header
