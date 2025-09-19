import { type ReactNode } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface Props {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Container