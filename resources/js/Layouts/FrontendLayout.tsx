
import { PropsWithChildren } from 'react';
import Header from '@/Components/Frontend/Header';
import Footer from '@/Components/Frontend/Footer';
import BackToTopButton from '@/Components/Frontend/BackToTopButton';
export default function Frontend({ children }: PropsWithChildren) {
    return (
        <>
            <Header/>
                <BackToTopButton/>
                <div className="w-full">
                    {children}
                </div>
            <Footer/>
        </>
    );
}
