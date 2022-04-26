import { ContextProvider } from '@components/Karaoke/SocketContext';
import KaraokeApp from '@components/Karaoke/KaraokeApp';
import Navbar from "@components/common/main_navbar";
import Footer from "@components/common/footer";

const style = {
    footer: `static`
}

export default function Karaoke() {
    return (
        <>
            
            <ContextProvider>
            <Navbar />
                <KaraokeApp />
                <div className="footer">
                    <Footer className={style.footer} />
                </div>
            </ContextProvider>
            
        </>

    )
}