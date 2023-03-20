import './Page.css'
import Header from "./Header"
import Footer from './Footer'

function Page() {
    return(
        <div className='page'>
        <Header />
        <Content />
        <Footer />
        </div>
    )
}

function Content(){
    return(
        <div className='main'>
        <p>Facts about React!</p>
        <ul className='main-list'>
            <li>A javascript library to build user interfaces.</li>
            <li>React was created by Jordan Walke.</li>
            <li>It was open-sourced at JSConf US in May 2013</li>
            <li>Maintained by Meta(Facebook)</li>
            <li>Component based library, JSX based design architecture, Declarative UI library</li>
        </ul>
        </div>
    )
}


export default Page 