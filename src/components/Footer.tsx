export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="text-white font-medium text-center p-5">
            <p>© {year} <span className="text-red-400">REDPM</span></p>
            <p>rhabidpmendoza@gmail.com</p>
        </footer>
    );
}