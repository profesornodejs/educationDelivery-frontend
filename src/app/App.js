import { Header } from "./components/Header.js"
import { Footer } from "./components/Footer.js"
import { Content } from "./components/Content.js"


export function App() {
    const $main = document.getElementById("root")

    $main.appendChild(Header())
    $main.appendChild(Content())
    $main.appendChild(Footer())
}