import './Header.css'
import { Button } from './Button'
import '../../Global.css'
export function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>co-op</h1>
                <nav>
                    <Button name="Buscar"/>
                    <ul>
                        <li>Entrar</li>
                        <li><Button name="Cadastrar" showIcon={false}/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}