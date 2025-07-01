'use client';

export function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        
        <footer className="text-white text-center p-3">

            <div className="font-sans font-medium">
                <p>© {currentYear} REDPM</p>
                <p>rhabidpmendoza@gmail.com</p>
            </div>

        </footer>

    );

}