import { Search } from 'lucide-react'
import './Button.css'
import '../../Global.css'
export function Button (props) {
    return (
        <button>{props.name} 
        {props.showIcon !== false && <Search className='icon' />}
        </button>
    )
}