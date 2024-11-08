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
                        <li>Log In</li>
                        <li>Sign In</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}