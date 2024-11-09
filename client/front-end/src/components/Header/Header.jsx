import './Header.css'
import { Button } from './Button'
import '../../Global.css'
export function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>co-op</h1>
                <nav>
                    <Button />
                    <ul>
                        <li>Entrar</li>
                        <li>Cadastrar</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}